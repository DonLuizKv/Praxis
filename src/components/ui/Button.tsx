
interface ButtonProps {
    text?: string,
    type: "submit" | "reset" | "button",
    style: string,
    disabled?: boolean,
    aditionalsStyles?: string,
    icon?: React.ReactNode,
    children?: React.ReactNode,
    onClick?: () => void,
    onSubmit?: () => void,
}



export default function Button({ text, onClick, type, style, disabled, aditionalsStyles, icon, onSubmit, children }: ButtonProps) {
    const styles = {
        "basic": "text-white font-semibold bg-[#B33A3A] py-2 px-4 rounded-[6px]",
        "basic-gray": "text-[#707070] font-semibold bg-[#C8C8C8] py-2 px-4 rounded-[6px]",
        "fullRound": "text-white font-semibold bg-[#B33A3A] py-1 px-3 rounded-full",
        "fullRound-gray": "text-[#707070] font-semibold bg-[#C8C8C8] py-1 px-3 rounded-full",

        "disabled": "text-white font-semibold bg-[#B33A3A] py-2 px-4 rounded-[4px] opacity-50 cursor-not-allowed",
        "outline": "text-[#B33A3A] font-semibold bg-transparent outline outline-[#B33A3A] py-2 px-4 rounded-[4px]",
        "outline-gray": "text-[#707070] font-semibold bg-transparent outline outline-[#707070] py-2 px-4 rounded-[4px]",
        "outline-to-filled": "text-[#B33A3A] font-semibold bg-transparent outline outline-[#B33A3A] py-2 px-4 rounded-[4px] transition-all hover:bg-[#B33A3A] hover:text-white",
        "outline-gray-to-filled": "text-[#707070] font-semibold bg-transparent outline outline-[#707070] py-2 px-4 rounded-[4px] transition-all hover:bg-[#707070] hover:text-white",
        "outline-fullRound": "text-[#B33A3A] font-semibold bg-transparent outline outline-[#B33A3A] py-1 px-3 rounded-full transition-all hover:bg-[#B33A3A] hover:text-white",
        "outline-gray-fullRound": "text-[#707070] font-semibold bg-transparent outline outline-[#707070] py-1 px-3 rounded-full transition-all hover:bg-[#707070] hover:text-white",
    }

    return (
        <button 
            type={type} 
            disabled={disabled} 
            className={`${styles[style as keyof typeof styles] } ${disabled ? "opacity-50 cursor-not-allowed" : ""} flex items-center justify-center ${aditionalsStyles}`} 
            onClick={onClick}
            onSubmit={onSubmit}
        >
            { icon && icon }
            {text}
            {children && children}
        </button>
    )
}
