import cardImage from '../assets/profile.jpg';

export const projects = [
  {
    id: 1,
    title: '로드픽',
    description: 'React와 TailwindCSS를 활용한 개인 포트폴리오 제작',
    image: cardImage,
    github: 'https://github.com/username/portfolio',
    demo: 'https://portfolio.example.com',
  },
  {
    id: 2,
    title: 'U:MATE',
    description: 'OpenWeather API를 활용한 실시간 날씨 정보 제공 앱',
    image: cardImage,
    github: 'https://github.com/username/weather-app',
    demo: 'https://weather.example.com',
  },
  {
    id: 3,
    title: '지중해',
    description: '할 일 관리와 필터링 기능이 있는 Todo 웹 애플리케이션',
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
            className="flex h-72  w-[660px] text-center  border border-gray-500 rounded-xl overflow-hidden"
          >
            <img
              src={project.image}
              alt="프로젝트 이미지"
              width={300}
              height={300}
              loading="lazy"
            />
            <div className="flex flex-col flex-1 ">
              <p>{project.title}</p>
              <p>{project.description}</p>
              <div className="flex justify-center gap-10 ">
                <button>github</button>
                <button>설명 보기</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
