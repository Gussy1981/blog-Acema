import Link from "next/link";
import { Post } from "contentlayer/generated";

interface Props {
  post: Post;
}

const Postitem = ({ post }: Props) => {
  return (
    <article className="p-4 rounded-md shadow-md">
      <h2 className="text-2x1">
        <Link href={post.url}>{post.title}</Link>
      </h2>
      <time>
        {new Date(post.date).toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
    </article>
  );
};

export default Postitem;
