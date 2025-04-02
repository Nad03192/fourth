"use client";  

import { use } from "react"; 
import ProjectDetail from "../../pages/details";

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);  

  if (!id) {
   
    return <p>Project not found.</p>;
  }

  return (
    <div>
      <ProjectDetail params={id} />
    </div>
  );
}
