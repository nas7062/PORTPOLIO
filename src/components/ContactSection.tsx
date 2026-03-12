import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Download, Copy, Check, Pencil, Phone, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const CONTACT = {
  email: 'nas7062@naver.com',
  github: 'https://github.com/nas7062',
  linkedin: 'https://www.linkedin.com/in/%EB%AF%BC%EC%84%9D-%EA%B9%80-b9776b37a/',
  location: 'Incheon Seogu, South Korea',
  velog: 'https://velog.io/@10012/posts',
  Phone: '010-9314-7062',
};

export default function ContactSection() {
  const [copied, setCopied] = useState(false); // 이메일 주소 복사 state
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error' | 'gmail_error'>('idle');

  const validate = () => {
    const next = { name: '', email: '', message: '' } as typeof errors;
    if (!form.name.trim()) next.name = '이름을 입력해 주세요';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = '올바른 이메일을 입력해 주세요';
    }
    if (form.message.trim().length < 10) next.message = '메시지는 10자 이상 입력해 주세요';
    setErrors(next);
    return !next.name && !next.email && !next.message;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email); //클릭보드 api 사용해 복사
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);
    setSendStatus('idle');

    try {
      // EmailJS 설정 - .env 파일에 값들을 설정하세요
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS 설정이 완료되지 않았습니다. .env 파일을 확인하세요.');
      }

     
      const templateParams = {
        to_email: CONTACT.email, 
        from_name: form.name, 
        from_email: form.email,
        message: form.message, 
        subject: `[Portfolio] ${form.name}님의 문의`, 
        reply_to: form.email,
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setSendStatus('success');
      setForm({ name: '', email: '', message: '' }); // 폼 초기화
      
      // 3초 후 성공 메시지 숨기기
      setTimeout(() => {
        setSendStatus('idle');
      }, 3000);
    } catch (error: any) {
      console.error('이메일 전송 실패:', error);
      
      // 412 에러 처리
      if (error?.status === 412) {
        const errorText = error?.text || '';
        
        // Gmail 계정 연결 문제인지 확인
        if (errorText.includes('Invalid grant') || errorText.includes('reconnect')) {
          console.error('Gmail 계정 연결 오류:', {
            status: error.status,
            text: error.text,
            message: 'Gmail 계정 연결이 만료되었습니다. EmailJS 대시보드에서 Gmail 서비스를 다시 연결해주세요.',
          });
          setSendStatus('gmail_error');
        } else {
          // 템플릿 변수 문제
          console.error('템플릿 변수 오류:', {
            status: error.status,
            text: error.text,
            message: 'EmailJS 템플릿에서 요구하는 변수명과 코드에서 보내는 변수명이 일치하지 않습니다.',
            sentVariables: {
              to_email: CONTACT.email,
              from_name: form.name,
              message: form.message,
              subject: `[Portfolio] ${form.name}님의 문의`,
            },
          });
          setSendStatus('error');
        }
      } else {
        setSendStatus('error');
      }
    } finally {
      setIsSending(false);
    }
  };

  const RESUME_URL = '/resume/2026_김민석_이력서.pdf';
  const PORT_URL = '/portfolio/2026_김민석_포트폴리오.pdf';
  return (
    <section
      id="contact"
      className=" min-h-screen scroll-mt-20 px-6 md:px-10 lg:px-16 py-16 bg-gradient-to-b from-white to-slate-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">CONTACT</h2>
          <p className="mt-3 text-lg text-slate-600">
            봐주셔서 감사합니다. 어떤 이야기든 편하게 연락 주세요!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            whileHover={{ y: -4 }}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm "
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl border p-3 bg-slate-50">
                <Mail className="size-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">이메일</h3>
                <p className="text-slate-600 break-all">{CONTACT.email}</p>
                <div className="mt-3 flex gap-2">
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm hover:bg-slate-100"
                  >
                    {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                    {copied ? '복사됨' : '주소 복사'}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ y: -4 }}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl border p-3 bg-slate-50">
                <Download className="size-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">이력서 / 포트폴리오</h3>
                <p className="text-slate-600">PDF 파일을 바로 다운로드.</p>

                <div className="mt-3 flex gap-2">
                  <a
                    href={RESUME_URL}
                    download="Resume_KimMinseok_2025.pdf" // 저장될 기본 파일명
                    className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm bg-slate-900 text-white hover:bg-slate-800"
                  >
                    <Download className="size-4" />
                    이력서
                  </a>

                  {/* 포트폴리오도 따로 두고 싶다면 하나 더 */}
                  <a
                    href={PORT_URL}
                    download="Portfolio_KimMinseok_2025.pdf"
                    className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm hover:bg-slate-100"
                  >
                    <Download className="size-4" />
                    포트폴리오
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl border p-3 bg-slate-50">
                <Github className="size-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">GitHub</h3>
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-800"
                >
                  {CONTACT.github}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl border p-3 bg-slate-50">
                <Linkedin className="size-6" />
              </div>
              <div className="flex-1 ">
                <h3 className="font-semibold text-lg">LinkedIn</h3>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700   underline underline-offset-4  decoration-slate-300 hover:decoration-slate-800"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ y: -4 }}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl border p-3 bg-slate-50">
                <Pencil className="size-6" />
              </div>
              <div className="flex-1 ">
                <h3 className="font-semibold text-lg">Velog</h3>
                <a
                  href={CONTACT.velog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700   underline underline-offset-4  decoration-slate-300 hover:decoration-slate-800"
                >
                  https://velog.io/@10012/posts
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ y: -4 }}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl border p-3 bg-slate-50">
                <Phone className="size-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">휴대폰 번호</h3>
                <p className="text-slate-600">{CONTACT.Phone}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Message Form */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">메시지 보내기</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">보내는 분 성함</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="홍길동"
                className={`w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400 ${errors.name ? 'border-red-400' : 'border-slate-200'}`}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">보내는 분 이메일</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className={`w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400 ${errors.email ? 'border-red-400' : 'border-slate-200'}`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">메시지</label>
            <textarea
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="문의하실 내용을 적어 주세요."
              className={`w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400 ${errors.message ? 'border-red-400' : 'border-slate-200'}`}
            />
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
          </div>

          {sendStatus === 'success' && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm">
              메시지가 성공적으로 전송되었습니다!
            </div>
          )}
          {sendStatus === 'gmail_error' && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-xl text-yellow-800 text-sm">
              <p className="font-semibold mb-2">⚠️ Gmail 계정 연결이 필요합니다</p>
              <p className="text-xs text-yellow-700 mb-2">
                EmailJS에서 Gmail 계정 연결이 만료되었습니다. 다음 단계를 따라주세요:
              </p>
              <ol className="text-xs text-yellow-700 list-decimal list-inside space-y-1">
                <li>EmailJS 대시보드(https://dashboard.emailjs.com)에 로그인</li>
                <li>"Email Services" 메뉴로 이동</li>
                <li>Gmail 서비스를 선택하고 "Reconnect Account" 클릭</li>
                <li>Gmail 계정을 다시 인증</li>
                <li>인증 완료 후 다시 시도해주세요</li>
              </ol>
            </div>
          )}
          {sendStatus === 'error' && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
              <p className="font-semibold mb-1">메시지 전송에 실패했습니다.</p>
              <p className="text-xs text-red-600">
                EmailJS 템플릿 변수명을 확인하세요. 
                <br />
                템플릿에서 사용하는 변수명(to_email, from_name, message, subject)과 일치해야 합니다.
              </p>
            </div>
          )}
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              disabled={isSending}
              className="cursor-pointer inline-flex items-center gap-2 rounded-xl border px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSending ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  전송 중...
                </>
              ) : (
                <>
                  <Mail className="size-4" />
                  메시지 보내기
                </>
              )}
            </button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}
