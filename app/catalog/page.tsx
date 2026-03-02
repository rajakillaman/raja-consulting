import { PageFrame } from "@/app/_components/page-frame";

const catalog = [
  { name: "Client Discovery Questionnaire", format: "Google Docs", price: "$9" },
  { name: "Wedding Budget Tracker", format: "Google Sheets", price: "$12" },
  { name: "Vendor Outreach Email Scripts", format: "Docs + PDF", price: "$15" },
  { name: "Proposal Cover Sheet Set", format: "Canva", price: "$19" },
  { name: "Booking Call Script Pack", format: "Notion + Docs", price: "$19" },
  { name: "Wedding Weekend Timeline Builder", format: "Sheets + Notion", price: "$29" },
  { name: "Planner Onboarding Kit", format: "Docs + PDF", price: "$39" },
  { name: "Photographer Prep Checklist Vault", format: "Notion", price: "$39" },
  { name: "Venue Tour Conversion Kit", format: "Canva + Docs", price: "$49" },
  { name: "Social Promo Calendar (12-Month)", format: "Canva + Sheets", price: "$59" },
  { name: "Contract Clause Library", format: "Google Docs", price: "$69" },
  { name: "Wedding Pro Launch Bundle", format: "Mixed format", price: "$99" },
];

export default function CatalogPage() {
  return (
    <PageFrame
      eyebrow="Catalog"
      title="Every one-time template product in one place"
      intro="Build your own stack from low-ticket quick wins to full workflow bundles."
    >
      <article className="content-card">
        <h2>Template catalog</h2>
        <div className="catalog-table-wrap">
          <table className="catalog-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Format</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {catalog.map((product) => (
                <tr key={product.name}>
                  <td>{product.name}</td>
                  <td>{product.format}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </PageFrame>
  );
}
