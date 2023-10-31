import { PostDto } from "../../api/models/post.dto";
import { PostShort } from "./post-short";

export const mapPostDtoToShort = (dto: PostDto): PostShort => {
    return {
        id: dto.id,
        title: dto.title,
        content: dto.content,
        thumbnail: dto.thumbnail,
        updatedAt: new Date(27, 10, 2023),
    };
}
