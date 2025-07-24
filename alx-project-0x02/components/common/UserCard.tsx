import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, username}) => {
    return (
        <div className="bg-gray-100 p-4 rounded-md shadow-md max-w-sm">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-gray-600">Email: {email}</p>
            <p className="text-gray-600">Username: {username}</p>
        </div>
    );
}

export default UserCard;