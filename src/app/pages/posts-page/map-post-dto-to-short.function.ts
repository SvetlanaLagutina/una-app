import { PostDto } from "../../api/models/post.dto";
import { PostShort } from "./post-short";
import { Post } from "../post-details/post";

export const mapPostDtoToShort = (dto: PostDto): PostShort => {
    return {
        id: dto.id,
        title: dto.title,
        content: dto.content,
        thumbnail: dto.thumbnail,
        updatedAt: new Date(27, 10, 2023),
    };
}

// export const mapPostDtoToFull =(dto:PostDto): Post => {
//     return {
//         id: dto.id,
//         title: dto.title,
//         content: dto.content,
//         image: dto.image,
//         updatedAt: new Date(),
//         publishedAt: new Date(),
//     }
// }