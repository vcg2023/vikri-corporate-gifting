CURRENT STATE — real photography in place
------------------------------------------
Every image slot on the site now uses real, client-supplied VIKRI product
photography (no more placeholder illustrations). Mapping:

hero-jute-gifting.jpg           - homepage hero (ribboned jute gift box + hamper items)
corporate-folders-diaries.jpg   - homepage corporate section (desk organizer, diary, tumbler)
material-to-gift-journey.jpg    - homepage sustainability section (jute diary close-up)
jute-bouquet.jpg                - homepage bouquets section (single clean bouquet)
artisan-handmade.jpg            - homepage artisan story section (artisan hands crafting)
corporate-gifting-hero.jpg      - corporate gifting page (full corporate hamper box)
conference-kit.jpg              - corporate gifting page, custom branding section (conference kit)
employee-gifting-hero.jpg       - employee gifting page (welcome kit tote scene)
wedding-return-gifts-hero.jpg   - wedding return gifts page (tote + flowers + gift box)
birthday-return-gifts-hero.jpg  - birthday return gifts page (coaster set + gift box)
anniversary-gifts-hero.jpg      - anniversary gifts page (diary + pen + ribboned box)
sustainable-bouquets-hero.jpg   - sustainable bouquets page (four bouquets together)
gift-hampers-hero.jpg           - gift hampers page (utility gifts collection)
about-artisan.jpg               - about page (artisan hands crafting, portrait crop)
artisan-story.jpg               - artisans page (artisan hands crafting, alternate crop)
og-default.jpg                  - default social share image (cropped from the homepage hero)

NOTES FOR WHOEVER MAINTAINS THIS NEXT
--------------------------------------
- The artisan-hands photo is reused across three spots (homepage artisan section,
  About, Artisans) with different crops — it's the only genuine artisan-at-work
  shot supplied. Swap in more variety here first if you get additional artisan
  photography.
- Several of these photos have taglines and the VIKRI wordmark baked into the
  image itself (e.g. "Sustainable Gifting, Brighter Tomorrows"). That text is
  part of the photo pixels, not live HTML — if the tagline ever needs to
  change, it requires a new photo/render, not a code edit.
- Product cards on products.html, the homepage "Popular gifting ideas" grid,
  and the corporate-gifting.html product grid still use a plain CSS thumbnail
  (no photo) rather than one of these images, since none of the supplied shots
  is a single, isolated product on its own. If per-product photography becomes
  available (e.g. just the folder, just the diary, just one coaster), those
  cards are the next thing worth updating — swap the `.thumb` div for an
  `<img>` tag using the same markup pattern as the hero sections.
- If you need more images later (different crops, new pages, seasonal
  campaigns), the /home/claude workflow used to produce this crop/resize
  logic is straightforward: center-crop each source photo to the target
  aspect ratio (4:5 portrait for hero-media default, 5:4 landscape for inner
  pages, 1200x630 for social share) and export as JPEG at ~90% quality.
