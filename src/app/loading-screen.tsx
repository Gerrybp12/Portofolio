'use client';

import { useEffect, useState } from 'react';

const imageAssets = [
  '/fotodepan.png',
  '/min_09.jpg',
  '/cahaya_rancamaya.jpg',
  '/universitas_indonesia.jpg',
  '/tenaga.jpg',
  '/tenaga_brosur.jpg',
  '/gorilla.jpg',
  '/slime.jpg',
  '/slime_poster.jpg',
  '/portofolio.jpg',
  '/gerry.jpg',
  '/produk.png',
  '/tim.jpeg',
  '/github.png',
  '/dart.png',
  '/flutter.png',
  '/firebase.png',
  '/cpp.png',
  '/arduino.png',
  '/typescript.png',
  '/react.png',
];

const MINIMUM_LOADING_TIME = 1400;

export default function LoadingScreen() {
  const [progress, setProgress] = useState(8);
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let completeTimer: number | undefined;
    let hideTimer: number | undefined;
    let progressTimer: number | undefined;
    const startedAt = Date.now();

    const updateProgress = () => {
      if (isMounted) {
        setProgress((current) => Math.min(current + 4, 92));
        progressTimer = window.setTimeout(updateProgress, 70);
      }
    };
    progressTimer = window.setTimeout(updateProgress, 70);

    const preloadImages = imageAssets.map(
      (src) =>
        new Promise<void>((resolve) => {
          try {
            const image = document.createElement('img');
            let settled = false;
            const settle = () => {
              if (settled) return;
              settled = true;
              resolve();
            };

            image.onload = settle;
            image.onerror = settle;
            image.src = src;
            window.setTimeout(settle, 2500);
          } catch {
            resolve();
          }
        }),
    );

    const minimumLoadingTime = new Promise<void>((resolve) => {
      window.setTimeout(resolve, MINIMUM_LOADING_TIME);
    });

    Promise.all([Promise.all(preloadImages), minimumLoadingTime]).then(() => {
      completeTimer = window.setTimeout(() => {
        if (!isMounted) return;

        if (progressTimer) window.clearTimeout(progressTimer);
        setProgress(100);
        setIsLeaving(true);

        hideTimer = window.setTimeout(() => {
          if (isMounted) setIsVisible(false);
        }, 650);
      }, Math.max(MINIMUM_LOADING_TIME - (Date.now() - startedAt), 0));
    });
    document.body.classList.add('loading-active');

    return () => {
      isMounted = false;
      if (progressTimer) window.clearTimeout(progressTimer);
      if (completeTimer) window.clearTimeout(completeTimer);
      if (hideTimer) window.clearTimeout(hideTimer);
      document.body.classList.remove('loading-active');
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      aria-label="Loading portfolio"
      aria-live="polite"
      className={`portfolio-loader ${isLeaving ? 'portfolio-loader--leaving' : ''}`}
      role="status"
    >
      <div className="portfolio-loader__glow" />
      <div className="portfolio-loader__content">
        <span className="portfolio-loader__eyebrow">GERRY BIMA PUTRA / 2026</span>
        <h1 className="portfolio-loader__title">Gerry Bima Putra</h1>
        <p className="portfolio-loader__subtitle">Portofolio</p>

        <div className="portfolio-loader__progress-wrap" aria-hidden="true">
          <div className="portfolio-loader__progress-track">
            <div
              className="portfolio-loader__progress-bar"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="portfolio-loader__progress-value">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
