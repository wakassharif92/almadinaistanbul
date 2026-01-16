import { site } from "@/data/site";

export function money(amount: number) {
  return `${site.currency} ${amount.toLocaleString()}`;
}

export function whatsappOrderLink(message: string) {
  const phone = site.whatsappNumber;
  const text = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${text}`;
}
