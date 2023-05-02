import { Category } from "./category";

export interface Announcement {
    id: string;
    title: string;
    author: string;
    message: string;
    categoryId: string;
    imageUrl: string;
}
