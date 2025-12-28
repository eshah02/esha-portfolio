export default function InfoCard({ label, title, sub, accent }) {
  return (
    <div className="relative bg-[var(--bg-card)] border border-[var(--border-alpha)] rounded-2xl p-8">

      {accent && (
        <span className="absolute left-0 top-6 h-16 w-1 bg-primary rounded-full"></span>
      )}

      <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold mb-4">
        {label}
      </p>

      <h4 className="text-xl font-bold text-[var(--text-main)] mb-2">
        {title}
      </h4>

      <p className="text-[var(--text-muted)] text-sm">
        {sub}
      </p>

    </div>
  );
}
