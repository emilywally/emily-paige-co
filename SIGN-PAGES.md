# Yard Sign QR Pages

Three permanent QR codes are printed on the physical for-sale signs. They point at:

| Sign | URL | File |
|---|---|---|
| Sign 1 | https://emilypaigeandco.com/l1 | `l1.html` |
| Sign 2 | https://emilypaigeandco.com/l2 | `l2.html` |
| Sign 3 | https://emilypaigeandco.com/l3 | `l3.html` |

**These three URLs can never change.** They are printed on physical signs that stay in
rotation for years. Renaming or deleting `l1.html`, `l2.html`, `l3.html`, or removing the
rewrites in `netlify.toml`, breaks every sign already in the ground.

## The two states

Each page is always in one of two states.

**Waiting** is the default and what ships today. It says the details are being updated,
gives a one-tap text link, and has a short form. Nobody who scans ever hits a dead end.

**Active** is a real listing page: hero photo, price, beds, baths, square feet, description,
photo gallery, open house, and a showing request form. The blank version lives in
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
| `{{GALLERY}}` | repeated `<img src="..." alt="...">` tags |
| `{{DESCRIPTION}}` | one or two `<p>` paragraphs |
| `{{OPEN_HOUSE}}` | `Sunday 11am to 1pm` (delete the block if there isn't one) |
| `{{SMS_LINK}}` | `sms:+12623300037?&body=Hi%20Emily!%20I'm%20looking%20at%20ADDRESS...` |

Listing photos go in `images/listings/l1/`, `l2/`, `l3/`.

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
