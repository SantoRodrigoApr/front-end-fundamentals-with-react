import { PostType } from "@/src/app/types"

export default async function Page() {
    const response = await fetch("https://api.vercel.app/blog");
    const posts: PostType[] = await response.json();
    console.log(posts[0])
    return (
        <ul>
            {posts.map((post: PostType) => (
                <li key={post.id}>{post.title}</li>
                ))}
        </ul>
    );
}















