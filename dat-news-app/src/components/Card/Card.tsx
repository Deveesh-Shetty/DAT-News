import { Link } from "@pankod/refine-nextjs-router/pages";
import React from "react";

interface CardProps {
  urlToImage: string;
  title: string;
  description: string;
}
export default function Card({ urlToImage, title, description }: CardProps) {
  return (
    <div className="flex flex-col bg-white shadow-gray-500 shadow-md rounded-md flex-1 h-full">
      <Link href={`/news/${title}`}>
        <img
          src={urlToImage}
          alt={title}
          className="rounded-t-md cursor-pointer"
        />
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800">{title}</h1>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </Link>
    </div>
  );
}
