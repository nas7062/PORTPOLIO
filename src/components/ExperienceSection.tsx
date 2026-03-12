export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen scroll-mt-20 px-6 md:px-10 lg:px-16 py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">EXPERIENCE</h2>
          <p className="mt-3 text-lg text-slate-600">
            기술 역량과 교육 및 수상 이력을 정리했습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* LEFT : Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>

            <div className="space-y-4 text-slate-700">
              {/* Frontend */}
              <div>
                <h4 className="font-semibold">Frontend</h4>
                <p className="text-sm text-slate-600">
                  React, Next.js, TypeScript, Redux, React Query, Tailwind CSS
                </p>
                <p className="text-sm text-slate-600">
                  o 컴포넌트 기반 아키텍처 설계 및 상태 관리 구조 설계 경험
                </p>
                <p className="text-sm text-slate-600">
                  o CSR/SSR 환경 이해 및 비동기 데이터 흐름 관리
                </p>
                <p className="text-sm text-slate-600">o 렌더링 최적화 및 성능 개선 경험</p>
              </div>

              {/* 3D Web */}
              <div>
                <h4 className="font-semibold">3D Web</h4>
                <p className="text-sm text-slate-600">
                o Three.js, React Three Fiber (R3F)
                  <br />
                  o GLTF 모델 렌더링 및 사용자 인터랙션 구현
                </p>
              </div>

              {/* Collaboration & Design */}
              <div>
                <h4 className="font-semibold">Collaboration</h4>
                <p className="text-sm text-slate-600">
                o GitHub (Branch 전략, PR 기반 협업)
                  <br />
                  o GitHub Actions 기반 CI/CD
                  <br />
                  o Jira, Figma, Slack 협업 경험
                </p>
              </div>
              {/*Testing */}
              <div>
              <h4 className="font-semibold">Testing</h4>
                <p className="text-sm text-slate-600">
                o Unit Test 및 E2E Test 작성으로 핵심 기능 안정성 확보
                <br />
                o CI 환경에서 테스트 자동화 구축으로 배포 전 오류 검증
                <br />
                o 사용자 시나리오 기반 테스트로 주요 기능 버그 방지
                </p>
              </div>
              {/* BackEnd */}
              <div>
                <h4 className="font-semibold">Backend</h4>
                <p className="text-sm text-slate-600">
                o Supabase 기반 인증 및 데이터베이스 연동 경험
                  <br />
                  o Node.js / Java 기반 CRUD API 및 인증·인가 로직 구현
                  <br />
                  o RESTful API 설계 및 클라이언트 연동 경험
                </p>
              </div>
              {/* Mobile */}
              <div>
                <h4 className="font-semibold">Mobile</h4>
                <p className="text-sm text-slate-600">o React Native 기반 모바일 화면 구현 경험</p>
              </div>
            </div>
          </div>

          {/* RIGHT : Awards + Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Awards & Education</h3>

            <div className="space-y-4 text-slate-700">
              {/* Awards */}
              <div>
                <h4 className="font-semibold mb-2">Awards</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>2026 블레이버스 MVP 개발 해커톤(최우수상)</li>
                  <li>o React · Next.js 기반 서비스 설계 및 개발 사용자 경험 개선과</li>
                  <li>o Three.js 활용한 3D 인터렉션 구현</li>
                </ul>
              </div>

              {/* Education */}
              <div>
                <h4 className="font-semibold mb-2">Education</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>성결대학교 / 미디어소프트웨어 (졸업)</li>
                  <li>LG 유플러스 유레카 프론트엔드 개발 교육 과정 수료 </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Experience</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>퓨처 모빌리티 AI (파트타임 인턴)</li>
                  <li>
                    o 스타트업의 MVP 개발 단계에서 파트타임으로 참여하여 OBI AI 디지털 트윈 기반
                    차량 데이터 수집·분석 플랫폼 구축
                  </li>
                  <li>
                    o Next.js와 Supabase를 활용해 페이지 개발과 UI/UX 설계에 참여했으며, 개발
                    과정에서 코드 리뷰, 일정 관리, 협업 프로세스 등을 실무 환경에서 경험
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
