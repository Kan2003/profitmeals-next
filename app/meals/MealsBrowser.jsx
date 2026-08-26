'use client';

import { useSearchParams } from 'next/navigation';
import MealExplorer from '@/components/MealExplorer';

export default function MealsBrowser() {
  const params = useSearchParams();
  const goal = params.get('goal') || 'All';
  return <MealExplorer key={goal} initial={goal} />;
}
