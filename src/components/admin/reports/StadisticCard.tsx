
interface StadisticCardProps {
    title: string;
    value: number;
    mainColor: string;
}

export default function StadisticCard({ title, value, mainColor }: StadisticCardProps) {
    return (
        <section className="h-[8rem] w-full p-2 bg-[#f1f1f1] rounded-[8px] flex flex-col items-center justify-center border border-[#c8c8c8]">
            <article className="flex flex-col gap-1">
                <h3 className="text-[.9rem] text-[#707070] font-light text-center">{title}</h3>
                <p className={`text-[1.5rem] text-[#232121] font-bold text-center ${mainColor}`}>{value}</p>
            </article>
        </section>
    )
}
