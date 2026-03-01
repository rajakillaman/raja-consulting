"use client";

export default function DemoInvoice() {
  return (
    <div className="min-h-screen bg-white px-4 py-12 text-gray-900 print:px-0 print:py-0" style={{ colorAdjust: "exact", WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" } as React.CSSProperties}>
      <div className="mx-auto max-w-3xl">
        {/* Print button — hidden when printing */}
        <button
          onClick={() => window.print()}
          className="mb-6 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 print:hidden"
        >
          Print / Save as PDF
        </button>

        <div className="rounded-xl border border-gray-200 bg-white p-10 shadow-sm print:border-0 print:shadow-none">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                INVOICE
              </h1>
              <p className="mt-1 text-sm text-gray-500">INV-2026-0047</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-gray-900">Raja Consulting</p>
              <p className="mt-1 text-sm text-gray-500">
                rajaconsulting.services
              </p>
            </div>
          </div>

          {/* Dates + Customer */}
          <div className="mt-10 grid grid-cols-2 gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Bill To
              </p>
              <p className="mt-2 font-medium">Marcus Chen</p>
              <p className="text-sm text-gray-500">Vantage Digital LLC</p>
              <p className="text-sm text-gray-500">
                4821 Birchwood Ave, Suite 310
              </p>
              <p className="text-sm text-gray-500">Austin, TX 78731</p>
              <p className="mt-1 text-sm text-gray-500">
                m.chen@vantagedigital.io
              </p>
            </div>
            <div className="text-right">
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Issue Date
                </p>
                <p className="mt-1 text-sm font-medium">February 18, 2026</p>
              </div>
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Due Date
                </p>
                <p className="mt-1 text-sm font-medium">March 4, 2026</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Status
                </p>
                <span className="mt-1 inline-block rounded-full bg-emerald-50 px-3 py-0.5 text-xs font-semibold text-emerald-600">
                  Paid
                </span>
              </div>
            </div>
          </div>

          {/* Line items */}
          <div className="mt-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
                  <th className="pb-3">Description</th>
                  <th className="pb-3 text-center">Qty</th>
                  <th className="pb-3 text-right">Credits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-4">
                    <p className="font-medium">Security Assessment</p>
                    <p className="mt-0.5 text-xs text-gray-400">
                      Full-stack vulnerability scan, penetration testing insights, remediation roadmap
                    </p>
                  </td>
                  <td className="py-4 text-center text-gray-500">1</td>
                  <td className="py-4 text-right font-medium">75</td>
                </tr>
                <tr>
                  <td className="py-4">
                    <p className="font-medium">Website Performance Audit</p>
                    <p className="mt-0.5 text-xs text-gray-400">
                      Core Web Vitals analysis, load time optimization, Lighthouse review
                    </p>
                  </td>
                  <td className="py-4 text-center text-gray-500">2</td>
                  <td className="py-4 text-right font-medium">50</td>
                </tr>
                <tr>
                  <td className="py-4">
                    <p className="font-medium">Code Review</p>
                    <p className="mt-0.5 text-xs text-gray-400">
                      Architecture review, best practices audit, maintainability assessment
                    </p>
                  </td>
                  <td className="py-4 text-center text-gray-500">1</td>
                  <td className="py-4 text-right font-medium">50</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Totals */}
          <div className="mt-6 flex justify-end">
            <div className="w-72">
              <div className="flex justify-between py-2 text-sm">
                <span className="text-gray-500">Credits Used</span>
                <span className="font-medium">175</span>
              </div>
              <div className="flex justify-between py-2 text-sm">
                <span className="text-gray-500">Credits Remaining</span>
                <span className="font-medium">125</span>
              </div>
              <div className="mt-2 flex justify-between border-t border-gray-200 pt-3">
                <span className="text-base font-semibold">Total Credits</span>
                <span className="text-base font-bold">175</span>
              </div>
              <div className="flex justify-between pt-1 text-sm">
                <span className="text-gray-400">Est. value</span>
                <span className="text-gray-400">~$8.75</span>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="mt-12 border-t border-gray-100 pt-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Notes
            </p>
            <p className="mt-2 text-sm text-gray-500">
              All reports delivered as PDF via email. Credits deducted from
              Enterprise pack (6250 credits) purchased on Feb 12, 2026. Credits
              never expire.
            </p>
          </div>

          {/* Footer */}
          <div className="mt-10 text-center text-xs text-gray-400">
            Raja Consulting &middot; rajaconsulting.services &middot;
            Thank you for your business
          </div>
        </div>
      </div>
    </div>
  );
}
