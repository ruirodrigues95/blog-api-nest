import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostModel, Prisma } from '@prisma/client';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(
    @Body() postData: { title: string; content: string; authorId: string },
  ): Promise<PostModel> {
    const { title, content, authorId } = postData;
    return this.postsService.create({
      title,
      content,
      author: {
        connect: { id: authorId },
      },
    });
  }

  @Get()
  async getPublishedPosts(): Promise<PostModel[]> {
    return this.postsService.findAll({
      where: { published: true },
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PostModel> {
    return this.postsService.findOne({ id: Number(id) });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() postData: Prisma.PostUpdateInput,
  ): Promise<PostModel> {
    return this.postsService.update({
      where: { id: Number(id) },
      data: postData,
    });
  }

  @Put('publish/:id')
  async publishPost(@Param('id') id: string): Promise<PostModel> {
    return this.postsService.update({
      where: { id: Number(id) },
      data: { published: true },
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<PostModel> {
    return this.postsService.remove({ id: Number(id) });
  }
}
