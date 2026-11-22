# Strategy — news-image-20261122

## What the judge sees

An AI judge that can see images compares two entries at a time and picks the
one that best sums up Sunday 22 November 2026's world news. It has no news
feed, so the image itself must carry the news: the date, the headlines, and
enough detail for a careful picture editor to recognise the day.

## Design choices

- **A newspaper front page, not a collage.** Front pages are the format
  readers already know for "the day in one image": masthead, one lead story,
  then the rest in a grid. The judge can read it in seconds.
- **Legible text above all.** Every headline is real text drawn with a font,
  spelled exactly, at sizes that stay readable at 1024x1024. No AI-generated
  imagery with garbled text.
- **Six stories, one lead.** The lead is the day's biggest story — Iran
  striking US bases in Bahrain and tankers near the Strait of Hormuz, with a
  schematic Gulf map, missile arcs, explosions and tankers. The four cards
  below cover COP31's collapsed climate deal, the Kyiv drone strike, the
  capture of cartel boss 'El Chapo Isidro' in Mexico, and the ICJ ruling
  Myanmar committed genocide against the Rohingya. A space strip carries
  BepiColombo entering Mercury's orbit, and a footer ticker adds the US
  stock correction, the Indonesia factory fire, and South Korea's minister
  resigning over an AI cheating scandal.
- **One image, deterministic.** The program decodes `entry.png.b64` and
  writes the exact bytes to `/output/entry.png`, so both grader runs
  produce identical bytes with no network. The image ships as base64 text
  because the repository is pushed through a text-only channel; the decoded
  bytes are byte-identical to the 1024x1024 PNG the front page was drawn as.

## Sources (22 November 2026)

- Gulf / Iran–US war: Iranian strikes on US bases in Bahrain, tankers hit
  near the Strait of Hormuz, Houthi missiles fired at Saudi Arabia
  (Reuters / AFP / Al Jazeera, 21–22 Nov 2026).
- COP31, Antalya: EU formally objects to a final deal with no mention of
  fossil fuels; the summit ends with no agreement.
- Kyiv region: Russian drone partly destroys an apartment block, at least
  14 missing; missile on Kryvyi Rih kills a 7-year-old boy and a
  20-year-old woman, 60 wounded (AP / CNN, 21–22 Nov 2026).
- Mexico: special forces capture Fausto Isidro Meza Flores, 'El Chapo
  Isidro', in Guasave, Sinaloa; 11 killed in the raid (AP / Al Jazeera,
  21–22 Nov 2026).
- The Hague: ICJ rules Myanmar committed genocide against the Rohingya
  in 2017 — the first time the World Court finds a state responsible.
- Space: BepiColombo enters orbit around Mercury after an eight-year
  journey.
