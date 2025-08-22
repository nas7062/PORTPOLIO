import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Download, MapPin, Copy, Check, Send } from 'lucide-react';

const CONTACT = {
  email: 'nas7062@naver.com',
  github: 'https://github.com/nas7062',
  linkedin: 'https://www.linkedin.com/in/%EB%AF%BC%EC%84%9D-%EA%B9%80-b9776b37a/',
  resumeUrl: '/resume.pdf',
  location: 'Incheon Seogu, South Korea',
};

export default function ContactSection() {
  const [copied, setCopied] = useState(false); // 이메일 주소 복사 state 
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const validate = () => {
    const next = { name: '', email: '', message: '' } as typeof errors;
    if (!form.name.trim()) next.name = '이름을 입력해 주세요';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = '올바른 이메일을 입력해 주세요';
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

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // 메일 제목
    const subject = encodeURIComponent(`[Portfolio] ${form.name}님의 문의`);
    // 메일 내용
    const body = encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`);
      // 사용자의 메일 클라이언트를 열도록 mailto 링크 생성
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

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
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl border p-3 bg-slate-50">
                <Mail className="size-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">이메일</h3>
                <p className="text-slate-600 break-all">{CONTACT.email}</p>
                <div className="mt-3 flex gap-2">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm bg-slate-900 text-white hover:bg-slate-800"
                  >
                    <Send className="size-4" /> 메일 쓰기
                  </a>
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
                <MapPin className="size-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">위치</h3>
                <p className="text-slate-600">{CONTACT.location}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm hover:bg-slate-100"
                >
                  지도에서 보기
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
            <a
              href={CONTACT.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm hover:bg-slate-100"
            >
              <Download className="size-4" /> 이력서 열기
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">이름</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="홍길동"
                className={`w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400 ${errors.name ? 'border-red-400' : 'border-slate-200'}`}
              />
              {errors.name && <p className="mt-1 text-xs  text-red-500">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">이메일</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
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

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 bg-slate-900 text-white hover:bg-slate-800"
            >
              <Send className="size-4" /> 메일로 보내기
            </button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}
