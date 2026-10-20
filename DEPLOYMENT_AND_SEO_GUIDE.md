# ReMD Wellness — Website package & launch checklist

## Contents
* Static responsive website, service pages, dedicated work/car/sports injury landing pages, local office listings, and patient FAQ.
* Original logo, illustrations and image assets in `assets/`.
* Page titles, descriptions, social metadata, semantic HTML and basic MedicalClinic/Physician/FAQ-related structured data.
* Sitemap template, robots.txt, 404 page. No account logins required for the static site.

## Preview
Open `index.html` in your browser. Follow links to inspect every page. On some computers the local file preview may restrict scripts; hosting is the preferred preview.

## Publish on Vercel, Netlify, Cloudflare Pages, or other static web hosting
1. Connect your hosting provider and create a **static** site using this folder as its deployment root. No build command is needed.
2. Verify that all `.html` pages are accessible (for example `/work-injuries.html`).
3. Connect and verify your official domain in the hosting dashboard, enable HTTPS, and configure a redirect from the unused www/apex host.
4. Replace `YOUR-DOMAIN-HERE` in `sitemap.xml.template` with the real domain and save as `sitemap.xml`.
5. Add absolute canonical URLs on every page and update OpenGraph image URLs after the domain is chosen. Submit the real sitemap in Google Search Console and Bing Webmaster Tools.
6. Link the site in your verified Google Business Profile and ensure names, addresses, phone, office hours and business categories match actual on-site operations.
7. Set up an approved privacy-safe appointment intake system; the existing appointment buttons are **click-to-call**, NOT a functioning online booking engine. Do not collect patient medical information via an unprotected generic form.
8. Confirm any additional treatment descriptions, diagnostic procedures, service availability by office, workers’ comp insurance participation and claims policies before final publication.
9. Confirm practice ZIP code (San Ramon was provided as 94583), office suite details, and exact board-recognition wording.
10. Review patient privacy, accessibility, website analytics consent, medical advertising and disclaimers with the practice's professionals.

## AEO/SEO implementation details
* Dedicated landing pages for work injury and motor vehicle collision injury with plain-language questions and direct answers.
* Service descriptions for PM&R, pain management, EMG/NCS and QME; symptom-specific pages for back, neck, shoulder, knee and nerve pain.
* Internal linking via site navigation, conditions cards and service guides.
* Medical and FAQ markup includes the physician and practice; do not mark speculative reviews, ratings or fabricated outcomes.
* Optimize image loading; consider professional licensed medical photography and unique office exterior/location photos before launch.

## Important limitation
This deliverable is a static website ready for upload, **not a live website**. Deployment requires authorization for your hosting account and an actual domain; no hosting account was connected to this workflow.
