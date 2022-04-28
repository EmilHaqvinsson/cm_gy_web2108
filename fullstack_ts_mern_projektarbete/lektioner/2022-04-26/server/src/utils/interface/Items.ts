export interface CreateItem {
    title: string;
    assignedTo: string;
    isDone: boolean;
}

export interface ReadItem {
    _id: string;
    title: string;
    assignedTo: string;
    isDone: boolean;
    createdAt: Date;
    updatedAt: Date;
}