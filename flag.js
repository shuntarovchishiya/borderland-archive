// src/utilis.js
// small helper utilities (decoy) — safe, no flags here
/**
 * Return a short human-friendly hint (non-sensitive).
 */
export function shortHint() {
  return "Suits first, then history. Hearts start the tune.";
}

/**
 * Normalize a list of candidate fragments (trim, remove whitespace)
 * - useful for decoy assemblers so solvers feel productive without revealing anything.
 */
export function normalizeFragments(frags = []) {
  if (!Array.isArray(frags)) return [];
  return frags.map(s => String(s || '').replace(/\s+/g, '').trim()).filter(Boolean);
}

/**
 * Safe preview: take assembled string and return a short preview
 * marked clearly as a decoy if it looks like one.
 */
export function previewAssembled(assembled) {
  if (!assembled || typeof assembled !== 'string') return '(nothing assembled)';
  if (/DECOY|QUEEN_DECOY|FLAG\{/.test(assembled)) {
    return `[DECOY PREVIEW] ${assembled.slice(0, 80)}${assembled.length>80 ? '...' : ''}`;
  }
  return assembled.slice(0, 120) + (assembled.length > 120 ? '...' : '');
}
