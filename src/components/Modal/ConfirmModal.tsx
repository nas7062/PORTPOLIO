// modal/ConfirmModal.tsx
import React from 'react';

interface ConfirmModalProps {
  title?: string;
  message?: string;
  resolve: (value: boolean) => void;
  reject: (reason?: any) => void;
}

export default function ConfirmModal({
  title = '확인',
  message = '이 작업을 계속하시겠습니까?',
  resolve,
  reject,
}: ConfirmModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="rounded-xl bg-white p-6 shadow-xl min-w-[300px]">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-4">{message}</p>
        <div className="flex gap-2 justify-end">
          <button onClick={() => reject('cancel')} className="px-3 py-1 border rounded">
            취소
          </button>
          <button onClick={() => resolve(true)} className="px-3 py-1 bg-black text-white rounded">
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
