import { PostDto } from "../../api/models/post.dto";
import { Post } from "../post-details/post";

export const mapPostDtoToFull =(dto:PostDto): Post => {
    return {
        id: dto.id,
        slug: dto.slug,
        url: dto.url,
        title: dto.title,
        content: dto.content,
        image: dto.image,
        updatedAt: new Date(),
        publishedAt: new Date(),
        thumbnail: dto.thumbnail,
        status: dto.status,
        category: dto.category,
        userId: dto.userId
    }
}