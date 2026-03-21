"use client";

import { useLayoutEffect } from "react";

export default function ScrollToTop() {
  useLayoutEffect(() => {
    const html = document.documentElement;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      html.style.scrollBehavior = "";
    });
  }, []);

  return null;
}
