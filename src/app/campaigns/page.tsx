import Link from "next/link";
import { PostPreview } from "@/types";

async function fetchJson<T>(url: string): Promise<T> {
    const res = await fetch(url)

    if (!res.ok) {
        throw new Error(res.statusText)
    }

    return res.json()
}

export default async function Campaigns() {

    const posts = await fetchJson<PostPreview[]>("https://jsonplaceholder.typicode.com/posts");
    
    return(
        <main>
            <h1 className="text-white text-xl">Campaign Page</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <p>{post.title}</p>
                    <Link href={`/campaigns/${post.id}`} className="bg-purple-500">Campaign</Link>
                </div>
            ))}
        </main>
    );
}