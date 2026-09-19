# Vikri website — www.vikrisrijan.co.in

A static, mobile-first website for **Vikri** (brand) / **Vikri Srijan Pvt. Ltd.** (company),
built for sustainable & customized gifting — corporate, wedding, birthday, anniversary,
bouquets and hampers. No e-commerce: every path leads to an enquiry, not a checkout.

Plain HTML/CSS/JS, no build step — deploys straight to Cloudflare Pages (or any static host).
This is a deliberate substitution for the originally-suggested React + Vite stack: nothing
here needs client-side state or a component framework, so a build pipeline would only add
complexity without benefit. If you'd rather have it as a React/Vite project, say so and it
can be re-scaffolded that way.

## Structure

```
index.html                  Homepage
corporate-gifting.html      Full corporate gifting SEO landing page (built out first, per request)
employee-gifting.html
wedding-return-gifts.html
birthday-return-gifts.html
anniversary-gifts.html
sustainable-bouquets.html
gift-hampers.html
custom-gifting.html         Fully custom brief + enquiry form
products.html                Catalogue-style product overview (no prices)
about-us.html
artisans.html
contact.html                 Enquiry form + direct contact placeholders
blog/index.html              Journal index — 15 SEO article titles staged, ready to fill in
privacy-policy.html
terms.html
custom-order-policy.html
404.html
sitemap.xml
robots.txt
css/style.css                 Shared design system
js/main.js                    Nav, WhatsApp wiring, enquiry form handling, config
images/                       Placeholder image slots — see images/README.txt
```

## Before launch — configuration checklist

Everything below is a deliberate placeholder. Nothing in this build invents phone numbers,
emails, client names, testimonials, certifications, or stats — fill these in with real values:

1. **`js/main.js` → `window.VIKRI_CONFIG`**
   - `whatsappNumber` — real WhatsApp number, digits only with country code
   - `enquiryFormEndpoint` — a Formspree / Web3Forms / your CRM endpoint URL. Until this is
     set, the enquiry form runs in demo mode: it shows the thank-you message but doesn't
     send anywhere.
   - `ga4Id` — for reference; wire GA4 by uncommenting the gtag snippet in each page's
     `<head>` (see below) rather than through this object
2. **Every page's `<head>`** has commented-out blocks for:
   - Google Search Console verification meta tag
   - GA4 / Google tag (gtag.js)
   Uncomment and fill in once you have real IDs.
3. **`contact.html`** — replace the phone/email/address/hours placeholders (clearly marked
   with a `.config-note` banner) with real details.
4. **`images/`** — replace placeholder gradient blocks with real photography. See
   `images/README.txt` for the expected filenames per page.
5. **Social links** in the footer (`generate_site.py` → `FOOTER`) are currently plain text —
   add real URLs once profiles exist.
6. **Legal pages** (privacy, terms, custom order policy) contain placeholder copy and should
   be reviewed/replaced with text approved by Vikri Srijan Pvt. Ltd.

## Editing content

Pages were generated from `generate_site.py` + `pages_home.py` / `pages_corporate.py` /
`pages_occasions.py` / `pages_misc.py` (Python scripts, not shipped in the final output —
kept here only if you want to regenerate pages instead of hand-editing HTML). For quick
edits, it's simplest to just edit the HTML files directly; the shared header/footer/nav is
duplicated across files by design, since this is a plain static site with no templating
engine at runtime.

## Deploying to Cloudflare Pages

1. Push this folder to a Git repo (or drag-and-drop the folder into Cloudflare Pages'
   direct upload).
2. Build command: none. Build output directory: `/` (repo root).
3. Point the custom domain `www.vikrisrijan.co.in` at the Pages project.
4. Submit `sitemap.xml` in Google Search Console once the domain is live.

## What's built out in full vs. scaffolded

- **Homepage** and **Corporate Gifting** (the page explicitly requested) are fully built
  with complete SEO copy, FAQs with schema markup, and all sections from the brief.
- Employee / Wedding / Birthday / Anniversary / Bouquets / Hampers pages are real,
  publishable SEO landing pages (unique titles, meta, H1, FAQ schema) built on a shared
  template — shorter than the corporate page but structurally complete.
- About, Artisans, Products, Contact, Blog index, and legal pages are complete in structure
  with placeholder copy where real business detail (artisan stories, certifications, blog
  articles) hasn't been supplied yet — see `IMPORTANT CONTENT RULE` in the original brief.
- The 15 blog article titles are staged on `blog/index.html` as cards; each needs its own
  article page once written.
