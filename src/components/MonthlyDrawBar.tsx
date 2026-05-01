'use client';

import { useState, useEffect } from 'react';
import useNautilusEmbed from '@/hooks/useNautilusEmbed';

const ANIMATION_DURATION = 300;

function MonthlyDrawModal({ onClose }: { onClose: () => void }) {
  const [isClosing, setIsClosing] = useState(false);

  useNautilusEmbed();

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, ANIMATION_DURATION);
  };

  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <style jsx global>{`
        .monthly-draw-backdrop {
          opacity: 0;
          transition: opacity 300ms ease-out;
        }
        .monthly-draw-backdrop.open {
          opacity: 1;
        }
        .monthly-draw-modal {
          opacity: 0;
          transform: scale(0.94) translateY(12px);
          transition: opacity 300ms ease-out, transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .monthly-draw-modal.open {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      `}</style>

      <div
        className={`fixed inset-0 bg-black/55 backdrop-blur-sm z-[51] monthly-draw-backdrop ${!isClosing ? 'open' : ''}`}
        onClick={handleClose}
      />

      <div
        className="fixed inset-0 z-[52] flex items-center justify-center p-4 overflow-y-auto"
        onClick={handleClose}
      >
        <div
          className={`monthly-draw-modal relative w-full max-w-md rounded-2xl overflow-hidden my-auto ${!isClosing ? 'open' : ''}`}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: '#715924',
            border: '5px solid #DEA726',
            boxShadow: '4px 4px 0px 3px #4A3520, 0 20px 40px rgba(0,0,0,0.3)',
          }}
        >
          <div className="px-5 py-3.5 border-b border-[#DEA726]/40 flex justify-between items-center">
            <div>
              <h2 className="text-base font-bold text-[#f7d70e] leading-tight">Enter the Monthly Draw!</h2>
              <p className="text-xs text-white/75 mt-0.5">Win One Free Month of Washes</p>
            </div>
            <button
              onClick={handleClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white flex-shrink-0"
              aria-label="Close"
              type="button"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="p-4 max-h-[75vh] overflow-y-auto">
            <div
              data-nautilus-embed="form"
              data-src="/c/form/a8f55bc4-5ef1-44f9-84cb-677d724aca9b"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default function MonthlyDrawBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <>
      <div
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-auto"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <div
          className="flex items-center gap-2 sm:gap-5 bg-white/95 backdrop-blur-md rounded-full pl-3 sm:pl-6 pr-1.5 sm:pr-2.5 py-1.5 sm:py-2.5 shadow-lg border border-[#DEA726]/40"
          style={{ boxShadow: '0 8px 24px rgba(113, 89, 36, 0.18)' }}
        >
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 sm:gap-4 min-w-0 text-left cursor-pointer group"
          >
            <img
              src="/hibiscus.png"
              alt=""
              className="w-7 h-7 sm:w-9 sm:h-9 object-contain flex-shrink-0 group-hover:scale-110 transition-transform"
            />
            <div className="min-w-0 hidden sm:block pr-2">
              <h3 className="text-[#715924] font-semibold text-sm leading-tight whitespace-nowrap">
                Enter the Monthly Draw!
              </h3>
              <p className="text-[#715924]/60 text-[11px] leading-tight whitespace-nowrap">
                Win One Free Month of Washes
              </p>
            </div>
            <div className="min-w-0 sm:hidden">
              <h3 className="text-[#715924] font-semibold text-[13px] leading-tight whitespace-nowrap">
                Monthly Draw
              </h3>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center px-3 sm:px-5 py-1.5 sm:py-2 bg-[#DEA726] text-white font-semibold rounded-full hover:bg-[#715924] transition-colors text-[11px] sm:text-xs whitespace-nowrap flex-shrink-0"
          >
            <span className="sm:hidden">Enter</span>
            <span className="hidden sm:inline">Enter Now</span>
          </button>
          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full text-[#715924]/40 hover:bg-[#715924]/10 hover:text-[#715924] transition-colors flex-shrink-0"
            aria-label="Dismiss"
          >
            <svg width="12" height="12" viewBox="0 0 20 20" fill="none" className="sm:w-[14px] sm:h-[14px]">
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && <MonthlyDrawModal onClose={() => setIsOpen(false)} />}
    </>
  );
}
