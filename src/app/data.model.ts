export interface TODOList {
    entries: Entry[];
}

export interface Entry {
    id: string;
    description: string;
    dueDate?: Date;
}

export interface EntryData {
    description: string;
    dueDate?: Date;
}
