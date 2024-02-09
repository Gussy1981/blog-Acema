import { allPosts, Post } from "contentlayer/generated"
import PostsLists from "../components/PostsLists";

const posts:Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

const Posts = () => {
  return (
    <div>
        <h1 className="text-center my-4 text-3xl">Posts</h1>
        <div className="grid gap-4">
            <PostsLists posts={posts} />
        </div>

    </div>
  )
}

export default Posts