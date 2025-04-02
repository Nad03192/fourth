"use client";

export default function ProjectDetail({ project }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 p-5">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-black text-lg font-bold"
        >
          ✖
        </button>

        <img 
          src={project.image || "/default-image.jpg"} 
          alt={slide.title || "Project Image"}
          className="w-full h-64 object-cover rounded-md mb-4"
        />

        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-700">{project.description || "No description available."}</p>
      </div>
    </div>
  );
}
