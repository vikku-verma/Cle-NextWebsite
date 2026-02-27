import { RefundHero } from "@/components/conference2026/refund-policy-page/RefundHero";
import { RefundPolicies } from "@/components/conference2026/refund-policy-page/RefundPolicies";
import { RefundNotice } from "@/components/conference2026/refund-policy-page/RefundNotice";
import { RefundSupport } from "@/components/conference2026/refund-policy-page/RefundSupport";

export default function RefundPolicyPage() {
    return (
        <main className="flex flex-col min-h-screen bg-[#FBFAF8]">
            <RefundHero />
            <RefundPolicies />
            <RefundNotice />
            <RefundSupport />
        </main>
    );
}
