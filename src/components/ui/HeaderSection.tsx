import Image from "next/image"

interface HeaderSectionProps {
    title: string,
    faculty: string,
}

export default function HeaderSection({ title, faculty }: HeaderSectionProps) {
    return (
        <article className="w-full flex items-center justify-between pt-4">
            <div className="flex items-center gap-2">
                <h1 className="text-[1.6rem] font-bold text-[#232121]">{title}</h1>
                <p className="border-l border-[#C8C8C8] pl-2 text-[.9rem] text-[#707070] max-md:hidden">{faculty}</p>
            </div>
            <Image src="/logo.png" alt="logo" width={40} height={40} />
        </article>
    )
}
