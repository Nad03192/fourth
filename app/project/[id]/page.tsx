"use client";  // Mark this as a client-side component

import { use } from "react";  // Import use() hook to unwrap the params
import ProjectDetail from "../../pages/details";  // Ensure the correct path

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);  // Unwrap the params to access `id`

  if (!id) {
    // Handle cases where id is not found (optional)
    return <p>Project not found.</p>;
  }

  return (
    <div>
      <ProjectDetail params={id} /> {/* Pass project data to the component */}
    </div>
  );
}
