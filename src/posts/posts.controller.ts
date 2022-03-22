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
    @Body() postData: { title: string; content: string },
  ): Promise<PostModel> {
    const { title, content } = postData;
    return this.postsService.create({
      title,
      content,
      author: {
        connect: { email: req.user.email },
      },
    });
  }

  @Get()
  async getPublishedPosts(): Promise<PostModel[]> {
    return this.postsService.findAll({
      where: { published: true },
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
