export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export type PostPreview = Pick<Post, "id" | "title">