import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prisma.post.create({
      data,
    });
  }

  async findAll(params: {
    where?: Prisma.PostWhereInput;
    include?: Prisma.PostInclude;
    orderBy?: Prisma.PostOrderByWithAggregationInput;
    take?: number;
    cursor?: { id: number };
    skip?: number;
  }) {
    const { where, include, take, cursor, skip, orderBy } = params;

    const posts = await this.prisma.post.findMany({
      take,
      cursor,
      where,
      orderBy,
      include,
      skip,
    });

    return {
      posts: posts,
      nextCursor: posts.length === take ? posts[take - 1].id : undefined,
    };
  }

  async findOne(params: {
    where: Prisma.PostWhereUniqueInput;
    include?: Prisma.PostInclude;
  }): Promise<Post | null> {
    const { where, include } = params;
    return this.prisma.post.findUnique({
      where,
      include,
    });
  }

  async update(params: {
    where: Prisma.PostWhereUniqueInput;
    data: Prisma.PostUpdateInput;
  }): Promise<Post> {
    const { where, data } = params;

    return this.prisma.post.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.PostWhereUniqueInput): Promise<Post> {
    return this.prisma.post.delete({
      where,
    });
  }
}
