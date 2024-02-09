import { Post } from "contentlayer/generated";
import Postitem from "./Postitem";

interface Props {
    posts: Post[];
}
const PostsLists = ({posts}: Props) => {
  return (
    <>
         {posts.map((post) => (
            <Postitem key={post._raw.flattenedPath} post={post}/>
           ))} 
    </>
  )
}

export default PostsLists