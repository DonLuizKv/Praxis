
interface BentoCardProps {
    gridStyle:{
        rows: string,
        columns: string,
    },
    children?: React.ReactNode,
    addClass?: string,
    shadow?: boolean,
}

export default function BentoCard({ gridStyle, children, addClass, shadow = true }: BentoCardProps) {
    return (
        <aside className={` flex items-center justify-center rounded-[10px] ${addClass} ${shadow ? "bento-card" : ""} ${gridStyle?.rows} ${gridStyle?.columns}`}>
            {children}
        </aside>
    )
}
