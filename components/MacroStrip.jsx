export default function MacroStrip({ meal, compact = false }) {
  const cells = [
    { v: meal.kcal, l: 'kcal' },
    { v: meal.protein + 'g', l: 'Protein' },
    { v: meal.carbs + 'g', l: 'Carbs' },
    { v: meal.fat + 'g', l: 'Fat' },
  ];
  return (
    <div className={`grid grid-cols-4 gap-1.5 border-t border-line ${compact ? 'mt-3 pt-3' : 'mt-4 pt-4'}`}>
      {cells.map((c) => (
        <div key={c.l}>
          <div className={compact ? 'text-sm font-semibold text-ink' : 'text-[15px] font-semibold text-ink'}>{c.v}</div>
          <div className="text-[10px] text-faint">{c.l}</div>
        </div>
      ))}
    </div>
  );
}
