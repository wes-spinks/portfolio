import { useState } from "react";

export default function ProjectCard({ project }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative border border-gold/40 rounded-xl bg-dark shadow-md overflow-hidden flex flex-col h-full">
      {/* Image area with zoom-in on hover */}
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-130 cursor-pointer"
          onClick={() => setShowModal(true)}
        />
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg md:text-xl font-bold text-gold mb-2">
          {project.title}
        </h3>
        <p className="text-gold/80 flex-1 min-h-[72px]">
          {project.description}
        </p>

        {/* Tags row */}
        {Array.isArray(project.technologies) && project.technologies.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 bg-gold/10 text-gold rounded-full border border-gold/40"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div className="max-w-4xl max-h-[90vh] overflow-auto p-4 bg-dark rounded-xl border border-gold shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
