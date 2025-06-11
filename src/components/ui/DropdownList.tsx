import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';

interface Option {
    label: string;
    value: string;
}

interface CustomDropdownProps {
    options: Option[];
    style: string;
    placeholder?: string;
    onSelect?: (value: string) => void;
}

export default function CustomDropdown({ options, placeholder, onSelect, style }: CustomDropdownProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<Option | null>(null);

    const handleSelect = (option: Option) => {
        setSelected(option);
        setIsOpen(false);
        onSelect?.(option.value);
    };

    const styles = {
        "normal": "bg-white border border-[#C8C8C8] rounded-md px-3 py-2 flex items-center justify-between gap-2",
    }

    return (
        <div className="relative flex items-center justify-center w-fit">
            <button className={`${styles[style as keyof typeof styles]} cursor-pointer`} onClick={() => setIsOpen(!isOpen)} type="button">
                <span className="text-nowrap overflow-hidden">{selected?.label || placeholder}</span>
                <IconChevronDown size={20} />
            </button>

            {isOpen && (
                <ul className="absolute z-10 top-12 max-h-[25rem] min-w-[10rem] overflow-auto w-fit bg-white border border-[#C8C8C8] rounded-md">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className="px-4 py-2 hover:bg-[#C8C8C8] cursor-pointer"
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
