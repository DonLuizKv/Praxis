import UserCard from "../student/UserCard";
import Image from "next/image";

export default function Header({ name }: { name: string }) {
    return (
        <header className="flex items-center justify-between w-full bg-[#F1F1F1]">
            <section className=" flex items-center gap-3">
                <UserCard name={name} role="estudiante" />
            </section>
            <section className="mr-1 flex items-center">
                <Image src={"/logo.png"} title="Universidad del Sinu - logo" width={50} height={50} alt="profile photo" />
            </section>
        </header>
    );
}