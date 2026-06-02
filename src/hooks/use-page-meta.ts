import { useEffect } from "react";

interface PageMetaOptions {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
}

const setMeta = (selector: string, attr: string, value: string) => {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

export const usePageMeta = (options: PageMetaOptions) => {
  useEffect(() => {
    const { title, description, canonical, ogTitle, ogDescription, ogUrl } = options;
    const resolvedTitle = title;
    const resolvedOgTitle = ogTitle || title;
    const resolvedOgDescription = ogDescription || description;

    document.title = resolvedTitle;

    setMeta('meta[name="title"]', "content", resolvedTitle);
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", resolvedOgTitle);
    setMeta('meta[property="og:description"]', "content", resolvedOgDescription);
    setMeta('meta[name="twitter:title"]', "content", resolvedOgTitle);
    setMeta('meta[name="twitter:description"]', "content", resolvedOgDescription);

    if (canonical) {
      setMeta('link[rel="canonical"]', "href", canonical);
      setMeta('meta[property="og:url"]', "content", canonical);
      setMeta('meta[name="twitter:url"]', "content", canonical);
    }

    if (ogUrl) {
      setMeta('meta[property="og:url"]', "content", ogUrl);
    }
  }, []);
};
