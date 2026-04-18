/**
 * OwnerRez booking integration interface.
 *
 * OwnerRez provides two integration paths:
 *
 * 1. Hosted booking page (simplest):
 *    Redirect guests to https://app.ownerreservations.com/properties/<PROPERTY_ID>
 *
 * 2. Embeddable widget (iframe):
 *    <iframe src="https://app.ownerreservations.com/widget/<PROPERTY_ID>" />
 *
 * 3. OwnerRez API (full control):
 *    REST API at https://api.ownerrez.com/v2 with OAuth bearer token.
 *    Docs: https://app.ownerrez.com/api
 *
 * Replace OWNERREZ_PROPERTY_ID below with your property's numeric ID,
 * found in OwnerRez under Properties → <property> → Settings.
 */

export const OWNERREZ_PROPERTY_ID = import.meta.env.VITE_OWNERREZ_PROPERTY_ID ?? ''

export function getBookingWidgetUrl(): string {
  if (!OWNERREZ_PROPERTY_ID) return ''
  return `https://app.ownerreservations.com/widget/${OWNERREZ_PROPERTY_ID}`
}

export function getBookingPageUrl(): string {
  if (!OWNERREZ_PROPERTY_ID) return 'https://app.ownerreservations.com'
  return `https://app.ownerreservations.com/properties/${OWNERREZ_PROPERTY_ID}`
}

export function getInquiryUrl(): string {
  if (!OWNERREZ_PROPERTY_ID) return `mailto:${import.meta.env.VITE_CONTACT_EMAIL ?? 'guestservices@theutmosthost.com'}`
  return `https://app.ownerreservations.com/properties/${OWNERREZ_PROPERTY_ID}?tab=contact`
}
