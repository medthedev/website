import { Page } from "@/components/Page/Page";
import { pageTitle } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";

export function About() {
  usePageMeta({
    title: pageTitle("About"),
    description: "A little about med — programming, tinkering, gaming, reading, chess, and sport.",
  });

  return (
    <Page>
      <h1>About me</h1>
      <p>I&apos;m Mohamed Reda, but you can call me medrinnn — or med for short.</p>
    </Page>
  );
}
