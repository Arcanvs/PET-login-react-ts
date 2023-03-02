export interface User {
    id: number;
    name: string;
    image: string;
}

export const UserEmptyState: User = {
    id: 0,
    name: '',
    image: '',
}