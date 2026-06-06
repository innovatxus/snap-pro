/**
 * Root loading UI. Rendered automatically by the app router while the next
 * route segment is loading. Keeps the surface intentionally minimal — a
 * centred chrome ring on the brand surface.
 */
export default function Loading() {
  return (
    <div
      role='status'
      aria-live='polite'
      aria-label='Loading'
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg)",
        zIndex: 50,
      }}
    >
      <span
        aria-hidden
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.12)",
          borderTopColor: "var(--blue, #38bdf8)",
          animation: "snap-spin 0.9s linear infinite",
        }}
      />
      <style>{`@keyframes snap-spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
