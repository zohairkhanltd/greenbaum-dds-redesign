# Bethesda Center for Family & Cosmetic Dentistry

## Website Redesign Project Brief + Antigravity Build Prompt

**Project status:** Strategy, build specification, and supplied-asset integration brief  
**Prepared:** August 11, 2026  
**Current website:** https://www.greenbaumdds.com/  
**Primary location:** 6410 Rockledge Drive, Suite 106, Bethesda, MD 20817  
**Primary conversion:** Book an appointment  
**Secondary conversions:** Call the practice, complete new-patient forms, explore a high-value service

---

## 1. Project Objective

Redesign the website for Bethesda Center for Family & Cosmetic Dentistry into a premium, extremely modern, fast, accessible, and conversion-focused dental website while preserving the existing brand identity.

The redesign must feel established and trustworthy, but not old-fashioned; clinical and sophisticated, but not cold; premium, but not like a luxury fashion brand. It should communicate that patients can receive comprehensive family, cosmetic, restorative, implant, laser, sleep-apnea, and TMJ care from an experienced team in one modern Bethesda practice.

This is a full website redesign, not a visual reskin. Improve information architecture, copy hierarchy, patient pathways, local SEO, accessibility, and booking conversion throughout the site.

### Primary success criteria

1. A new visitor understands within five seconds:
   - what the practice does;
   - where it is located;
   - why it is different;
   - how to book.
2. High-intent patients can reach the relevant service and appointment action with minimal friction.
3. The site clearly presents the practice's differentiators: experienced doctors, advanced technology, comprehensive care, laser dentistry, implants, cosmetic dentistry, and dental sleep medicine/TMJ therapy.
4. The finished website is visually distinctive, mobile-first, technically fast, and easy for the practice to maintain.

---

## 2. Brand Foundation

### Brand name

Use the full practice name in prominent SEO and trust contexts:

**Bethesda Center for Family & Cosmetic Dentistry**

Doctor names may appear as a supporting wordmark where appropriate:

**Bernard L. Greenbaum, DDS · Nhu Thuy H. Luong, DDS**

### Supplied logo

The supplied logo is the source of truth. Preserve the white classical-profile mark and its proportions. Do not redraw, stretch, rotate, add dental imagery to, or apply unnecessary effects to it.

Antigravity asset target:

`/public/brand/greenbaum-mark.png`

Create web-ready derivatives only if needed:

- transparent white mark for dark backgrounds;
- royal-blue mark for white backgrounds;
- favicon and app-icon crops;
- SVG only if accurately vectorized from an approved original.

The original supplied source file is `Logo.png` (404 × 316). It is an approved
brand asset, not a placeholder. Prefer an ImageKit-hosted version in production
when its exact ImageKit path is available, while retaining a lightweight local
copy in `/public/brand` as a resilient fallback for the header, favicon work,
structured-data logo reference, and error states.

### Core colors

The dominant blue sampled from the supplied logo is:

- **Greenbaum Royal Blue:** `#01188A`
- **White:** `#FFFFFF`

Preserve these exact colors as the recognizable core of the brand. Build a restrained tonal system around them:

| Token | Color | Purpose |
| --- | --- | --- |
| `brand-700` | `#01188A` | Primary buttons, logo fields, key links |
| `brand-900` | `#000A46` | Deep backgrounds and high-contrast sections |
| `brand-500` | `#3153D4` | Hover states and restrained highlights |
| `brand-100` | `#E8EDFF` | Soft blue surfaces |
| `brand-50` | `#F5F7FF` | Subtle section backgrounds |
| `ink-950` | `#0B1020` | Main text |
| `ink-600` | `#50596B` | Secondary text |
| `line` | `#DDE2EC` | Borders and dividers |
| `white` | `#FFFFFF` | Primary surface and reversed text |

Do not introduce turquoise, mint green, generic dental cyan, bright gradients, gold, or unrelated accent colors. If a gradient is used, keep it tonal: deep navy to Greenbaum Royal Blue.

### Typography

Use a contemporary editorial sans-serif system with excellent readability. Recommended:

- **Headings:** Manrope or Plus Jakarta Sans, 600–700 weight
- **Body/UI:** Inter, 400–600 weight

Avoid high-contrast fashion serifs, bubbly fonts, thin medical-tech fonts, and excessive all-caps. Headlines should be bold, compact, and calm.

### Brand personality

- Expert, reassuring, progressive, precise
- Warm and human without being childish
- Premium through restraint, spacing, photography, and typography
- Confident rather than sales-heavy
- Local and established rather than corporate-chain dentistry

---

## 3. Current Website Audit

### What should be retained

- Strong Bethesda, Maryland location relevance
- Patient-first positioning
- Breadth of preventive, periodontal, restorative, implant, cosmetic, laser, sleep-apnea, and TMJ services
- Doctor credibility and Dr. Greenbaum's 25+ years of experience
- Dr. Greenbaum's dental sleep medicine credentials
- New-patient information, registration, insurance, financial policy, reviews, home-care instructions, office tour, gallery, blog, privacy, and ADA content
- Existing online booking pathway, subject to verification
- Address and map presence

### What should be improved

- Establish one clear visual hierarchy and one consistent design system across all page types.
- Replace generic template patterns and visually inconsistent image treatments with art-directed, authentic photography.
- Make the primary navigation easier to scan; the current service and patient-information trees are too broad for a single traditional menu.
- Clarify the relationship between family/cosmetic dentistry and the sleep-apnea/TMJ specialty so it feels like a deliberate advantage rather than a separate message.
- Give high-value services dedicated conversion paths instead of presenting long undifferentiated lists.
- Add visible proof near important CTAs: credentials, experience, reviews, technology, accepted insurance/financing guidance, and new-patient status.
- Use concise homepage copy and move detailed medical/service explanations to dedicated pages.
- Standardize CTA language, button hierarchy, headings, card styles, form styles, iconography, image ratios, and spacing.
- Avoid duplicate staff entries and placeholders such as “Bio coming soon” on public-facing pages.
- Verify inconsistent phone numbers found across older/current content before launch. Do not silently choose between `(301) 812-4946`, `(301) 530-3600`, and `(301) 530-0552`.
- Confirm which doctor provides each specialty and treatment. Do not infer clinical ownership.

---

## 4. Approved Content Preservation and Identity Lock

Antigravity is building this website from a blank canvas, but it is **not**
building a fictional replacement practice. The current live website is the
source of truth for approved identity, people, credentials, patient reviews,
and clinically meaningful claims.

The design, layout, hierarchy, typography, navigation, and supporting marketing
copy may be modernized. The following content is locked and must not be renamed,
anonymized, invented, reassigned, or materially altered without client approval.

### Locked practice identity

- **Bethesda Center for Family & Cosmetic Dentistry**
- **Bernard L. Greenbaum, DDS**
- **Nhu Thuy H. Luong, DDS**
- **6410 Rockledge Drive, Suite 106, Bethesda, MD 20817**
- Current primary website phone: **(301) 812-4946**. Reconfirm before launch
  because older content contains other numbers.

Do not shorten the practice name in legal, footer, structured-data, contact, or
SEO contexts. Shorter display labels may be used only where the full identity
also appears clearly on the page.

### Approved About-language foundation

Preserve this defining sentence from the current homepage as approved language:

> At Bethesda Center for Family and Cosmetic Dentistry, we combine advanced
> dental technology with a patient-first approach.

The About narrative must retain these established ideas even when its supporting
sentences are edited for length or hierarchy:

- high-quality, patient-focused dental care for individuals and families;
- lasting patient relationships and personalized treatment;
- listening, education, clear communication, comfort, and informed decisions;
- advanced training, continuing education, modern technology, and
  evidence-based care;
- comprehensive preventive, cosmetic, restorative, implant, emergency, and
  dental-sleep services;
- confident smiles, improved oral health, better sleep, and overall well-being;
- a welcoming Bethesda practice rather than a corporate dental-chain identity.

Do not replace this story with generic dental slogans. The complete live About
page at `https://www.greenbaumdds.com/about-us` is the migration reference. Its
approved facts and meaning must remain present on the rebuilt About page even if
the presentation is broken into shorter, more scannable sections.

### Locked doctor information

#### Bernard L. Greenbaum, DDS

Maintain the following verified information and its correct attribution:

- more than 25 years of experience providing dentistry in Bethesda, MD;
- dental degree from Georgetown University School of Dentistry;
- continuing education including LVI for Advanced Dental Studies;
- Fellow of the Academy of General Dentistry;
- comprehensive general and cosmetic dentistry;
- special focus on sleep-apnea and snoring treatment;
- Diplomate of the American Board of Dental Sleep Medicine;
- custom oral-appliance therapy including SomnoDent® and TAP®;
- patient-centered care intended to improve comfort, health, sleep, and quality
  of life.

Do not transfer these credentials or clinical claims to another doctor. Use the
current profile at
`https://www.greenbaumdds.com/about-us/meet-dr-greenbaum` as the authoritative
migration reference.

#### Nhu Thuy H. Luong, DDS

Maintain the following verified information and its correct attribution:

- Bachelor of Science in Biology from the University of Central Florida;
- Master of Science in Biomedical Sciences from Barry University;
- Doctor of Dental Surgery from Howard University College of Dentistry;
- inducted into the Omicron Kappa Upsilon National Dental Honor Society;
- post-graduate Advanced Education in General Dentistry residency at LECOM
  School of Dental Medicine;
- Invisalign® certified provider;
- continuing-education commitment and a compassionate, attentive approach;
- approved personal interests: hiking, trying new cuisines, jigsaw puzzles, and
  arts and crafts;
- currently resides in Washington, D.C. with her husband, subject to final
  client reconfirmation before launch.

Do not shorten her professional name to a different public identity, invent
qualifications, or transfer another provider's specialty claims to her. Use the
current profile at `https://www.greenbaumdds.com/about-us/meet-dr-luong` as the
authoritative migration reference.

### Locked staff names and roles

Preserve the spelling, punctuation, and role association of the current staff
roster unless the client supplies an updated roster:

- **Toni Burnett — Registered Dental Hygienist**
- **James David — Office Manager**
- **Yeymi Cruz — Dental Assistant**
- **Zoe O'Brien — Dental Assistant**

Toni Burnett's approved biography may be migrated from the current staff page.
Do not publish “Bio coming soon,” duplicate James David, or invent biographies
for James, Yeymi, or Zoe. Use an elegant name-and-role presentation until the
practice provides approved bios. Before launch, verify that every listed person
still works at the practice and approves public display.

### Testimonials: exact-name and exact-quote policy

Patient reviews are evidence, not marketing copy. Reviewer names, initials,
wording, punctuation, rating, relative/published date, and source attribution
must never be rewritten, “improved,” merged, summarized as a direct quote, or
assigned to another person.

The current homepage uses the **Elfsight Google Reviews** integration with app
identifier:

`86a95421-f814-4c87-b609-cea3f253474c`

Preserve the existing verified Google-review feed where technically and
contractually permitted. Preferred implementation:

```html
<script src="https://elfsightcdn.com/platform.js" async></script>
<div
  class="elfsight-app-86a95421-f814-4c87-b609-cea3f253474c"
  data-elfsight-app-lazy
></div>
```

If the existing Elfsight account/widget cannot be reused, stop and request an
approved replacement data source. Do not manually create substitute reviews.
The testimonial section must fail gracefully and may link to the verified Google
review profile rather than displaying invented fallback quotes.

As of **August 12, 2026**, the visible widget included reviews under these exact
display names:

- **Mani G**
- **Marissa pagett**
- **M M**
- **Albert K.**
- **Viola Forrester**
- **Judy Waxman**
- **W Ennaco**
- **Summer Carbone**

This list is a migration/QA snapshot, not a fixed editorial order. The live feed
may rotate or receive new reviews. Antigravity must confirm that visible names
and review bodies come from the verified feed, and must not hard-code the
snapshot rating or review count because those values change over time.

### Content-preservation QA gate

Before declaring the build complete, compare the new site against the live site
and confirm:

1. both doctors' full names are spelled exactly and connected to the correct
   portraits, biographies, credentials, and services;
2. all approved staff names and roles are unchanged and no placeholder bio is
   presented as fact;
3. testimonial names and quotes are delivered unchanged from the verified
   review source;
4. no fictional patient, staff member, doctor, credential, quotation, rating,
   award, or treatment result appears anywhere;
5. About-page modernization has not removed the practice's patient-first,
   relationship-based, technology-supported positioning;
6. any substantive copy change to a biography, testimonial, clinical claim,
   policy, or patient instruction is flagged for client approval.

---

## 5. Audience and Patient Journeys

### Primary audiences

1. **New family/general dentistry patients** looking for a trustworthy Bethesda dentist.
2. **Cosmetic patients** researching veneers, Invisalign, whitening, bonding, or a complete smile makeover.
3. **Restorative/implant patients** evaluating crowns, dentures, dental implants, All-on-X, or full-mouth reconstruction.
4. **Periodontal/laser patients** seeking advanced, less-invasive gum or implant treatment.
5. **Sleep-apnea, snoring, and TMJ patients** looking for oral-appliance alternatives and qualified expertise.
6. **Urgent-care patients** who need clear same-day/emergency instructions.
7. **Existing patients** looking for forms, post-treatment instructions, contact details, or appointment access.

### Core patient paths

- Homepage → service cluster → specific treatment → book consultation
- Homepage → meet doctors → doctor profile → book appointment
- Homepage → new patients → forms/insurance/first visit → book appointment
- Search landing page → treatment explanation → proof/FAQ → book appointment
- Mobile visit → click-to-call or sticky booking action

---

## 6. Recommended Sitemap

### Main navigation

1. **Home**
2. **Our Practice**
   - About the Practice
   - Meet Dr. Greenbaum
   - Meet Dr. Luong
   - Meet the Team
   - Office & Technology
3. **Services**
   - Preventive & Family Dentistry
   - Cosmetic Dentistry
   - Restorative Dentistry
   - Dental Implants
   - Periodontal & Laser Dentistry
   - Sleep Apnea & Snoring
   - TMJ Therapy
   - Emergency Dentistry
4. **New Patients**
   - What to Expect
   - Patient Registration
   - Insurance & Financing
   - Patient Reviews
   - Smile Gallery
5. **Resources**
   - Home-Care Instructions
   - Blog
   - FAQs
6. **Contact**
7. **Book Appointment** — persistent primary button

Use a structured mega menu for Services on desktop and a clean accordion on mobile. Keep the mobile header simple: logo, menu, and booking/call access.

### Service URL strategy

Preserve valuable existing URLs where possible. If URLs change, create a complete one-to-one 301 redirect map. Avoid merging pages merely to reduce page count when they serve distinct search intent.

---

## 7. Homepage Experience

Build the homepage as a premium, editorial conversion journey. The layout should use generous whitespace, strong type, large authentic imagery, controlled asymmetry, and subtle depth. It must not feel like a collection of generic rounded cards.

### A. Utility strip

- Bethesda location
- Click-to-call phone number
- New-patient indicator, only if confirmed
- Optional “Patient Forms” shortcut

Keep this thin and useful. Hide or simplify it on small screens.

### B. Main header

- Supplied brand mark plus practice name
- Compact navigation with Services mega menu
- Secondary text link: Call or Contact
- Primary royal-blue button: Book an Appointment
- Sticky after initial scroll, with a restrained translucent/blur surface

### C. Hero

Use a modern split composition rather than a full-screen stock-photo overlay.

**Eyebrow:** Modern dentistry in Bethesda, Maryland

**Recommended H1:**

`Advanced care for healthier smiles—and better sleep.`

**Supporting copy:**

`Comprehensive family, cosmetic, restorative, implant, laser, and dental sleep care from an experienced team that takes time to understand you.`

**Primary CTA:** Book an Appointment  
**Secondary CTA:** Explore Our Services

Include a short proof line beneath the actions, using only verified claims, such as:

- 25+ years of experience
- Advanced laser and implant care
- Diplomate, American Board of Dental Sleep Medicine
- Personalized treatment planning

**Hero visual:** authentic, art-directed doctor/patient or doctor portrait imagery. Use one strong image with an offset blue architectural frame or crop. Do not use giant smiling-mouth stock photography, tooth illustrations, or decorative blobs.

### D. Fast patient pathways

Introduce four clear pathways in a refined horizontal or editorial grid:

- Maintain My Smile
- Transform My Smile
- Restore Missing or Damaged Teeth
- Sleep Better / Relieve Jaw Pain

Each pathway should use a short human outcome, not a long procedure list.

### E. Practice introduction

Use an editorial two-column section with office/doctor imagery.

**Suggested heading:** `Comprehensive care, thoughtfully personal.`

Explain that the practice combines modern technology, evidence-based dentistry, and an unhurried approach for patients of all ages. Link to About the Practice and Office & Technology.

### F. Featured expertise

Use three large, visually distinctive feature panels:

1. Cosmetic & restorative dentistry
2. Dental implants & advanced laser care
3. Sleep-apnea, snoring & TMJ therapy

Each panel needs a short explanation, relevant authentic image, and descriptive CTA. At least one panel may use a deep-blue reversed layout.

### G. Meet the doctors

Present both doctors with equal visual care and verified role descriptions. Use professional, consistently art-directed portraits. Include short bios, credentials, and individual profile links. Do not fabricate awards, memberships, years of experience, or specializations.

### H. Why patients choose the practice

Use a restrained proof section with four points:

- Personalized, unhurried care
- Comprehensive treatment in one practice
- Modern diagnostic and treatment technology
- Experienced, compassionate team

Use small line icons or typographic numerals—not cartoon teeth.

### I. Patient stories

Use the verified live review feed defined in **Approved Content Preservation and
Identity Lock**. Present it in a clean, accessible carousel or stacked editorial
layout. Preserve every reviewer display name and quotation exactly as supplied
by Google/Elfsight. Include source attribution and aggregate rating only when
read dynamically from the verified source and permitted. Never invent,
anonymize, rewrite, merge, or hard-code reviews.

### J. Office and location

Use high-quality office photography, address, parking/arrival notes if verified, office hours, phone number, and a lightweight map or map link. Make the Bethesda location unmistakable.

### K. FAQ

Show 5–7 high-intent questions on the homepage and link to the full FAQ. Prioritize new-patient availability, insurance, first visits, emergencies, financing, sleep-apnea consultations, and appointment booking.

### L. Final CTA

Use a confident deep-blue section:

**Heading:** `Ready to feel confident about your care?`  
**Primary CTA:** Book an Appointment  
**Secondary CTA:** Call the Practice

### M. Footer

- Logo and complete practice name
- Address, verified phone, verified hours
- Services and patient shortcuts
- Doctor profiles
- Appointment CTA
- Privacy Policy, Accessibility/ADA statement, sitemap
- Social profiles only if active
- Copyright with dynamic year

---

## 8. Page Templates

### Service landing page

Every major service cluster should contain:

1. Clear local-intent H1
2. Plain-language outcome statement
3. Treatment overview
4. Who may benefit / common symptoms
5. Available treatment options
6. Why choose this practice
7. Doctor or credential proof relevant to the service
8. Process / what to expect
9. Authentic image or treatment/technology image
10. Related treatments
11. FAQs
12. Booking CTA

Medical copy must be accurate, conservative, and reviewed by the practice. Avoid guarantees, absolute outcomes, fear-based language, and unsupported “best dentist” claims.

### Doctor profile

- Strong portrait and concise positioning
- Education and verified credentials
- Clinical interests/services
- Philosophy of care
- Professional memberships and distinctions, if verified
- Human interests, if approved
- Related services
- Appointment CTA

### New-patient hub

- What to expect
- First-visit steps
- Forms/registration
- Insurance verification guidance
- Financing/payment information
- Records/X-ray transfer instructions
- Accessibility and special accommodations
- Appointment CTA and phone support

### Blog/article

- Readable editorial width
- Author/reviewer and updated date
- Table of contents for longer articles
- Descriptive headings
- Relevant internal links
- Medical disclaimer where appropriate
- Related services and articles
- Contextual appointment CTA

### Home-care instructions

Prioritize clarity and safety. Use scannable steps, callout panels for urgent warning signs, a print-friendly style, and a clearly visible office contact. Content must be clinically reviewed.

---

## 9. Design System and Interaction Direction

### Layout

- Maximum content width: approximately 1280–1360px
- Use a disciplined 12-column desktop grid
- Generous vertical rhythm: roughly 96–144px for major desktop sections, scaled down responsibly on mobile
- Mix clean full-width sections with editorial split layouts
- Use asymmetric image placement selectively, never at the expense of clarity
- Border radius should generally be 12–20px, not exaggerated pill/card shapes everywhere

### Components

- Sticky responsive header
- Accessible desktop mega menu and mobile accordion menu
- Primary, secondary, text-link, and reversed buttons
- Service pathway cards
- Feature panels
- Doctor cards
- Credential/proof strip
- Testimonial module
- FAQ accordion
- Booking CTA bands
- Contact/location panel
- Article cards
- Breadcrumbs
- Form fields and validation states
- Mobile sticky action bar: Call + Book

### Motion

Use subtle, purposeful motion:

- soft fade/translate reveals;
- restrained image masking/reveal;
- smooth hover states;
- gentle header transition;
- testimonial transition;
- no excessive parallax, floating particles, scroll-jacking, rotating teeth, cursor effects, or long intro animations.

Respect `prefers-reduced-motion`.

### Iconography

Use one consistent line-icon family such as Lucide. Keep stroke weights consistent. Prefer abstract healthcare/service symbols and clear UI icons over cartoon dental icons.

### Visual anti-patterns to avoid

- Generic teal dental palette
- Hero copy laid over a busy full-width stock image
- Floating gradient blobs and decorative orbs
- Excessive glassmorphism
- Every section presented as equal-sized rounded cards
- Tooth-shaped masks, tooth cursors, smiling-tooth cartoons
- Fake counters, fake review scores, fake awards, or stock badges
- Low-contrast pale-blue text
- Tiny body text or overly thin type
- Animation that delays booking or reading

---

## 10. Photography and Asset Brief

Prioritize authentic practice photography. The visual system will only feel premium if the imagery is consistent and credible.

### Supplied assets and source of truth

A supporting asset set has already been supplied and uploaded to the project's
ImageKit media library. The `@imagekit/next` SDK has already been installed with
NPM. These assets are approved inputs and must be reviewed, catalogued, and used
intentionally before Antigravity searches for substitutes or creates new media.

At minimum, the supplied set includes:

- the Greenbaum white classical-profile logo on the approved royal-blue field;
- a portrait of Dr. Bernard Greenbaum;
- a portrait of Dr. Nhu Thuy H. Luong;
- any additional supporting photographs, videos, backgrounds, textures, or
  design assets present in the supplied ImageKit folders.

### Approved ImageKit supporting-asset inventory

The following stock photographs and videos are already available. They are
optional supporting assets: Antigravity should choose only the files that suit
the final page narrative, composition, crop, and performance budget. It is not
necessary or desirable to use every asset.

**ImageKit endpoint**

```text
https://ik.imagekit.io/karaji35oxm
```

Use the stable relative paths below with `@imagekit/next`. Do not include the
supplied `?updatedAt=...` cache-version parameters in the central manifest.

#### Treatment, consultation, and clinical photography

| Asset path | Suggested use |
| --- | --- |
| `/greenbaundds/male-dentist-working-with-dental-microscope.jpg` | Advanced technology, precision dentistry, or clinical expertise section |
| `/greenbaundds/dentist-examines-patient-s-teeth.jpg` | General dentistry, examination, or preventive-care section |
| `/greenbaundds/young-female-patient-with-open-mouth-examining-dental-inspection-dentist-office.jpg` | Examination or treatment detail; use sparingly because it is visually clinical |
| `/greenbaundds/photo-smiling-dentist-standing-with-arms-crossed-with-her-colleague-showing-okay-sign.jpg` | Generic clinical-team support image; never label these models as the Greenbaum DDS team |
| `/greenbaundds/smiling-female-patient-sitting-chair-showing-thumb-up-dental-clinic.jpg` | Patient comfort, reassurance, or appointment CTA |
| `/greenbaundds/young-female-dentist-dental-office-dentist-work-dental-treatment-concept.jpg` | General treatment or preventive-care section |
| `/greenbaundds/dentist-doing-check-up-patient.jpg` | Routine checkup or comprehensive-care section |
| `/greenbaundds/dentist-examining-patient-s-teeth-dental-clinic.jpg` | Examination or services overview |
| `/greenbaundds/dentist-doing-dental-treatment-intervention-senior-woman-elderly-patient-medical-examination-with-dentist-dental-office-with-orange-equipment.jpg` | Adult/senior care or comprehensive family dentistry; check color harmony before use |

#### Smile and patient-lifestyle photography

| Asset path | Suggested use |
| --- | --- |
| `/greenbaundds/excited-happy-young-pretty-woman.jpg` | Lifestyle result, confidence, or cosmetic-dentistry support |
| `/greenbaundds/headshot-carefree-happy-lucky-young-curly-haired-positive-caucasian-woman-laughing-smiling-having-fun-enjoying-perfect-day-chatting-nice-friendly-talking-coworkers-standing-white-background.jpg` | Natural-smile lifestyle crop or testimonial background support |
| `/greenbaundds/good-looking-feminine-brunette-woman-with-perfect-beaming-smile-no-blemishes-makeup-skin-touching-her-face-looking-pleased-got-rid-acne.jpg` | Cosmetic-dentistry or smile-confidence section; do not imply a treatment result |
| `/greenbaundds/waist-up-portrait-friendly-looking-handsome-masculine-man-with-perfect-white-smile.jpg` | General patient lifestyle or cosmetic-care support |
| `/greenbaundds/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses-indoor-pleased-european-guy-being-good-mood-smiles-positively-emotions-concept.jpg` | Patient lifestyle, confidence, or CTA support |
| `/greenbaundds/happy-woman-cleaning-her-teeth-with-toothbrush-morning.jpg` | Preventive care, hygiene, or patient education |
| `/greenbaundds/smile-portrait-handsome-man-close-up-white-background-happiness-positive-mindset-relax-lifestyle-model-face-happy-big-smile-calm-energy-confidence-isolated-studio.jpg` | Cosmetic dentistry or confident-smile support |

#### Video assets

| Asset path | Suggested use |
| --- | --- |
| `/greenbaundds/0_Dentistry_Doctor_1280x672.mp4` | Muted hero/section loop showing a dentist; test readability behind copy |
| `/greenbaundds/6037426_Dental_Hygienist_1280x720.mp4` | Hygiene or preventive-care section |
| `/greenbaundds/6037424_Dentist_Selecting_1280x720.mp4` | Cosmetic planning, consultation, or shade-selection context |
| `/greenbaundds/0_Teeth_Mouth_1280x720.mp4` | Smile/cosmetic close-up; use only if tasteful and non-distracting |
| `/greenbaundds/0_Dentist_Dental_Tools_1280x672.mp4` | Technology or clinical-detail background |
| `/greenbaundds/0_Dentistry_Treatment_1280x720.mp4` | Treatment or comprehensive-services section |

All assets in this inventory are supporting stock media. They must not be
described as Dr. Greenbaum, Dr. Luong, Greenbaum DDS employees, actual patients,
the Bethesda office, or documented treatment results. Authentic supplied logo,
doctor, staff, office, and testimonial assets take priority wherever identity
or factual representation matters.

For each selected video, create or derive a compressed poster image. Use no
more than one autoplaying decorative video per page, remove or mute audio,
provide a static mobile/reduced-motion fallback, and omit video entirely when
it does not materially improve the experience.

Antigravity must inspect the actual ImageKit folder structure and filenames and
create a small typed asset manifest in the codebase. Do not guess remote paths
from local filenames. Record each exact ImageKit path, intended section, aspect
ratio, dimensions where known, and meaningful alt text. This manifest should be
the single source of truth for site media so paths are not scattered through
components.

More supporting assets may be created when the design genuinely requires them.
Newly generated assets must match the approved brand colors, restrained visual
direction, lighting, crop language, and accessibility requirements. Generated
imagery must never be presented as an authentic doctor, patient, office,
procedure, treatment result, credential, or before-and-after photograph. Use
authentic supplied practice media wherever identity or factual representation
matters.

Do not leave generic placeholders in a completed section when a suitable
supplied asset exists. Conversely, do not force an irrelevant supplied image
into a section merely because it is available.

### Highest-priority photo list

1. Both doctors together in the practice
2. Individual doctor portraits with matching lighting/background treatment
3. Doctor consulting with a real or model patient
4. Hygienist or doctor providing care
5. Reception and patient welcome
6. Treatment room and advanced technology
7. Laser/implant equipment details
8. Team group photo
9. Office exterior/entrance and reception
10. Diverse patient lifestyle portraits, used sparingly

### Image direction

- Bright but not overexposed
- Natural skin tones
- Clean neutral environment with royal-blue details where possible
- Candid, calm, competent interactions
- Avoid exaggerated open-mouth poses and visibly fake dental procedures
- Consistent color grading across the entire site

### Recommended formats

- Source photography: highest-quality TIFF/JPEG/RAW retained outside the web project
- Web delivery: AVIF first, WebP fallback, optimized JPEG only when necessary
- Logos/icons: SVG preferred when a legitimate vector original exists
- Background textures: SVG for geometric patterns; compressed WebP/AVIF for raster grain or photographic textures
- Avoid using PSD, AI, or EPS directly in production; export approved web assets first

### Naming and organization

```text
/public
  /brand
    greenbaum-mark.png
    greenbaum-mark-white.svg
    favicon.svg
  /images
    /home
    /doctors
    /office
    /services
    /patients
  /patterns
  /icons
```

Use descriptive lowercase filenames, for example `dr-greenbaum-patient-consultation.avif`, not `IMG_1049.jpg`.

Every meaningful image needs accurate alt text. Decorative images should use empty alt text. Never stuff local SEO keywords into alt text.

### ImageKit delivery requirements

- Use `@imagekit/next` for photographs and videos delivered from ImageKit.
- Use a relative ImageKit media-library path beginning with `/` as `src`; the
  SDK will append it to the configured URL endpoint.
- Do not paste transformation query strings directly into `src`; use the SDK's
  `transformation` or `queryParameters` props.
- Keep the endpoint centralized through `ImageKitProvider` rather than repeating
  it in every component.
- Set accurate `width` and `height` or a reserved aspect ratio to prevent layout
  shift. Use the `sizes` prop to reflect the real rendered widths.
- Keep responsive delivery enabled and request crop/quality transformations
  appropriate to each component. Never load an original multi-megabyte image
  into a small card.
- Load the primary above-the-fold image eagerly only when it is the page's LCP
  image. Lazy-load below-the-fold images.
- For video, use a compressed poster image, `muted`, `playsInline`, appropriate
  preload behavior, and a static/mobile fallback. Respect reduced-motion and
  data-saving preferences.
- A failed decorative asset must not break layout or obscure content. Important
  brand imagery should have a local or designed fallback.
- Do not use Google Drive, Dropbox, GitHub raw URLs, or temporary share links in
  production components.

---

## 11. Content Rules

- Follow the **Approved Content Preservation and Identity Lock** section before
  applying any general rewriting rule.
- Preserve locked practice names, personal names, roles, biographies,
  credentials, testimonials, clinical claims, policies, and patient instructions.
- Supporting marketing copy may be rewritten for clarity, hierarchy, warmth,
  and conversion only when it does not alter approved meaning or attribution.
- Use “Bethesda, MD” naturally in important headings and page metadata, not repeatedly in every paragraph.
- Lead with patient outcomes; support with technology and credentials.
- Keep paragraphs short and scan-friendly.
- Prefer specific, plain language over clichés such as “your smile is our passion.”
- Avoid unsupported superlatives including “best,” “leading,” “top,” and “number one.”
- Never invent doctor credentials, insurance participation, pricing, review ratings, emergency availability, office hours, or treatment outcomes.
- Make every CTA descriptive: “Book a Cosmetic Consultation” is better than “Learn More” where context permits.
- Maintain consistent spelling: use **preventive dentistry** as the default unless the practice explicitly prefers “preventative.”

### Working homepage metadata

**Title:** `Dentist in Bethesda, MD | Family, Cosmetic & Sleep Dentistry`  
**Description:** `Personalized family, cosmetic, restorative, implant, laser and dental sleep care in Bethesda, MD. Meet our doctors and request an appointment.`

Final metadata should be refined after keyword and competitor research.

---

## 12. Technical Build Specification for Antigravity

Use the following unless the existing project imposes a different approved stack:

- Next.js with App Router
- TypeScript
- Tailwind CSS
- Reusable components and centralized design tokens
- `@imagekit/next` for ImageKit-hosted images and videos; `next/image` only for
  lightweight local `/public` assets
- `next/font` or locally hosted font files
- Lightweight animation solution; use CSS first and Framer Motion only where it materially improves the experience
- Lucide icons or another single consistent icon system
- CMS-ready content architecture for services, doctors, FAQs, articles, and testimonials

### Engineering requirements

- Mobile-first and fully responsive from 320px upward
- Semantic HTML and logical heading structure
- Keyboard-operable navigation, menus, accordions, forms, and carousels
- Visible focus states
- WCAG 2.2 AA color contrast and interaction targets
- Skip-to-content link
- Proper labels, errors, and success states for forms
- No autoplay audio/video
- No layout shifts from images or fonts
- Lazy-load below-the-fold media
- Minimal JavaScript on content pages
- Aim for excellent Core Web Vitals and Lighthouse results without designing to a vanity score
- Cookie/analytics behavior must respect applicable privacy requirements
- Booking and form integrations should use approved secure providers; do not expose secret keys in client-side code
- Protect forms with server-side validation, rate limiting, spam prevention, and privacy-conscious data handling

### ImageKit environment and implementation contract

Create `.env.local` in the Next.js project root and configure the public URL
endpoint from **ImageKit Dashboard → Developer Options → URL Endpoints**:

```env
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/YOUR_IMAGEKIT_ID
```

Displaying assets that were uploaded through the ImageKit dashboard requires
only this URL endpoint; it does not require an API private key. The endpoint is
intentionally public because it appears in delivered media URLs.

Create a central provider, for example:

```tsx
// components/providers/imagekit-provider.tsx
"use client";

import { ImageKitProvider } from "@imagekit/next";

export function AppImageKitProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

  if (!urlEndpoint) {
    throw new Error("NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT is not configured");
  }

  return (
    <ImageKitProvider urlEndpoint={urlEndpoint}>
      {children}
    </ImageKitProvider>
  );
}
```

Wrap the application once in the root layout, then render remote assets with
exact media-library paths:

```tsx
import { Image } from "@imagekit/next";

<Image
  src="/EXACT_IMAGEKIT_FOLDER/EXACT_FILE_NAME.webp"
  alt="Dr. Bernard Greenbaum"
  width={600}
  height={800}
  sizes="(max-width: 768px) 100vw, 50vw"
  transformation={[{ width: 1200, quality: 80, format: "auto" }]}
/>
```

Create a typed asset registry similar to the following and replace every
placeholder path with the exact supplied ImageKit path after inspecting the
media library:

```ts
// lib/media.ts
export const media = {
  logo: {
    src: "/EXACT_PATH_TO_LOGO",
    alt: "Bethesda Center for Family & Cosmetic Dentistry",
    width: 404,
    height: 316,
  },
  drGreenbaum: {
    src: "/EXACT_PATH_TO_DR_GREENBAUM_PORTRAIT",
    alt: "Dr. Bernard Greenbaum",
    width: 600,
    height: 800,
  },
  drLuong: {
    src: "/EXACT_PATH_TO_DR_LUONG_PORTRAIT",
    alt: "Dr. Nhu Thuy H. Luong",
    width: 600,
    height: 800,
  },
} as const;
```

If a future authenticated website-upload feature is explicitly approved, add
the following server-only variables separately:

```env
IMAGEKIT_PUBLIC_KEY=public_xxxxx
IMAGEKIT_PRIVATE_KEY=private_xxxxx
```

Never prefix the private key with `NEXT_PUBLIC_`, never reference it in a client
component, and never commit `.env.local`. Browser-upload authentication must be
generated in a protected server route. Do not build an upload feature for this
marketing site unless it is separately requested.

Before marking media integration complete, Antigravity must:

1. Replace all example paths and placeholder values with real configured values.
2. Start a production build with the endpoint configured and confirm it passes.
3. Open every implemented route and verify that all supplied images and videos
   return successfully and visibly render.
4. Check desktop and mobile crops, intrinsic dimensions, `sizes`, alt text,
   loading priority, poster images, and fallbacks.
5. Check the browser console and network panel for 404/403 responses, malformed
   transformation URLs, hydration errors, mixed content, and layout shift.
6. Confirm no private key or upload signature appears in the browser bundle,
   page source, repository, logs, or screenshots.

### Structured data

Implement valid schema where supported by visible content:

- `Dentist` / appropriate `LocalBusiness`
- `Person` for doctor profiles
- `MedicalProcedure` or relevant service schema only when semantically accurate
- `FAQPage` only for visible FAQs and only in line with current search-engine eligibility rules
- `Article`/`BlogPosting`
- `BreadcrumbList`

Keep name, address, phone, hours, and map information consistent across the site and external listings.

### SEO migration safeguards

- Crawl and export all current URLs before launch
- Preserve high-performing URLs where possible
- Build a one-to-one 301 redirect map for every changed URL
- Retain or improve page titles, metadata, headings, copy depth, internal links, and image alt text
- Generate XML sitemap and robots.txt
- Set canonical URLs
- Fix broken links and orphan pages
- Preserve indexed blog and home-care content
- Do not publish thin placeholder pages
- Validate Google Search Console and analytics after launch

---

## 13. Content and Data Requiring Client Verification

Do not launch until the practice confirms:

- official primary phone number and any specialty-line numbers;
- office hours;
- appointment-booking URL/provider;
- whether new patients are currently being accepted;
- emergency and after-hours policy;
- current doctor biographies, roles, credentials, and treatment ownership;
- complete staff roster and biographies;
- accepted insurance language and whether the practice is in-network or out-of-network;
- financing providers and payment policies;
- review sources, approved testimonials, and rating data;
- professional affiliations, awards, technology names, and trademark usage;
- office/parking/accessibility details;
- active social profiles;
- privacy, accessibility, consent, and medical-content review requirements.

---

## 14. Antigravity Master Instruction

Copy the following section into Antigravity together with this file and the approved asset folder:

> Build a complete, production-quality redesign for Bethesda Center for Family & Cosmetic Dentistry using this PROJECT.md as the source of truth. Preserve the supplied logo and exact core brand color `#01188A`, but create an extremely modern, premium, editorial design system around it. The experience should feel expert, precise, warm, and established—not like a generic dental template.
>
> Supporting assets have already been supplied through ImageKit and `@imagekit/next` is already installed. Before designing sections, inspect the supplied ImageKit asset folders, inventory the exact paths, and create a typed central media manifest. Create `.env.local`, connect `NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT`, wrap the application with `ImageKitProvider`, and render the supplied assets through the SDK. Do not guess filenames, scatter raw URLs across components, or expose ImageKit's private key. Verify every image and video in the running production build and resolve all 404/403, crop, sizing, loading, accessibility, and layout-shift issues before completion.
>
> More supporting assets may be produced when a real design need remains after reviewing the supplied set. Any new asset must match the brand and this art direction; generated media must never impersonate the actual doctors, patients, office, procedures, results, or credentials. Use supplied authentic imagery wherever factual identity matters.
>
> Begin by creating the shared design tokens, responsive header, Services mega menu, footer, buttons, typography, spacing, and reusable page primitives. Then implement the homepage in the exact narrative order defined in this brief. Use authentic supplied assets wherever available and create clearly labeled placeholders only where an approved asset is missing. Do not invent reviews, ratings, awards, doctor credentials, phone numbers, office hours, insurance claims, or medical outcomes.

> Treat the **Approved Content Preservation and Identity Lock** section as a
> hard build constraint. Preserve all named people, roles, doctor credentials,
> and approved About positioning. Use the existing verified Elfsight Google
> Reviews feed so reviewer names and quotes remain exact and current; never
> rewrite or fabricate testimonial content. Where the current site contains an
> incomplete or duplicate staff bio, preserve the verified name and role only
> and await approved replacement copy.
>
> Build mobile-first using Next.js, TypeScript, Tailwind CSS, semantic HTML, reusable components, strong accessibility, optimized images, and restrained motion. Use the full practice name in SEO-critical areas, make Bethesda location relevance clear, and keep “Book an Appointment” as the dominant conversion action. Add a mobile sticky Call + Book action bar. Ensure the architecture can expand into the sitemap and page templates defined in this brief.
>
> Before considering the homepage complete, check it at 320px, 375px, 768px, 1024px, 1440px, and wide desktop sizes. Verify navigation, focus states, contrast, reduced motion, image cropping, no horizontal overflow, readable type, CTA visibility, and no layout shift. The final result must feel intentionally art-directed and must avoid generic rounded-card grids, teal dental colors, cartoon tooth imagery, decorative blobs, excessive glassmorphism, fake proof, and cluttered animation.

---

## 15. Initial Definition of Done

The first Antigravity milestone is complete when:

- the global design system is implemented;
- desktop and mobile navigation work correctly;
- the homepage is fully responsive and uses approved or labeled placeholder assets;
- supplied ImageKit assets are catalogued in a central typed manifest and used in
  the appropriate sections;
- `.env.local` contains the working public ImageKit URL endpoint, with no private
  key exposed to the client;
- all implemented media URLs render successfully in a production build with no
  image/video 404 or 403 errors;
- all homepage sections and CTAs follow this brief;
- both doctors, current staff, and testimonial authors retain their verified
  names, roles, attribution, and source content;
- the approved About positioning remains present and no locked content was
  silently rewritten;
- no unverified claim is presented as fact;
- accessibility basics and reduced-motion behavior are working;
- performance has been tested;
- page metadata and local-business structured data are present using verified information only;
- all client-verification items remain explicitly marked;
- the build contains no obvious template clichés or inconsistent components.

---

## 16. Research Sources Used for This Initial Brief

- Current homepage: https://www.greenbaumdds.com/
- About the practice: https://www.greenbaumdds.com/about-us
- Services overview: https://www.greenbaumdds.com/services
- Dr. Greenbaum profile: https://www.greenbaumdds.com/about-us/meet-dr-greenbaum
- Dr. Luong profile: https://www.greenbaumdds.com/about-us/meet-dr-luong
- Staff roster: https://www.greenbaumdds.com/about-us/meet-the-staff
- Patient reviews page: https://www.greenbaumdds.com/patient-information/patient-reviews
- Office tour: https://www.greenbaumdds.com/about-us/office-tour
- New-patient information: https://www.greenbaumdds.com/patient-information/new-patients
- Patient-information hub: https://www.greenbaumdds.com/patient-information
- Supplied logo file: `Logo.png`

This is a strategic starting point. The next iteration should incorporate the complete approved asset library, verified practice data, competitor references, SEO keyword research, and visual feedback from the first Antigravity homepage concept.
