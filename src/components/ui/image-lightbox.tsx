"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  lowResSrc?: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
  enableZoom?: boolean;
}

export const ImageLightbox = ({
  src,
  lowResSrc,
  alt,
  isOpen,
  onClose,
  onNext,
  onPrev,
  hasNext = false,
  hasPrev = false,
  enableZoom = false,
}: ImageLightboxProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const touchDistanceRef = useRef(0);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setHasError(false);
      setZoom(1); // Reset zoom when image changes
      setPan({ x: 0, y: 0 }); // Reset pan when image changes
      // Preload the high-res image
      const img = new Image();
      img.onload = () => setIsLoading(false);
      img.onerror = () => {
        setHasError(true);
        setIsLoading(false);
      };
      img.src = src;
    }
  }, [isOpen, src]);

  // Handle keyboard events
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight" && onNext && hasNext) {
        onNext();
      } else if (e.key === "ArrowLeft" && onPrev && hasPrev) {
        onPrev();
      } else if (e.key === "+") {
        handleZoomIn();
      } else if (e.key === "-") {
        handleZoomOut();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev, hasNext, hasPrev]);

  // Handle scroll wheel zoom
  const handleWheel = useCallback((e: WheelEvent) => {
    if (!enableZoom) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom((prev) => Math.max(1, Math.min(4, prev + delta)));
  }, [enableZoom]);

  // Handle pinch zoom on touch devices
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchDistanceRef.current = distance;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && touchDistanceRef.current) {
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const delta = (distance - touchDistanceRef.current) * 0.01;
      setZoom((prev) => Math.max(1, Math.min(4, prev + delta)));
      touchDistanceRef.current = distance;
    }
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(4, prev + 0.2));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(1, prev - 0.2));
  };

  const handleResetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Handle mouse drag to pan zoomed image
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return; // Only allow dragging when zoomed in
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleDocumentMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || zoom <= 1) return;

    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;

    // Calculate max pan distance (allow more panning for zoomed images)
    const maxPan = (zoom - 1) * 250;
    
    setPan({
      x: Math.max(-maxPan, Math.min(maxPan, newX)),
      y: Math.max(-maxPan, Math.min(maxPan, newY)),
    });
  }, [isDragging, zoom, dragStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    const container = imageContainerRef.current;
    if (!container) return;
    
    container.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("mousemove", handleDocumentMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    
    return () => {
      container.removeEventListener("wheel", handleWheel);
      document.removeEventListener("mousemove", handleDocumentMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleWheel, handleDocumentMouseMove, handleMouseUp]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Main content */}
          <div
            className="relative w-full h-full flex flex-col items-center justify-center px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image container */}
          <div className="relative w-full max-w-5xl max-h-[85vh] flex items-center justify-center overflow-hidden" ref={imageContainerRef} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} style={{ cursor: isDragging ? 'grabbing' : zoom > 1 ? 'grab' : 'default' }}>
              {/* Loading state */}
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 border-3 border-white/20 border-t-white rounded-full animate-spin"></div>
                  <p className="mt-4 text-white/70 text-sm">Loading high resolution image...</p>
                </div>
              )}

              {/* Error state */}
              {hasError && (
                <div className="text-center text-white/70">
                  <p>Failed to load image</p>
                </div>
              )}

              {/* Low res preview (background) */}
              {lowResSrc && (
                <motion.img
                  src={lowResSrc}
                  alt={alt}
                  className="absolute inset-0 w-full h-full object-contain blur-md opacity-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                />
              )}

              {/* High res image */}
              <motion.img
                ref={imgRef}
                src={src}
                alt={alt}
                className={`relative w-full h-full object-contain select-none ${isDragging ? 'cursor-grabbing' : zoom > 1 ? 'cursor-grab' : 'cursor-default'}`}
                style={{ 
                  scale: zoom,
                  x: pan.x,
                  y: pan.y,
                  transition: isDragging ? 'none' : 'transform 0.2s ease-out'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                onMouseDown={handleMouseDown}
                draggable={false}
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Controls */}
            <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-4">
              {/* Previous button */}
              {hasPrev && onPrev && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onPrev}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
              )}

              {/* Zoom controls - only show if enableZoom is true */}
              {enableZoom && (
                <>
                  {/* Zoom out button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleZoomOut}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                    aria-label="Zoom out"
                  >
                    <ZoomOut className="w-5 h-5" />
                  </motion.button>

                  {/* Zoom level display */}
                  <div className="px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-medium whitespace-nowrap">
                    {Math.round(zoom * 100)}%
                  </div>

                  {/* Zoom in button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleZoomIn}
                    disabled={zoom >= 4}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </motion.button>

                  {/* Reset zoom button */}
                  {zoom > 1 && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleResetZoom}
                      className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white text-xs font-medium"
                      aria-label="Reset zoom"
                    >
                      Reset
                    </motion.button>
                  )}
                </>
              )}

              {/* Next button */}
              {hasNext && onNext && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onNext}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              )}
            </div>

            {/* Alt text at bottom */}
            <div className="absolute bottom-20 text-center text-white/60 text-sm max-w-2xl">
              {alt}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
