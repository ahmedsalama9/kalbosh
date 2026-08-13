import type { Service } from "@/lib/types";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "./ServiceCard";

export function ServiceGrid({ items }: { items: Service[] }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((service, i) => (
        <Reveal as="li" key={service.slug} delay={(i % 3) * 70} className="h-full">
          <ServiceCard service={service} />
        </Reveal>
      ))}
    </ul>
  );
}
