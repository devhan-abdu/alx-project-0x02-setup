import { CardData } from "@/interfaces";
import React from "react";

const Card:React.FC<CardData> = ({title, content}) => {
    return (
        <div className="card bg-gray-200 rounded-md px-4 py-2 text-black my-2 max-w-md ">
            <h2 className="card-title">{title}</h2>
            <p className="card-content">{content}</p>
        </div>
    );
}

export default Card;