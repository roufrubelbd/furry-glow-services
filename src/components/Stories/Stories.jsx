import React, { useEffect, useState } from "react";

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("/stories.json")
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  return (
    <div className="bg-emerald-50 py-16 my-20">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-8">
          Adoption Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white border border-emerald-100 rounded-xl shadow hover:shadow-md transition duration-300 p-4"
            >
              <img
                src={story.image}
                alt={story.title}
                className="rounded-lg h-56 w-full object-cover"
              />
              <h3 className="text-xl font-semibold text-emerald-600 mt-3">
                {story.title}
              </h3>
              <p className="text-gray-600 mt-2">{story.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
