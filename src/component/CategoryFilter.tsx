import { categories } from '../mock';
import type { Category } from '../types';

interface CategoryFilterProps {
    selectedCategory: Category;
    onSelectCategory: (category: Category) => void;
}

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${selectedCategory === category
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
            ))}
        </div>
    );
}