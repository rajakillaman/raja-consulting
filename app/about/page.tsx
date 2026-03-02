import type { Metadata } from "next";
import { PageFrame } from "@/app/_components/page-frame";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Velvet Vow Systems designs one-time purchase digital products for wedding professionals.",
};

export default function AboutPage() {
  return (
    <PageFrame
      eyebrow="About"
      title="Built for wedding professionals who value polish and speed"
      intro="Velvet Vow Systems creates premium digital assets that help service businesses operate consistently without recurring software overhead."
    >
      <div className="simple-grid">
        <article className="content-card">
          <h2>What we do</h2>
          <p>
            We publish production-ready templates for planners, photographers,
            and venues. Each product is designed to be used in active client
            work immediately after purchase.
          </p>
        </article>
        <article className="content-card">
          <h2>How we position value</h2>
          <p>
            Buyers are not paying for generic text outputs. They buy workflow
            architecture, design quality, and clear implementation structure.
          </p>
        </article>
        <article className="content-card">
          <h2>Why one-time pricing</h2>
          <p>
            We intentionally keep offers one-time so customers can build their
            stack without subscription fatigue or unpredictable ongoing costs.
          </p>
        </article>
      </div>
    </PageFrame>
  );
}
