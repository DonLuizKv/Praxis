interface CheckBoxProps {
    id: string,
    label: string;
    value: string;
    returnValue: (value: string, checked: boolean) => void;
}

export default function CheckBox({ label, value, id, returnValue }: CheckBoxProps) {
    return (
        <span className="flex items-center gap-2">
            <input
                type="checkbox"
                name={id}
                id={id}
                className="peer hidden"
                value={value}
                onChange={(e) => returnValue(value, e.target.checked)}
            />
            <label
                htmlFor={id}
                className="cursor-pointer h-[.8rem] w-[.8rem] rounded-[2px] p-1 outline outline-offset-2 outline-[#B33A3A] peer-checked:bg-[#B33A3A]"
            ></label>
            <p className="flex items-center gap-1 font-regular">{label}</p>
        </span>
    );
}
