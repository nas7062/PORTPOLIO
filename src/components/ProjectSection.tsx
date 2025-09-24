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
    <div id="project" className="min-h-screen mx-auto  2xl:px-60 snap-start">
      <h2 className="text-center text-5xl mb-10">PROJECT</h2>
      <div className=" grid grid-cols-1 lg:max-w-full max-w-[800px]  px-4 mx-auto lg:grid-cols-2  justify-items-center gap-x-4 space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex h-80  w-full text-center  items-center  border border-gray-200   shadow-md hover:shadow-xl  hover:-translate-y-2 transform transition-all duration-300 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col justify-center">
              <img
                src={project.image}
                alt="프로젝트 이미지"
                width={280}
                height={280}
                loading="lazy"
                className="rounded-xl w-40 h-40 sm:w-60 sm:h-64 self-center ml-2"
              />
              <div className="text-xs sm:text-base mt-4">팀원:{project.group}</div>
            </div>

            <div className="flex flex-col flex-1 p-4 ">
              <p className="text-md sm:text-2xl  ">{project.title}</p>
              <p className="sm:px-2 text-gray-600 text-xs sm:text-base">{project.description}</p>
              <div className="py-1 flex flex-wrap gap-1 sm:mt-2 ">
                {project.stack?.map((st, idx) => (
                  <span
                    key={idx}
                    className="ml-1 text-[8px] sm:text-xs border text-white bg-sky-400 border-sky-400 rounded-lg px-2 py-1 "
                  >
                    {st}
                  </span>
                ))}
              </div>

              <div className="flex sm:justify-center gap-1 sm:gap-10 mt-auto flex-col sm:flex-row    ">
                <button
                  onClick={() => openDetail(project)}
                  className="cursor-pointer border border-gray-300 rounded-lg text-xs sm:text-base text-white px-2 py-1 bg-gray-800 hover:bg-gray-300 hover:text-gray-800"
                >
                  상세 보기
                </button>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-300 rounded-lg text-xs sm:text-base text-white px-2 py-1 bg-gray-800 hover:bg-gray-300 cursor-pointer hover:text-gray-800"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
