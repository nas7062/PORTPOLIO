import P1 from '../assets/p1.jpg';
import P2 from '../assets/p2.jpg';
import P3 from '../assets/p3.jpg';
import P4 from '../assets/p4.png';
import A2 from '../assets/A2.png';

export const projects = [
  {
    id: 0,
    title: 'SIMVEX - TDP',
    description: `교과서 그림만으로는 이해하기 어려운 복잡한 기계 구조, 이제 3D로 돌려보고 분해하며 배우세요.
SIMVEX는 3D 기계 모델을 활용한 인터랙티브 학습 플랫폼입니다. `,
    stack: ['Next.js', 'Tailwind', 'three.js(R3F)', 'TypeScript'],
    image: A2,
    date: '2026.02.01 ~ 2026.02.10 ',
    group: 'PM1,디자이너1,백엔드2,프론트2',
    github: 'https://github.com/nas7062/TDP',
    demo: 'https://simvex-tdp.vercel.app/',
    detail: {
      title: '담당 역할 & 기여도',
      sections: [
        {
          name: '3D 인터랙션 아키텍처 설계',
          bullets: [
            'React Three Fiber 기반 3D 렌더링 아키텍처 설계 및 GLB 모델 로딩 구조 구현',
            'Explode, Camera, Selected Part 상태를 분리하여 불필요한 리렌더링 최소화',
            'useMemo 적용으로 모델 조작 시 연산 비용 감소 및 렌더링 성능 개선',
          ],
        },
        {
          name: '3D 학습 UX 구현',
          bullets: [
            'OrbitControls 기반 회전·줌 인터랙션 구현으로 직관적인 구조 탐색 UX 제공',
            '부품 선택 시 상세 정보 패널과 연동하여 학습 몰입도 향상',
            '사용자 카메라 및 분해도 상태 Snapshot 저장 기능 구현으로 학습 연속성 확보',
          ],
        },
        {
          name: '모델 데이터 구조 정리',
          bullets: [
            'Blender 기반 GLB 모델 구조 정리 및 Mesh 네이밍 규칙 표준화',
            '모델 부품 선택 및 정보 매핑 구조 설계로 유지보수성 개선',
          ],
        }
      ],
    },
  },
  {
    id: 1,
    title: '10012',
    description: `10012는 Next.js와 Supabase를 활용한 개인 프로젝트로기획부터 설계 디자인 개발까지 혼자 진행하는 블로그 프로젝트입니다. `,
    stack: ['Next.js', 'Tailwind', 'TANSTACK QUERY', 'TypeScript', 'supabase'],
    image: P4,
    group: '개인 프로젝트',
    github: 'https://github.com/nas7062/10012_BLOG',
    demo: 'https://next-blog-10012.vercel.app/',
    detail: {
      title: '담당 역할 & 기여도',
      sections: [
        {
          name: '인증 시스템 설계',
          bullets: [
            'Auth.js + Kakao OAuth + Supabase 기반 인증 시스템 설계',
            'JWT 기반 세션 관리 및 미들웨어 기반 라우트 보호 구현',
            '사용자 인증 흐름(가입 → 로그인 → 권한 검증) 전체 구조 설계',
          ],
        },
        {
          name: '콘텐츠 플랫폼 구조 설계',
          bullets: [
            '게시글·댓글·좋아요 CRUD 구조 설계 및 서버 상태 관리 로직 구현',
            'React Query 기반 서버 상태 관리로 데이터 동기화 처리',
            '옵티미스틱 업데이트 적용으로 사용자 인터랙션 지연 최소화',
          ],
        },
        {
          name: '데이터 탐색 UX 개선',
          bullets: [
            'useInfiniteQuery 기반 무한 스크롤 구현으로 콘텐츠 탐색 경험 개선',
            '태그 및 Query 기반 검색 구조 설계',
          ],
        },
        {
          name: '파일 업로드 및 스토리지 관리',
          bullets: [
            'React Dropzone 기반 파일 업로드 UI 구현',
            'Supabase Storage 연동으로 이미지 저장 및 접근 관리',
          ],
        },
        {
          name: 'UI/UX 및 SEO 최적화',
          bullets: [
            'Tailwind Breakpoints 기반 반응형 UI 설계',
            'next-themes 기반 다크/라이트 모드 지원',
            'OpenGraph 및 메타데이터 설정으로 SEO 최적화',
          ],
        },
        {
          name: '성능 최적화',
         bullets: [
    "동적 임포트(next/dynamic)를 적용하여 초기 번들 크기 감소",
    "Next.js Image 컴포넌트를 활용한 이미지 최적화 (lazy loading, responsive)",
    "불필요한 JS 제거 및 코드 분할(Code Splitting)",
    "이미지 최적화 및 lazy loading 적용으로 LCP 약 2.3s → 1.2s 개선",
    "CDN 캐싱을 활용하여 정적 리소스 응답 속도 개선"
  ],
        }
      ],
    },
},
{
  id: 2,
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
        name: '지도 렌더링 성능 최적화',
        bullets: [
          'Kakao Map 기반 제휴처 탐색 지도 설계 및 구현',
          '줌 레벨 기반 마커 개수 제한 및 viewport 기반 렌더링 적용',
          '대량 마커 렌더링 시 발생하는 성능 문제 해결',
        ],
      },
      {
        name: '지도 인터랙션 안정화',
        bullets: [
          '지도 객체를 React 상태와 분리하여 불필요한 리렌더링 제거',
          'Polyline 경로 고정 버그를 useMemo 및 컴포넌트 분리로 해결',
        ],
      },
      {
        name: 'AI 기반 추천 UX 구현',
        bullets: [
          'AI 경유지 자동 추가 기반 길찾기 기능 구현',
          '추천 이유 시각화를 통해 사용자 이해도 향상',
        ],
      }
    ],
  },
},
  {
    id: 4,
    title: '로드픽',
    description: `사용자가 쉽고 체계적으로 여행 계획을 세울 수 있도록 돕는 기능을 중심으로, 
      팀원 간의 협업을 통해 기획부터 디자인, 프론트엔드 구현까지 전 과정을 경험합니다.`,
    stack: ['React', 'CSS Module', 'TANSTACK QUERY','node.js'],
    image: P1,
    group: '프론트엔드 4명',
    date: '2025.05.07 ~ 2025.05.20 (2주)',
    github: 'https://github.com/nas7062/road-pick-fe',
    demo: 'https://roadpick.vercel.app/',
    detail: {
      title: '담당 역할 & 기여도',
      sections: [
        {
          name: '여행 일정 관리 UX 구현',
          bullets: [
            '캘린더 기반 여행 일정 관리 기능 설계 및 구현',
            '일정 추가·수정·삭제 시 즉시 UI 반영 구조 설계',
          ],
        },
        {
          name: '지도 기반 경로 시각화',
          bullets: [
            'Kakao Map Polyline을 활용한 여행 동선 시각화 기능 구현',
            '선택 장소 변경 시 경로 자동 갱신 로직 설계',
          ],
        },
        {
          name: '백엔드 API 설계',
          bullets: [
            'Node.js(Express) 기반 여행 계획 CRUD API 직접 구현',
            'React Query useMutation 기반 상태 동기화 처리',
          ],
        }
      ],
    },
  },
  {
    id: 3,
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
          name: '공통 UI 시스템 구축',
          bullets: [
            'Header, Input, Card 등 재사용 가능한 UI 컴포넌트 설계',
            '디자인 일관성 및 유지보수성 확보',
          ],
        },
        {
          name: '사용자 인증 흐름 구현',
          bullets: [
            '이메일 인증 기반 회원가입 및 로그인 흐름 설계',
            'CSRF 토큰 적용으로 인증 보안 강화',
          ],
        },
        {
          name: '사용자 활동 관리 기능',
          bullets: [
            '마이페이지 기반 사용자 정보 관리 기능 구현',
            '리뷰 작성 및 조회 기능 개발로 사용자 활동 관리 가능',
          ],
        }
      ],
    },
  },
  
    
];
