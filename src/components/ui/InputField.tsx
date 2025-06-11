'use client';

import { useState } from 'react';
import { IconEye, IconEyeOff } from '@tabler/icons-react';

interface InputFieldProps {
    id: string;
    label: string;
    type: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    placeholder?: string;
    rightIcon?: React.ReactNode;
    aditionalsStyles?: string;
    isPassword?: boolean;
}

export default function InputField({ id, label, type, value, onChange, error, placeholder, rightIcon, aditionalsStyles = '', isPassword = false, }: InputFieldProps) {
    const [showPassword, setShowPassword] = useState(false);

    const isNumber = type === 'number';

    const inputType = isPassword
        ? showPassword
            ? 'text'
            : 'password'
        : 'text';

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (isNumber && !/^[0-9]$/.test(e.key) && !['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            e.preventDefault();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        if (isNumber) {
            const pasted = e.clipboardData.getData('Text');
            if (!/^\d+$/.test(pasted)) {
                e.preventDefault();
            }
        }
    };

    return (
        <div className={`space-y-2 ${aditionalsStyles}`}>
            <label htmlFor={id} className="text-sm font-medium">
                {label}
            </label>
            <div className="relative">
                <input
                    id={id}
                    type={inputType}
                    value={value}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                    onPaste={handlePaste}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${error ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-red-500 transition-all`}
                    placeholder={placeholder}
                    inputMode={isNumber ? 'numeric' : undefined}
                />
                {isPassword ? (
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        tabIndex={-1}
                    >
                        {showPassword ? <IconEyeOff size={20} /> : <IconEye size={20} />}
                    </button>
                ) : (
                    rightIcon && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            {rightIcon}
                        </div>
                    )
                )}
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
}
