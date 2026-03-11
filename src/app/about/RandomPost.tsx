'use client';
import { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { Post } from "@/types";

export default function RandomPost() {

    const [randomId] = useState(() => Math.floor(Math.random() * 100) + 1);

    const { data, loading, error } = useFetch<Post>(`https://jsonplaceholder.typicode.com/posts/${randomId}`)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Uh oh! There was an error</p>

    return(
        <main>
                <div>
                    <p>{data?.body}</p>
                </div>
        </main>
    );
}