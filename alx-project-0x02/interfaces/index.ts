export interface CardProps {
    title: string;
    content: string;
}

export interface CardModelProps {
    onClose: () => void;
    onSubmit: (post: CardProps) => void;
}

export interface ButtonProps {
    size: 'small' | 'medium' | 'large';
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    children:React.ReactNode,
}

export interface PostProps {
    title: string;
    content: string;
    userId: number,
}

export interface UserProps {
    id?: number;
    name: string;
    username: string;
    email: string;
    phone?: string;
    address?: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    };
    website?: string;
    company?: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}
