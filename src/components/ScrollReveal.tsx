"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    document.body.classList.add("reveal-ready");

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-animate='fade']"));
    if (!elements.length)
      return () => {
        document.body.classList.remove("reveal-ready");
      };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      document.body.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
