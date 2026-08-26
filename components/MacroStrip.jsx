export default function MacroStrip({ meal, compact = false }) {
  const cells = [
    meal.kcal != null && { v: meal.kcal, l: 'kcal' },
    meal.protein != null && { v: meal.protein + 'g', l: 'Protein' },
    meal.fiber != null && { v: meal.fiber + 'g', l: 'Fiber' },
    meal.fat != null && { v: meal.fat + 'g', l: 'Fat' },
  ].filter(Boolean);

  if (!cells.length) return null;

  return (
    <div
      className={`grid gap-1.5 border-t border-line ${compact ? 'mt-3 pt-3' : 'mt-4 pt-4'}`}
      style={{ gridTemplateColumns: `repeat(${cells.length}, minmax(0, 1fr))` }}
    >
      {cells.map((c) => (
        <div key={c.l}>
          <div className={compact ? 'text-sm font-semibold text-ink' : 'text-[15px] font-semibold text-ink'}>{c.v}</div>
          <div className="text-[10px] text-faint">{c.l}</div>
        </div>
      ))}
    </div>
  );
}
