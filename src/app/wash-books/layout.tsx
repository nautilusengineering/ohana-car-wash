import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy 4, Get 2 Free — Wash Books | Ohana Car Wash",
  description:
    "Prepaid wash packs at Ohana Car Wash — buy 4 washes and get 2 free (6 washes total). No membership required. Four levels from Splash & Dash to The Big Kahuna.",
};

export default function WashBooksLayout({ children }: { children: React.ReactNode }) {
  return children;
}
