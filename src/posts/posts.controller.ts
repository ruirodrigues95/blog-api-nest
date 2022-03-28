import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  Request,
  UnauthorizedException,
  Query,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostModel, Prisma } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Request() req,
    @Body() postData: { title: string; content: string; published: boolean },
  ): Promise<PostModel> {
    const { title, content, published } = postData;
    return this.postsService.create({
      title,
      content,
      published,
      author: {
        connect: { email: req.user.email },
      },
    });
  }

  @Get()
  async getPublishedPosts(@Query('page') page: string) {
    return this.postsService.findAll({
      take: 4,
      cursor: +page !== 0 ? { id: +page } : undefined,
      skip: +page === 0 ? 0 : 1,
      where: { published: true },
      orderBy: {
        id: Prisma.SortOrder.desc,
      },
      include: {
        author: {
          select: {
            email: true,
            firstName: true,
            lastName: true,
            avatar: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('my-posts')
  async getPostsByUserId(@Query('page') page: string, @Request() req) {
    const userId = req.user.userId;

    return this.postsService.findAll({
      take: 4,
      cursor: +page !== 0 ? { id: +page } : undefined,
      skip: +page === 0 ? 0 : 1,
      where: { authorId: userId },
      orderBy: {
        id: Prisma.SortOrder.desc,
      },
      include: {
        author: {
          select: {
            email: true,
            firstName: true,
            lastName: true,
            avatar: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PostModel> {
    return this.postsService.findOne({
      where: {
        id: +id,
      },
      include: {
        author: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
            avatar: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
    });
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Request() req,
    @Param('id') id: string,
    @Body() postData: Prisma.PostUpdateInput,
  ): Promise<PostModel> {
    const existingPost = await this.postsService.findOne({
      where: { id: +id },
    });

    if (existingPost.authorId !== req.user.userId) {
      throw new UnauthorizedException();
    }

    return this.postsService.update({
      where: { id: Number(id) },
      data: postData,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Put('publish/:id')
  async publishPost(
    @Request() req,
    @Param('id') id: string,
  ): Promise<PostModel> {
    const existingPost = await this.postsService.findOne({
      where: { id: +id },
    });

    if (existingPost.authorId !== req.user.userId) {
      throw new UnauthorizedException();
    }

    return this.postsService.update({
      where: { id: Number(id) },
      data: { published: true },
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Request() req, @Param('id') id: string): Promise<PostModel> {
    const existingPost = await this.postsService.findOne({
      where: { id: +id },
    });

    if (existingPost.authorId !== req.user.userId) {
      throw new UnauthorizedException();
    }

    return this.postsService.remove({ id: Number(id) });
  }
}
