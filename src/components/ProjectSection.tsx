import P1 from '../assets/p1.jpg';
import P2 from '../assets/p2.jpg';
import P3 from '../assets/p3.jpg';
import ProjectDetailModal from './Modal/ProjectDetailModal';
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
    date: '2025.05.07 ~ 2025.05.20 (2주)',
    github: 'https://github.com/nas7062/road-pick-fe',
    demo: 'https://roadpick.vercel.app/',
    detail: {
      title: '담당 역할 & 기여도',
      sections: [
        {
          name: '공공 API 조사 및 문서화',
          bullets: [
            '관련 Open API를 분석하여 사용 가능 여부 검토',
            'API 엔드포인트, 파라미터, 응답 구조를 문서화',
          ],
        },
        {
          name: '디테일 페이지 구현',
          bullets: [
            '여행지별 상세 정보를 표시하는 페이지 개발',
            'React 기반 컴포넌트 분리 및 재사용성 고려',
            '사용자 친화적인 UI/UX 설계 반영',
          ],
        },
        {
          name: '캘린더 페이지 구현',
          bullets: [
            '여행 계획을 직관적으로 구성할 수 있는 캘린더 기능 개발',
            '일정 추가, 삭제, 수정 기능 구현',
            '일정별 여행지 상세 페이지와 연동',
          ],
        },
        {
          name: '여행 계획(경로) 페이지 구현',
          bullets: [
            '사용자가 선택한 장소들을 카카오맵 Polyline(선)으로 연결해 시각적 동선 표시',
            '장소 추가 및 삭제 기능 구현 → 변경 시 즉시 반영',
            '날짜별 여행 경로 저장 기능 → 일정별 최적화된 이동 동선 관리 가능',
          ],
        },
        {
          name: '백엔드',
          bullets: ['Node.js(Express) 활용하여 여행 계획 CRUD API 직접 구현'],
        },
      ],
    },
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
    <div id="project" className="min-h-screen mt-60  mx-auto  2xl:px-60 snap-start">
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
