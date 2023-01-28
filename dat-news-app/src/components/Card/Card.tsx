import { Link } from "@pankod/refine-nextjs-router/pages";
import React from "react";

interface CardProps {
  urlToImage: string;
  title: string;
  description: string;
  label?: string;
}
export default function Card({
  urlToImage,
  title,
  description,
  label,
}: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={urlToImage} alt="" />
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-800">{title}</h1>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      <div className="flex justify-between items-center px-4 py-3 ">
        <span className="text-sm font-mediumJ text-red-700 bg-[#fce7f3] px-5 py-1 rounded-md">
          {label}
        </span>
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-bold"
        >
          <Link href={`/news/${title}`}>Read More</Link>
        </button>
      </div>
    </div>
  );
}
