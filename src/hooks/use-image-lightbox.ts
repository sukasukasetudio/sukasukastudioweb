import { useState, useCallback } from "react";

export interface ImageItem {
  id: string;
  src: string;
  lowResSrc?: string;
  alt: string;
  downloadFilename?: string;
}

export const useImageLightbox = (images: ImageItem[]) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const open = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const current = images[currentIndex];

  return {
    isOpen,
    currentIndex,
    current,
    open,
    close,
    next,
    prev,
    hasNext: currentIndex < images.length - 1,
    hasPrev: currentIndex > 0,
  };
};
