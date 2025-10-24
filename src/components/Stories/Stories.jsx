import React from "react";

const stories = [
  {
    id: 1,
    image: "https://i.postimg.cc/Dzx47mjX/adopt1.jpg",
    title: "Bella found her forever home 🐶",
    desc: "WarmPaws helped connect Bella with her loving new family. She’s happier than ever!",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/5N9qY3XM/adopt2.jpg",
    title: "Max’s second chance 🐕‍🦺",
    desc: "After months of care, Max found a warm, cozy home through our adoption program.",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/1Rg3tc8B/adopt3.jpg",
    title: "Whiskers joins a big family 🐱",
    desc: "Whiskers is now surrounded by kids and playtime all day long!",
  },
];

const Stories = () => {
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
