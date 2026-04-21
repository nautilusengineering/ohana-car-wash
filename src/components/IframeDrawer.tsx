'use client';

import { useState, useEffect } from 'react';

const ANIMATION_DURATION = 500;
const LOCATION_ID = '87b6929d-c94a-44d1-99cd-e1717ff8e1ca';

interface IframeDrawerProps {
  onClose: () => void;
  productId?: string;
  embedUrl?: string;
  title?: string;
}

export default function IframeDrawer({ onClose, productId, embedUrl: customUrl, title = "Checkout" }: IframeDrawerProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);

  const embedUrl = customUrl ?? `https://www.nautilus-app.com/c/storefront/ohana?locationId=${LOCATION_ID}${productId ? `&productId=${productId}` : ''}&embedded=true`;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), ANIMATION_DURATION);
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
    const initialHeight = window.innerHeight;
    setViewportHeight(initialHeight);

    const updateHeight = () => {
      const currentHeight = window.innerHeight;
      setIsKeyboardVisible(initialHeight - currentHeight > 150);
      setViewportHeight(currentHeight);
      document.documentElement.style.setProperty('--app-height', `${currentHeight}px`);
    };

    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --app-height: 100vh;
          --safe-area-top: env(safe-area-inset-top, 0px);
          --safe-area-bottom: env(safe-area-inset-bottom, 0px);
        }
        @supports (height: 100dvh) {
          :root { --app-height: 100dvh; }
        }
        .payment-drawer-mobile {
          padding-bottom: max(var(--safe-area-bottom), 8px);
        }
        .drawer-overlay {
          opacity: 0;
          transition: opacity 500ms cubic-bezier(0.32, 0.72, 0, 1);
        }
        .drawer-overlay.open {
          opacity: 1;
        }
        .drawer-content {
          transform: translateX(100%);
          transition: transform 500ms cubic-bezier(0.32, 0.72, 0, 1);
        }
        .drawer-content.open {
          transform: translateX(0);
        }
      `}</style>

      <div
        className={`fixed inset-0 bg-black/50 z-[51] drawer-overlay ${!isClosing ? 'open' : ''}`}
        onClick={handleClose}
      />

      <div className="fixed inset-0 z-[52] overscroll-none" onClick={handleClose}>
        <div
          className={`ml-auto h-full w-full md:max-w-[500px] bg-white flex flex-col drawer-content overscroll-none ${!isClosing ? 'open' : ''}`}
          onClick={(e) => e.stopPropagation()}
          style={{ height: isKeyboardVisible ? `${viewportHeight}px` : '100%', touchAction: 'none' }}
        >
          <div
            className="px-4 py-3 border-b border-gray-200 flex justify-between items-center flex-shrink-0"
            style={{ paddingTop: 'max(0.75rem, var(--safe-area-top))' }}
          >
            <h2 className="text-lg font-bold text-gray-900">{title}</h2>
            <button
              onClick={handleClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900"
              aria-label="Close"
              type="button"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="flex-1 relative overflow-hidden payment-drawer-mobile overscroll-contain" style={{ touchAction: 'auto' }}>
            <iframe
              src={embedUrl}
              className="w-full h-full border-0"
              title={title}
              allow="payment"
              onLoad={() => setIframeLoaded(true)}
            />

            {!iframeLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-white">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 border-4 border-[#4AA2B9] border-t-transparent rounded-full animate-spin" />
                  <p className="text-gray-600 font-medium">Loading...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
