import React from "react";
import PostCard from "./PostCard";
import postsData from "./assets/postsData.js";

function Exercise() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-special-red2">
        User Posts
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {postsData.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </div>
  );
}

export default Exercise;
