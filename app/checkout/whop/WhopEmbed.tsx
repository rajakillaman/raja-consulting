"use client";

import { WhopCheckoutEmbed } from "@whop/checkout/react";

interface Props {
    planId: string;
    email: string;
}

export default function WhopEmbed({ planId, email }: Props) {
    return (
        <WhopCheckoutEmbed
            planId={planId}
            prefill={email ? { email } : undefined}
            disableEmail={!!email}
            fallback={<p style={{ fontFamily: "sans-serif", textAlign: "center", padding: "2rem" }}>Loading checkout…</p>}
        />
    );
}
