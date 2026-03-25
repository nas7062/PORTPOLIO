import { projects } from '../data/project';
import ProjectDetailModal from './Modal/ProjectDetailModal';
import { useModal } from './Modal/useModal';

export default function ProjectSection() {
  const modal = useModal();
  const openDetail = async (project) => {
    try {
      const action = await modal.push<'close' | 'go-demo' | 'go-github'>(
        `proj-detail-${project.id}`,
        ProjectDetailModal,
        { project }
      );

      if (action === 'go-demo' && project.demo) {
        window.open(project.demo, '_blank', 'noopener,noreferrer');
      } else if (action === 'go-github' && project.github) {
        window.open(project.github, '_blank', 'noopener,noreferrer');
      }
      // 'close'는 아무것도 안 해도 됩니다.
    } catch {
      // reject된 경우(배경 클릭 등) 무시 가능
    }
  };

  return (
    <div id="project" className="min-h-screen snap-start">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 py-16">
        <h2 className="text-center text-5xl mb-10">PROJECT</h2>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex h-92 sm:h-80  p-2 flex-col sm:flex-row w-full text-center  items-center  border border-gray-200   shadow-md hover:shadow-xl  hover:-translate-y-2 transform transition-all duration-300 rounded-xl overflow-hidden"
            >
              <div className="flex flex-col justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt="프로젝트 이미지"
                    width={200}
                    height={200}
                    loading="lazy"
                    className="rounded-xl  w-40 h-40 sm:w-56 sm:h-60 self-center ml-2 object-cover"
                  />
                ) : (
                  <div
                    className="w-40 h-40 sm:w-60 sm:h-64 self-center ml-2 rounded-xl bg-slate-100
                  flex items-center justify-center text-slate-400"
                  >
                    No Image
                  </div>
                )}
                <div className="text-xs sm:text-base mt-2">팀원:{project.group}</div>
              </div>

              <div className="flex flex-col flex-1 p-2 sm:p-4 h-full  items-center gap-2 ">
                <p className="text-md sm:text-2xl  ">{project.title}</p>
                <p className="sm:px-2  text-xs sm:text-base">{project.description}</p>
                <div className="py-1 flex flex-wrap gap-1 sm:mt-2 ">
                  {project.stack?.map((st, idx) => (
                    <span
                      key={idx}
                      className="ml-1 text-[8px] sm:text-xs border text-white bg-blue-500 border-blue-500 rounded-lg px-2 py-1 "
                    >
                      {st}
                    </span>
                  ))}
                </div>

                <div className="flex w-full  sm:justify-center gap-1 sm:gap-10 mt-auto ">
                  <button
                    onClick={() => openDetail(project)}
                    className="flex-1 cursor-pointer border  rounded-lg text-xs sm:text-base text-white px-2 py-1 bg-black hover:bg-gray-800 "
                  >
                    상세 보기
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border  rounded-lg text-xs  sm:text-base text-white px-2 py-1 bg-black hover:bg-gray-800 cursor-pointer "
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
