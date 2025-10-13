// src/utils.js
// Tiny helpers — intentionally mild, intentionally vague.
// These functions are decoys to guide solvers without exposing anything sensitive.

export function hintLine() {
  // returns a short, non-sensitive nudge
  return "follow the suits, start with hearts";
}

export function fakeAssembler(parts) {
  // a small fake assembler: joins pieces and returns a plausible-looking decoy string.
  // Useful if someone tries to reconstruct fragments they find; this keeps them on a decoy path.
  if (!Array.isArray(parts)) return "no pieces found";
  const assembled = parts.join('');
  // intentionally mark as decoy if it matches typical fake patterns
  if (assembled.includes("DECOY") || assembled.includes("QUEEN_DECOY")) {
    return assembled;
  }
  // otherwise return a polite dead end
  return "echo: " + assembled.slice(0, 32) + (assembled.length > 32 ? "..." : "");
}
