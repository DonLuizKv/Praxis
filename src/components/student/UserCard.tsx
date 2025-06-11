import Image from "next/image"

interface UserCardProps {
    name: string,
    role: string,
}

export default function UserCard({ name, role }: UserCardProps) {
    return (
        <article className="flex items-center p-2 gap-3">
            <Image src="/logos/logo_real.png" height={50} width={50} alt="profile photo" className="rounded-full" />
            <div className="flex flex-col items-start gap-1">
                <h1 className="font-bold text-[1rem]">{name}</h1>
                <h2 className="text-center text-[0.6rem] px-[.4rem] py-[.1rem] text-white bg-[#EA6A64] rounded-full">{role}</h2>
            </div>
        </article>
    );
}