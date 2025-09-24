import React, { useEffect, useRef } from 'react';

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
    sections: { name: string; bullets: string[] }[];
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
  // 스크롤되는 본문 영역 ref
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // 바디 스크롤 락 (iOS 포함)
  useEffect(() => {
    const scrollY = window.scrollY;
    const body = document.body;

    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };

    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';
    body.style.overflow = 'hidden';

    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;
      window.scrollTo(0, scrollY);
    };
  }, []);

  // ESC로 닫기
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') resolve('close');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [resolve]);

  // 일부 환경에서 휠 이벤트가 안 먹는 경우를 위한 보강 핸들러
  const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    const el = scrollRef.current;
    if (!el) return;
    // 스크롤 가능한 경우에만 개입
    const canScroll = el.scrollHeight > el.clientHeight;
    if (!canScroll) return;

    // 기본 스크롤이 동작하지 않는 환경을 대비해 수동으로 스크롤
    // (기본 동작이 잘 되는 환경에서도 부작용 없도록 미세 조정)
    const before = el.scrollTop;
    el.scrollTop += e.deltaY;
    const after = el.scrollTop;

    // 실제 스크롤이 발생했다면 배경으로 이벤트가 새지 않게 방지
    if (after !== before) {
      e.stopPropagation();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={() => resolve('close')} // 백드롭 클릭 닫기
    >
      {/* 카드: 세로 플렉스 + 고정 높이(85vh) → 내부 스크롤 확실 */}
      <div
        className="w-[min(800px,92vw)] h-[85vh] bg-white rounded-2xl shadow-xl flex flex-col"
        onClick={(e) => e.stopPropagation()} // 내부 클릭 전파 차단
      >
        {/* 본문: flex-1 + min-h-0 + overflow-y-auto + iOS 스크롤 + 휠 보강 */}
        <div
          ref={scrollRef}
          className="flex-1 min-h-0 overflow-y-auto p-6 md:p-10 overscroll-contain touch-pan-y"
          style={{ WebkitOverflowScrolling: 'touch' }}
          onWheel={onWheel}
        >
          <div className="flex gap-4 flex-col ">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} 이미지`}
                className="w-60 h-60 self-center   object-cover rounded-xl"
              />
            ) : null}

            <div className="flex-1 min-w-0">
              <h2 id="project-modal-title" className="text-xl font-semibold">
                {project.title}
              </h2>

              {project.group && (
                <p className="text-sm text-gray-600 mt-1">팀 구성: {project.group}</p>
              )}

              {project.date && <p className="text-sm text-gray-600 mt-1">{project.date}</p>}

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

              <div className="mt-4">
                <p className="text-lg font-semibold">{project.detail?.title}</p>

                {project.detail?.sections?.map((section) => (
                  <div key={section.name} className="mt-3">
                    <p className="font-medium">{section.name}</p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      {section.bullets.map((bullet, i) => (
                        <li key={i} className="text-sm font-light text-gray-600">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 하단 버튼: 줄어들지 않게 고정 */}
        <div className="border-t p-4 md:p-5 flex justify-end gap-2 shrink-0">
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
