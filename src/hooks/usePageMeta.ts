import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
}

/** Keeps the document title, description, and Open Graph tags in sync with the current page. */
export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, value: string) => {
      document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", value);
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
  }, [title, description]);
}
