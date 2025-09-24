import P1 from '../assets/p1.jpg';
import P2 from '../assets/p2.jpg';
import P3 from '../assets/p3.jpg';
import ConfirmModal from './Modal/ConfirmModal';
import { useModal } from './Modal/useModal';
export const projects = [
  {
    id: 1,
    title: '로드픽',
    description: `사용자가 쉽고 체계적으로 여행 계획을 세울 수 있도록 돕는 기능을 중심으로, 
      팀원 간의 협업을 통해 기획부터 디자인, 프론트엔드 구현까지 전 과정을 경험합니다.`,
    stack: ['React', 'CSS Module', 'TANSTACK QUERY'],
    image: P1,
    group: '프론트엔드 4명',
    github: 'https://github.com/nas7062/road-pick-fe',
    demo: 'https://roadpick.vercel.app/',
  },
  {
    id: 2,
    title: 'U:MATE',
    description: `
AI챗봇과 요금제 조회·비교·리뷰 기능을 통해 합리적인 선택을 돕고, 디지털 취약 계층(시니어)도 쉽게 이용할 수 있도록 접근성과 편의성을 강화하는 것을 목표로 합니다.`,
    stack: ['React', 'Tailwind', 'TANSTACK QUERY', 'TypeScript'],
    image: P2,
    group: '프론트엔드 5명',
    github: 'https://github.com/nas7062/U-Mate',
    demo: 'https://umate.vercel.app/',
  },
  {
    id: 3,
    title: '지중해',
    description: `지중해는 통신사 멤버십 제휴처 지도 서비스로
혜택을 잘 모르는 사용자가 위치를 기반으로 주변 제휴처와 혜택을 추천받고,정보를 공유하며, 
게임 요소로 사용자의 접근성을 높이는걸 목표로 합니다.
`,
    stack: ['React', 'Tailwind', 'TANSTACK QUERY', 'TypeScript'],
    image: P3,
    group: '프론트엔드 4명 백엔드 3명',
    github: 'https://github.com/nas7062/URECA-5CEAN',
    demo: 'https://jijonnghae.site/',
  },
  {
    id: 4,
    title: '10012',
    description: `10012는 개인 프로젝트로.기획부터 설계 디자인 개발까지 혼자 진행하는 쇼핑몰 프로젝트입니다.`,
    stack: ['React', 'Tailwind', 'TANSTACK QUERY', 'TypeScript'],
    image: '',
    group: '개인 프로젝트(미완성 진행중)',
    github: 'https://github.com/nas7062/s-shop',
    demo: '',
  },
];

export default function ProjectSection() {
  const modal = useModal();
  const handleDangerAction = async () => {
    try {
      const ok = await modal.push('confirm-delete', ConfirmModal, {
        title: '삭제 확인',
        message: '정말 삭제하시겠습니까?',
      });
      if (ok) {
        console.log('삭제 진행');
      }
    } catch (e) {
      console.log('사용자가 취소했습니다.', e);
    }
  };

  return (
    <div id="project" className="min-h-screen mt-60  mx-auto  2xl:px-60 snap-start">
      <h2 className="text-center text-5xl mb-10">PROJECT</h2>
      <button onClick={handleDangerAction}>중요 작업 실행</button>
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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-300 rounded-lg text-xs sm:text-base text-white px-2 py-1 bg-gray-800 hover:bg-gray-300 cursor-pointer hover:text-gray-800"
                >
                  Github
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-300 rounded-lg text-xs sm:text-base text-white px-2 py-1 bg-gray-800 hover:bg-gray-300 cursor-pointer hover:text-gray-800"
                >
                  View Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
