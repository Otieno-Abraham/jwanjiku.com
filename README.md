# Janet Wanjiku — Psychologist &amp; rTMS Practitioner

A premium, fully responsive multi-page website for Janet Wanjiku, a clinical psychologist and certified rTMS practitioner based between Kiambu and Nairobi, Kenya.

## Structure

```
index.html                          Home
about.html                          About Janet — bio, credentials, background
rtms.html                           rTMS treatment — what it is, training, process
services.html                       Services hub
service-individual-therapy.html
service-relationships.html
service-emotional-wellbeing.html
service-life-transitions.html
service-workplace-stress.html
service-ongoing-support.html        Individual service pages
blog.html                           Blog index
blog-rtms-certification.html
blog-four-rooms.html
blog-naya-training.html             Blog posts
faq.html                            Full FAQ
contact.html                        Contact details

assets/
  css/style.css          Design tokens + global styles
  js/main.js              Mobile nav, scroll reveal, back-to-top, current-page nav highlighting
  images/                 Site photography
design-source/            Original brand assets (logo/palette board, source photos) — not used at runtime
```

All pages share the same header/nav/footer and are flat at the repo root, so every asset reference is `assets/...` regardless of page.

## Brand

| Token | Value |
|---|---|
| Forest Green | `#1B3A2E` |
| Ivory | `#F5F1E6` |
| Champagne Gold | `#CBA96A` |
| Charcoal | `#2B2B2B` |
| Headings | Cinzel / Playfair Display |
| Body | Montserrat |

## Local preview

Any static file server works, e.g.:

```bash
python -m http.server 8811
```

Then open `http://localhost:8811`.
