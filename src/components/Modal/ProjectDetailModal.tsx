import { useEffect, useRef } from 'react';
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
  detail: { title: string; sections: { name: string; bullets: string[] }[] };
};

export default function ProjectDetailModal({
  project,
  resolve,
  reject,
}: {
  project: Project;
  resolve: (v: 'close' | 'go-demo' | 'go-github') => void;
  reject: (r?: any) => void;
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // 바디 스크롤 락
  useEffect(() => {
    const y = window.scrollY;
    const b = document.body;
    const prev = {
      position: b.style.position,
      top: b.style.top,
      left: b.style.left,
      right: b.style.right,
      width: b.style.width,
      overflow: b.style.overflow,
    };
    b.style.position = 'fixed';
    b.style.top = `-${y}px`;
    b.style.left = '0';
    b.style.right = '0';
    b.style.width = '100%';
    b.style.overflow = 'hidden';
    return () => {
      b.style.position = prev.position;
      b.style.top = prev.top;
      b.style.left = prev.left;
      b.style.right = prev.right;
      b.style.width = prev.width;
      b.style.overflow = prev.overflow;
      window.scrollTo(0, y);
    };
  }, []);

  // ESC 닫기
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && resolve('close');
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [resolve]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center overscroll-contain"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={() => resolve('close')}
    >
      <div
        className="w-[min(800px,92vw)] h-[85vh] bg-white rounded-2xl shadow-xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 내부 스크롤러 */}
        <div
          ref={scrollRef}
          className="flex-1 min-h-0 overflow-y-auto p-6 md:p-10 overscroll-contain touch-pan-y"
          style={{ WebkitOverflowScrolling: 'touch' }}
          onWheelCapture={(e) => e.stopPropagation()}
        >
          <div className="flex gap-4 flex-col">
            {project.image && (
              <img
                src={project.image}
                alt={`${project.title} 이미지`}
                className="w-60 h-60 self-center object-cover rounded-xl"
              />
            )}

            <div className="flex-1 min-w-0">
              <h2 id="project-modal-title" className="text-xl font-semibold">
                {project.title}
              </h2>
              {project.group && (
                <p className="text-sm text-gray-600 mt-1">팀 구성: {project.group}</p>
              )}
              {project.date && (
                <p className="text-sm text-gray-600 mt-1">프로젝트 기간 : {project.date}</p>
              )}
              <p className="text-slate-700 mt-3 whitespace-pre-line">{project.description}</p>

              <div className="mt-3 flex flex-wrap gap-1">
                {project.stack?.map((st, i) => (
                  <span
                    key={i}
                    className="text-xs border text-white bg-sky-400 border-sky-400 rounded-lg px-2 py-1"
                  >
                    {st}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <p className="text-lg font-semibold">{project.detail?.title}</p>
                {project.detail?.sections?.map((section) => (
                  <div key={section.name} className="mt-3">
                    <p className="font-medium">{section.name}</p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      {section.bullets.map((b, i) => (
                        <li key={i} className="text-sm font-light text-gray-600">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 하단 버튼 고정 */}
        <div className="border-t p-4 md:p-5 flex justify-end gap-2 shrink-0">
          {project.github && (
            <button onClick={() => resolve('go-github')} className="px-3 py-1.5 border rounded">
              GitHub
            </button>
          )}
          {project.demo && (
            <button onClick={() => resolve('go-demo')} className="px-3 py-1.5 border rounded">
              View Site
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
