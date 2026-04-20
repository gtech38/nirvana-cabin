/**
 * OwnerRez booking integration.
 *
 * All identifiers come from environment variables (see .env.example).
 * We intentionally keep NO hardcoded defaults for property/widget IDs — they
 * belong in the untracked `.env` file, not in source control.
 *
 * Note on secrecy: VITE_* variables are inlined into the client bundle at
 * build time, so they are technically visible to anyone who views the site's
 * JS. They are not true secrets — they are per-deployment configuration.
 * Keeping them out of the repo is still best practice: it forces each
 * deployment to configure itself, makes rotation trivial, and avoids the
 * habit of committing values that might later include real secrets.
 *
 * Two widgets are embedded on the /book page via app.ownerrez.com/widget.js,
 * which scans the DOM for <div class="ownerrez-widget" data-*> and replaces
 * them with the hosted booking UI.
 */

export const OWNERREZ_WIDGET_SCRIPT_URL = "https://app.ownerrez.com/widget.js";

export const OWNERREZ_PROPERTY_GUID =
  import.meta.env.VITE_OWNERREZ_PROPERTY_GUID ?? "";

export const OWNERREZ_CALENDAR_WIDGET_ID =
  import.meta.env.VITE_OWNERREZ_CALENDAR_WIDGET_ID ?? "";

export const OWNERREZ_BOOKING_WIDGET_ID =
  import.meta.env.VITE_OWNERREZ_BOOKING_WIDGET_ID ?? "";

/** Numeric property ID — only used for the hosted booking page fallback link. */
export const OWNERREZ_PROPERTY_ID =
  import.meta.env.VITE_OWNERREZ_PROPERTY_ID ?? "";

/** True when all three widget IDs required to render /book are configured. */
export const OWNERREZ_WIDGETS_CONFIGURED =
  Boolean(OWNERREZ_PROPERTY_GUID) &&
  Boolean(OWNERREZ_CALENDAR_WIDGET_ID) &&
  Boolean(OWNERREZ_BOOKING_WIDGET_ID);

export function getBookingPageUrl(): string {
  if (!OWNERREZ_PROPERTY_ID) return "https://app.ownerreservations.com";
  return `https://app.ownerreservations.com/properties/${OWNERREZ_PROPERTY_ID}`;
}

export function getInquiryUrl(): string {
  if (!OWNERREZ_PROPERTY_ID)
    return `mailto:${import.meta.env.VITE_CONTACT_EMAIL ?? ""}`;
  return `https://app.ownerreservations.com/properties/${OWNERREZ_PROPERTY_ID}?tab=contact`;
}
