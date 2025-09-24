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
    date: '2025.06.02 ~ 2025.06.27 (3주)',
    detail: {
      title: '담당 역할 & 기여도',
      sections: [
        {
          name: '공통 컴포넌트 개발',
          bullets: [
            '헤더, 인풋 박스, 요금제 카드 등 재사용 가능한 UI 컴포넌트 설계 및 구현',
            '프로젝트 전반에 일관성 있는 디자인과 유지보수성 확보',
          ],
        },
        {
          name: '회원가입 & 로그인',
          bullets: [
            '이메일 중복 확인 및 이메일 인증 기능 구현',
            'CSRF 토큰 적용으로 보안 강화',
            '사용자 인증 흐름(가입 → 인증 → 로그인) 전체 개발',
          ],
        },
        {
          name: '마이페이지',
          bullets: [
            '내 정보 확인/수정/회원 탈퇴 기능 구현',
            '리뷰 작성 및 확인 기능 개발 → 사용자 활동 관리 가능',
          ],
        },
      ],
    },
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
    date: '2025.06.30 ~ 08.07',
    detail: {
      title: '담당 역할 & 기여도',
      sections: [
        {
          name: '지도 페이지 개발',
          bullets: ['검색 & 필터링 기능: 사용자 편의성을 높인 제휴처 검색 및 조건별 필터링'],
        },
        {
          name: '개인화된 정보 제공',
          bullets: [
            '도감(사용자가 방문한 제휴처 기록)',
            '길찾기 경로',
            '제휴처 상세 정보 및 즐겨찾기 기능 구현',
          ],
        },
        {
          name: 'AI 기반 길찾기',
          bullets: [
            'AI가 경유지를 자동 추가해 최적 경로 추천',
            '각 경유지마다 추천 이유를 시각화하여 제공',
          ],
        },
        {
          name: 'AI 추천 제휴처 기능',
          bullets: [
            '개인 맞춤 제휴처 추천 및 추천 이유 제공',
            '일반 제휴처와 구분되도록 시각적 차별화 적용',
          ],
        },
        {
          name: '부가 기능 & 최적화',
          bullets: [
            'OCR 기능: 제휴처 쿠폰/혜택 자동 인식',
            '지도 성능 최적화: 마커 렌더링 최적화 및 불필요한 리렌더링 최소화, 줌 레벨별 마커 개수 제한',
            'Polyline(경로) 문제 해결: 경로 고정이 되지 않는 버그를 useMemo와 컴포넌트 분리로 해결',
          ],
        },
      ],
    },
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
