import { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "@/app/_components/site-chrome";

type PageFrameProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export function PageFrame({ eyebrow, title, intro, children }: PageFrameProps) {
  return (
    <main>
      <SiteHeader />
      <section className="shell page-hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
        <p className="page-intro">{intro}</p>
      </section>
      <section className="shell page-content">{children}</section>
      <SiteFooter />
    </main>
  );
}
