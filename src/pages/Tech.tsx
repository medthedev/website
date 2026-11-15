import { Page } from "@/components/Page/Page";
import { pageTitle, site } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";

export function Tech() {
  usePageMeta({
    title: pageTitle("Tech"),
    description: `The tools ${site.name} uses and the projects ${site.name} builds.`,
  });

  return (
    <Page wide>
      <h1>Tech</h1>
      <p>My stack and the things I&apos;ve built.</p>
    </Page>
  );
}
