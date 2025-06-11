
interface RadioInputProps<T> {
    label: string;
    value:T;
    icon: React.ReactNode;
    id: string,
    group: string,
    returnValue: (value: T) => void;
    defaultChecked?: boolean;
}

export default function RadioInput<T extends string>({ label, value, icon, id, group, returnValue, defaultChecked }: RadioInputProps<T>) {

    const getSelection = (e:React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.value;
        returnValue(target as T);
    }

    return (
        <span className="flex items-center gap-2">
            <input onChange={getSelection} defaultChecked={defaultChecked} value={value} type="radio" name={group} id={id} className="peer hidden" />
            <label htmlFor={id} className="cursor-pointer h-[.8rem] w-[.8rem] p-1 rounded-full outline outline-offset-1 outline-[#B33A3A] peer-checked:bg-[#B33A3A]" ></label>
            <p className="flex items-center gap-1 font-regular">{icon}<span>{label}</span></p>
        </span>
    );
}