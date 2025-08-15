import cardImage from '../assets/profile.jpg';

export const projects = [
  {
    id: 1,
    title: '로드픽',
    description: `사용자가 쉽고 체계적으로 여행 계획을 세울 수 있도록 돕는 기능을 중심으로, 
      팀원 간의 협업을 통해 기획부터 디자인, 프론트엔드 구현까지 전 과정을 경험합니다.`,
    stack: ['React', 'CSS Module', 'TANSTACK QUERY'],
    image: cardImage,
    github: 'https://github.com/username/portfolio',
    demo: 'https://portfolio.example.com',
  },
  {
    id: 2,
    title: 'U:MATE',
    description: `AI챗봇기반 통신사 요금제 추천 및 관리 서비스을 개발하는 것을 목표로 합니다.
AI챗봇과 요금제 조회·비교·리뷰 기능을 통해 합리적인 선택을 돕고, 디지털 취약 계층(시니어)도 쉽게 이용할 수 있도록 접근성과 편의성을 강화하는 것이 목적입니다.`,
    stack: ['React', 'Tailwind', 'TANSTACKQUERY', 'TypeScript'],
    image: cardImage,
    github: 'https://github.com/username/weather-app',
    demo: 'https://weather.example.com',
  },
  {
    id: 3,
    title: '지중해',
    description: `지중해는 통신사 멤버십 제휴처 안내 지도 서비스로
혜택을 잘 모르는 사용자가 현재 위치를 기반으로 
주변 제휴처와 혜택을 추천받고, 동네 사람들과 정보를 공유하며, 
게이미피케이션 요소로 사용자의 접근성을 높이도록 설계한 서비스입니다.
`,
    stack: ['React', 'Tailwind', 'TANSTACKQUERY', 'TypeScript'],
    image: cardImage,
    github: 'https://github.com/username/todo-app',
    demo: 'https://todo.example.com',
  },
];

export default function ProjectSection() {
  return (
    <div id="project" className="min-h-screen scroll-mt-20">
      <h2 className="text-center text-5xl mb-10">PROJECT</h2>
      <div className=" grid grid-cols-2 justify-items-center gap-x-16 space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex h-72  w-[660px] text-center  border border-gray-500   shadow-md hover:shadow-xl  hover:-translate-y-2 transform transition-all duration-300 rounded-xl overflow-hidden"
          >
            <img
              src={project.image}
              alt="프로젝트 이미지"
              width={300}
              height={300}
              loading="lazy"
            />
            <div className="flex flex-col flex-1 p-4 ">
              <p className="text-2xl ">{project.title}</p>
              <p className="px-2 text-gray-600">{project.description}</p>
              <div className="py-2 ">
                {project.stack?.map((st) => (
                  <span className="ml-1 text-xs border text-white bg-sky-400 border-sky-400 rounded-lg px-2 py-1 ">
                    {st}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-10 mt-auto ">
                <button className="border border-gray-300 rounded-lg text-white px-2 py-1 bg-gray-800 hover:bg-gray-300 cursor-pointer hover:text-gray-800 ">
                  Github
                </button>
                <button className="border border-gray-300 rounded-lg text-white px-2 py-1 bg-gray-800 hover:bg-gray-300 cursor-pointer hover:text-gray-800 ">
                  설명 보기
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
