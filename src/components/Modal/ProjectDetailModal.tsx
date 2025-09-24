// Modal/ProjectDetailModal.tsx
import { div } from 'framer-motion/client';
import React from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  stack: string[];
  image?: string;
  github?: string;
  demo?: string;
  date?: string;
  group?: string;
  detail: {
    title: string;
    sections: {
      name: string;
      bullets: string[];
    };
  };
};

export default function ProjectDetailModal({
  project,
  resolve,
  reject,
}: {
  project: Project;
  resolve: (value: 'close' | 'go-demo' | 'go-github') => void;
  reject: (reason?: any) => void;
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 ">
      <div className="rounded-2xl bg-white p-10 shadow-xl w-[min(800px,92vw)] ">
        <div className="flex gap-4 ">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} 이미지`}
              className="w-40 h-40 object-cover rounded-xl"
            />
          ) : null}

          <div className="flex-1">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            {project.group && (
              <p className="text-sm text-gray-600 mt-1">팀 구성: {project.group}</p>
            )}
            <p className="text-sm text-gray-600 mt-1">{project.date}</p>
            <p className="text-slate-700 mt-3 whitespace-pre-line">{project.description}</p>

            <div className="mt-3 flex flex-wrap gap-1">
              {project.stack?.map((st, idx) => (
                <span
                  key={idx}
                  className="text-xs border text-white bg-sky-400 border-sky-400 rounded-lg px-2 py-1"
                >
                  {st}
                </span>
              ))}
            </div>
            <div>
              <p className="text-lg font-semibold mt-4">{project.detail?.title}</p>
              {project.detail?.sections?.map((section) => (
                <div key={section.name} className="mt-3">
                  <p className="font-medium ">{section.name}</p>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    {section.bullets.map((bullet: string, i: number) => (
                      <li key={i} className="text-sm">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-2">
          {project.github && (
            <button onClick={() => resolve('go-github')} className="px-3 py-1.5 border rounded">
              GitHub
            </button>
          )}
          {project.demo && (
            <button onClick={() => resolve('go-demo')} className="px-3 py-1.5 border rounded">
              데모 보기
            </button>
          )}
          <button
            onClick={() => resolve('close')}
            className="px-3 py-1.5 bg-black text-white rounded"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
