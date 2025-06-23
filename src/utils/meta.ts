import { SITE_TITLE, SITE_DESCRIPTION } from "@/consts";

export function getMetaTitle(title?: string): string {
  return title ? `${title} – ${SITE_TITLE}` : SITE_TITLE;
}

export function getMetaDescription(description?: string): string {
  return description || SITE_DESCRIPTION;
}
