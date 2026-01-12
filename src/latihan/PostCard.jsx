import React, { useState } from "react";

function PostCard(props) {
  const {id, userId, title, body, ...rest } = props;
  const [clicked, setClicked] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between hover:scale-105 hover:border hover:border-black hover:bg-red-50">
      <h2 className="text-lg font-semibold text-gray-800 mb-3 text-center">
        {title}
      </h2>
      <p className="text-gray-600 text-sm mb-6 text-center">
        {body}
      </p>
      <button 
        className={`${clicked ? "bg-special-red2 hover:bg-special-red" : "bg-gray-01 hover:bg-gray-02"} text-white p-2 rounded-md`}
        onClick={() => setClicked(true)}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  )
}

export default PostCard;