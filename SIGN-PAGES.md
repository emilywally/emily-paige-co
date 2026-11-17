# Yard Sign QR Pages

Ten permanent QR codes are made for the physical for-sale signs (signs 1 to 3 since
Sept 2026, signs 4 to 10 added Nov 2026). They point at:

| Sign | URL | File |
|---|---|---|
| Sign 1 | https://emilypaigeandco.com/l1 | `l1.html` |
| Sign 2 | https://emilypaigeandco.com/l2 | `l2.html` |
| Sign 3 | https://emilypaigeandco.com/l3 | `l3.html` |
| Sign 4 | https://emilypaigeandco.com/l4 | `l4.html` |
| Sign 5 | https://emilypaigeandco.com/l5 | `l5.html` |
| Sign 6 | https://emilypaigeandco.com/l6 | `l6.html` |
| Sign 7 | https://emilypaigeandco.com/l7 | `l7.html` |
| Sign 8 | https://emilypaigeandco.com/l8 | `l8.html` |
| Sign 9 | https://emilypaigeandco.com/l9 | `l9.html` |
| Sign 10 | https://emilypaigeandco.com/l10 | `l10.html` |

**These ten URLs can never change.** They are printed on physical signs that stay in
rotation for years. Renaming or deleting any `l1.html` through `l10.html`, or removing the
rewrites in `netlify.toml`, breaks every sign already in the ground.

The QR files (PNG for Canva, SVG for the printer) are in Google Drive under
QR Codes > EPCo. Sign QR Codes, named `epc-qr-sign1` through `epc-qr-sign10`. They are
dark `#000` on cream `#f9f0e6`, error correction Q, 4 module quiet zone.

## The two states

Each page is always in one of two states.

**Waiting** is the default and what ships today. It says the details are being updated,
gives a one-tap text link, and has a short form. Nobody who scans ever hits a dead end.

**Active** is a real listing page: hero photo with text on the burgundy bands around it, price, beds, baths,
square feet, description, a photo story (each photo with a one-line caption), and a showing request form.
Headings set in PP Editorial New and body in Bookmania, the brand fonts, from /fonts/. The blank version lives in
`_sign-page-template.html`.

## To put a listing on a sign

Copy `_sign-page-template.html` over the sign's file and fill in the placeholders:

| Placeholder | Example |
|---|---|
| `{{SLUG}}` | `l1` |
| `{{SIGN_LABEL}}` | `Sign 1` |
| `{{ADDRESS}}` | `2841 S Superior St` |
| `{{CITY}}` | `Bay View, Milwaukee, WI 53207` |
| `{{STATUS}}` | `For Sale`, `Coming Soon`, `Pending` |
| `{{PRICE}}` | `$385,000` |
| `{{BEDS}}` `{{BATHS}}` `{{SQFT}}` | `3`, `2`, `1,640` |
| `{{HERO_IMAGE}}` | `/images/listings/l1/hero.jpg` |
| `{{GALLERY}}` | repeated `<figure><img ...><figcaption>caption</figcaption></figure>` blocks, photo then a one-line caption |
| `{{DESCRIPTION}}` | one or two `<p>` paragraphs |
| `{{OPEN_HOUSE}}` | `Open house Sunday 11 am to 1 pm` (renders on the burgundy band under the hero; delete the hero-note line if there isn't one) |
| `{{HERO_KICKER}}` | `Just Listed in Bay View` (renders on the burgundy band above the hero) |
| `{{SMS_LINK}}` | `sms:+12623300037?&body=Hi%20Emily!%20I'm%20looking%20at%20ADDRESS...` |

Listing photos go in `images/listings/l1/` through `images/listings/l10/`, one folder per sign.

**When the home sells,** copy the waiting version back over the file so the sign never
points at a stale listing.

## Where the leads go

The forms post through formsubmit.co to emilywalczak@kw.com, the same as the contact and
home value pages. Every sign submission carries a hidden `Came from` field and a subject
line naming the sign, so a yard sign lead is obvious in the inbox and never gets mistaken
for a general website inquiry.

## Notes

- Pages are `noindex`. They change constantly and would otherwise compete with the real
  listing pages in search.
- The sticky bar at the bottom on mobile is deliberate. Someone standing at the curb in
  the cold should never have to scroll to find the text button.
- Each sign has its own URL, so Google Analytics shows which physical sign gets scanned.
