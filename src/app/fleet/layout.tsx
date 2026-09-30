import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fleet Program | Ohana Car Wash — Monroe, OH",
  description:
    "Keep your whole fleet clean for less. Buy washes in bulk at Ohana Car Wash in Monroe, OH — license plate recognition, no contracts, washes never expire. Fleet pricing from $6.60 per wash.",
};

export default function FleetLayout({ children }: { children: React.ReactNode }) {
  return children;
}
