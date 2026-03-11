export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export type PostPreview = Pick<Post, "id" | "title"> // Pick - Only what you need
export type PostDraft = Omit<Post, "id" | "userId"> // Omit - Everything but
export type PostUpdate = { id: number } & Partial<Omit<Post, "id">> // Partial - everything becomes optional
export type ReadonlyPost = Readonly<Post> // Readonly - everything becomes immutable
