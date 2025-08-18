import P1 from '../assets/p1.jpg';
import P2 from '../assets/p2.jpg';
import P3 from '../assets/p3.jpg';
export const projects = [
  {
    id: 1,
    title: '로드픽',
    description: `사용자가 쉽고 체계적으로 여행 계획을 세울 수 있도록 돕는 기능을 중심으로, 
      팀원 간의 협업을 통해 기획부터 디자인, 프론트엔드 구현까지 전 과정을 경험합니다.`,
    stack: ['React', 'CSS Module', 'TANSTACK QUERY'],
    image: P1,
    github: 'https://github.com/nas7062/road-pick-fe',
    demo: 'https://roadpick.vercel.app/',
  },
  {
    id: 2,
    title: 'U:MATE',
    description: `AI챗봇기반 통신사 요금제 추천 및 관리 서비스을 개발하는 것을 목표로 합니다.
AI챗봇과 요금제 조회·비교·리뷰 기능을 통해 합리적인 선택을 돕고, 디지털 취약 계층(시니어)도 쉽게 이용할 수 있도록 접근성과 편의성을 강화하는 것이 목적입니다.`,
    stack: ['React', 'Tailwind', 'TANSTACK QUERY', 'TypeScript'],
    image: P2,
    github: 'https://github.com/nas7062/U-Mate',
    demo: 'https://umate.vercel.app/',
  },
  {
    id: 3,
    title: '지중해',
    description: `지중해는 통신사 멤버십 제휴처 안내 지도 서비스로
혜택을 잘 모르는 사용자가 현재 위치를 기반으로 
주변 제휴처와 혜택을 추천받고, 동네 사람들과 정보를 공유하며, 
게이미피케이션 요소로 사용자의 접근성을 높이도록 설계한 서비스입니다.
`,
    stack: ['React', 'Tailwind', 'TANSTACK QUERY', 'TypeScript'],
    image: P3,
    github: 'https://github.com/nas7062/URECA-5CEAN',
    demo: 'https://jijonnghae.site/',
  },
];

export default function ProjectSection() {
  return (
    <div id="project" className="min-h-screen scroll-mt-20  mx-auto px-60">
      <h2 className="text-center text-5xl mb-10">PROJECT</h2>
      <div className=" grid grid-cols-2 justify-items-center gap-x-8 space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex h-72  w-[660px] text-center  border border-gray-200   shadow-md hover:shadow-xl  hover:-translate-y-2 transform transition-all duration-300 rounded-xl overflow-hidden"
          >
            <img
              src={project.image}
              alt="프로젝트 이미지"
              width={280}
              height={280}
              loading="lazy"
              className="rounded-xl w-60 h-64 self-center ml-2"
            />
            <div className="flex flex-col flex-1 p-4 ">
              <p className="text-2xl ">{project.title}</p>
              <p className="px-2 text-gray-600">{project.description}</p>
              <div className="py-2 ">
                {project.stack?.map((st, idx) => (
                  <span
                    key={idx}
                    className="ml-1 text-xs border text-white bg-sky-400 border-sky-400 rounded-lg px-2 py-1 "
                  >
                    {st}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-10 mt-auto ">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-300 rounded-lg text-white px-2 py-1 bg-gray-800 hover:bg-gray-300 cursor-pointer hover:text-gray-800"
                >
                  Github
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-300 rounded-lg text-white px-2 py-1 bg-gray-800 hover:bg-gray-300 cursor-pointer hover:text-gray-800"
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
