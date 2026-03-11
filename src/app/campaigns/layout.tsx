import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learning Next",
  description: "Using claude code to learn next js and typescript",
};

export default function CampaignLayout({ children }: { children: React.ReactNode } ) {
    return(
        <div className="w-full h-screen">
            <div className="w-full h-12 flex justify-center items-center gap-x-4">
                <Link href="/campaigns">All Campaigns</Link>
                <Link href="/about">About</Link>
            </div>
            {children}
        </div>
    );
}