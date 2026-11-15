// Set the address that should receive launch-notification requests.
// While it is empty, the "notify me" buttons scroll to the availability section instead.
export const contactEmail = ''

export function notifyHref(subject: string): string {
  return contactEmail
    ? `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`
    : '#platforms'
}
