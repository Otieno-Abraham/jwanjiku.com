# Janet Wanjiku — Psychologist

A premium, fully responsive marketing website for Janet Wanjiku, a clinical psychologist based in Kiambu, Kenya.

## Structure

```
index.html              Single-page site
favicon.svg              Circular JW badge mark (also used as the brand logo)
assets/
  css/style.css          Design tokens + global styles
  js/main.js              Mobile nav, scroll reveal, back-to-top
  images/                 Site photography
design-source/            Original brand assets (logo/palette board, source photos) — not used at runtime
```

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
