import React, { useCallback } from 'react';
import { Search } from 'lucide-react';
import debounce from 'lodash/debounce';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
    // Debounce the onChange handler with a 300ms delay
    const debouncedOnChange = useCallback(
        debounce((value: string) => {
            onChange(value);
        }, 300),
        [onChange]
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        // Update the input value immediately for responsive UI
        e.target.value = newValue;
        // Debounce the actual search
        debouncedOnChange(newValue);
    };

    return (
        <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
                type="text"
                defaultValue={value}
                onChange={handleInputChange}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
        </div>
    );
}