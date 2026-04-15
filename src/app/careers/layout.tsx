import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Ohana Car Wash",
  description: "Join the Ohana Car Wash team in Monroe, OH. We're looking for enthusiastic individuals with a passion for delivering excellent service.",
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
