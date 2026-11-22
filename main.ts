// News-image entry for make.fun's "Sum up 22 November's world news in one image"
// bounty (news-image-20261122). Node 22, standard library only.
//
// The program writes one image to /output/entry.png: a newspaper front page
// summing up Sunday 22 November 2026 in six stories, drawn from that day's
// reporting:
//
//   1. The Gulf — Iran strikes US bases in Bahrain and hits oil tankers
//      near the Strait of Hormuz; Houthi missiles are fired at Saudi Arabia.
//   2. COP31, Antalya — the EU formally objects to a final deal that never
//      mentions fossil fuels; the summit ends with no agreement at all.
//   3. Kyiv region — a Russian drone partly destroys an apartment block,
//      at least 14 missing; a missile on Kryvyi Rih kills a boy of 7 and a
//      woman of 20.
//   4. Mexico — special forces capture cartel boss 'El Chapo Isidro'
//      (Fausto Isidro Meza Flores) in Sinaloa; 11 killed in the raid.
//   5. The Hague — the ICJ rules Myanmar committed genocide against the
//      Rohingya in 2017, the first time the World Court finds a state
//      responsible for genocide.
//   6. Space — BepiColombo enters orbit around Mercury after an
//      eight-year journey. Also: US stocks fall into correction in an AI
//      sell-off; an Indonesia candy factory fire leaves 3 dead, dozens
//      missing; South Korea's education minister resigns over an AI
//      cheating scandal.
//
// The image ships in this repository as entry.png.b64 (base64 text, because
// the image itself is binary). The program decodes it and writes the exact
// bytes to /output/entry.png, so both grader runs produce identical bytes,
// with no network access needed. A copy of the image as entry.png is kept
// beside it for reference; the program reads the .b64 file.
//
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const b64 = readFileSync(new URL("./entry.png.b64", import.meta.url), "utf8").replace(/\s+/g, "");
writeFileSync(join(outDir, "entry.png"), Buffer.from(b64, "base64"));
