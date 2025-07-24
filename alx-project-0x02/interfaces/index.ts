export interface CardData {
    id?: number;
    title: string;
    content: string;
}

export interface CardProps {
    onClose: () => void;
    onSubmit: (post: CardData) => void;
}

export interface ButtonProps {
    size: 'small' | 'medium' | 'large';
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    children:React.ReactNode,
    onClick?:() => void,
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
