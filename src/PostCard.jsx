import React, { useState } from "react";

function PostCard({ id, userId, title, body }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <div
        className="flex flex-col justify-between bg-white p-6 rounded-lg shadow
        border border-transparent text-center w-96 
        transition-all duration-300 ease-in-out
        hover:scale-105 hover:border-gray-300 hover:bg-pink-100
        hover:shadow-lg"
      >
        {/* Bagian Atas */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3 font-poppins">
          {title}
        </h2>

        {/* Bagian Tengah */}
        <p className="text-gray-700 mb-3 leading-relaxed font-body whitespace-pre-line">
          {body}
        </p>

        <p className="text-gray-500 text-sm mb-4">
          <strong>Id:</strong> {id} | <strong>User:</strong> {userId}
        </p>

        {/* Bagian Bawah - Tombol */}
        <button
          onClick={() => setIsClicked(!isClicked)}
          className={`mt-2 py-2 rounded-md text-white font-semibold 
          transition-all duration-300 ease-in-out
          ${
            isClicked
              ? "bg-special-red2 hover:brightness-110"
              : "bg-gray-500 hover:bg-gray-400"
          }`}
        >
          {isClicked ? "Tombol sudah diklik" : "Silakan Klik"}
        </button>
      </div>
    </div>
  );
}

export default PostCard;
