// // Lightweight deterministic utilities for seeded shuffling and hashing

// // FNV-1a 32-bit hash for strings
// export function hashStringToInt(s: string): number {
//   let h = 2166136261 >>> 0;
//   for (let i = 0; i < s.length; i++) {
//     h ^= s.charCodeAt(i);
//     h = Math.imul(h, 16777619) >>> 0;
//   }
//   return h >>> 0;
// }

// // Mulberry32 PRNG factory
// export function mulberry32(seed: number) {
//   return function () {
//     let t = (seed += 0x6d2b79f5) >>> 0;
//     t = Math.imul(t ^ (t >>> 15), t | 1) >>> 0;
//     t ^= (t + Math.imul(t ^ (t >>> 7), t | 61)) >>> 0;
//     return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
//   };
// }

// // Deterministic Fisher-Yates shuffle using a seeded PRNG
// export function seededShuffle<T>(arr: T[], seedInt: number): T[] {
//   const a = arr.slice();
//   const rand = mulberry32(seedInt);
//   for (let i = a.length - 1; i > 0; i--) {
//     const j = Math.floor(rand() * (i + 1));
//     [a[i], a[j]] = [a[j], a[i]];
//   }
//   return a;
// }


// export const defaultSpanOptions: Array<[number, number]> = [
//   [1, 1],
//   [1, 2],
//   [2, 1],
//   [2, 2],
//   [1, 3],
//   [3, 1],
//   [2, 3],
//   [3, 2],
//   [3, 3],
//   [4, 1],
//   [1, 4],
// ];
// export const defaultHeavySpanOptions: Array<[number, number]> = [
//   [4, 3],
//   [3, 4],
//   [4, 4],
//   [3, 3],
// ];

// // Compute a deterministic seed string from a list of products
// export function computeSeed(list: any[]): string {
//   return list
//     .map((p, idx) => (p as any).id ?? (p as any).name ?? idx)
//     .join('|');
// }

// // Return a seeded/shuffled palette for a given product list
// export function seededPaletteFromList(
//   palette: string[],
//   list: any[],
// ): string[] {
//   const seed = computeSeed(list) + ':palette';
//   return seededShuffle(palette, hashStringToInt(seed));
// }

// // Return a seeded/shuffled span options array for a given product list
// export function seededSpansFromList(
//   spans: Array<[number, number]>,
//   list: any[],
// ): Array<[number, number]> {
//   const seed = computeSeed(list) + ':span';
//   return seededShuffle(spans, hashStringToInt(seed));
// }

// // Pick a span for a product (prefers heavy options when featured)
// export function pickSpanForProduct(
//   product: any,
//   index: number,
//   shuffledSpans: Array<[number, number]>,
//   heavy: Array<[number, number]>,
// ): [number, number] {
//   if ((product as any).featured) {
//     return heavy[index % heavy.length];
//   }
//   return shuffledSpans[index % shuffledSpans.length];
// }
