import { Post } from "@/types";

export default async function CampaignDetail({ params }: {params: Promise<{ id: string }>}) {
    const { id } = await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    if (!res.ok) {
        throw new Error(res.statusText)
    }

    const data = (await res.json()) as Post

    return(
        <div>
            <p>Title: {data.title}</p>
            <p>Body: {data.body}</p>
        </div>
    );
}