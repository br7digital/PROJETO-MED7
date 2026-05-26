import { useState } from 'react';
import HomeGrid from './HomeGrid';
import CategoryDetail from './CategoryDetail';

export default function Dashboard() {
  // null means Home Grid is showing. 
  // A string ID means Category Detail is showing.
  const [activeCategory, setActiveCategory] = useState(null);

  if (activeCategory === null) {
    return <HomeGrid setActiveCategory={setActiveCategory} />;
  }

  return <CategoryDetail activeCategory={activeCategory} setActiveCategory={setActiveCategory} />;
}
