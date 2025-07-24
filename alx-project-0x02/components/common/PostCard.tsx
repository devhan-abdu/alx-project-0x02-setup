import { PostProps } from "@/interfaces";
import { title } from "process";

const PostCard: React.FC<PostProps> = ({title, content}) => {
     return (
        <div className="px-4 py-2 bg-gray-300 text-black">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
     )
}

export default PostCard;