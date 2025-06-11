import { Sidebar } from "@/components/admin/Sidebar";
import Students from "@/components/admin/students/Students";

export default function Home() {
    return (
        <div className="flex h-dvh justify-center ">
            <div className="flex w-dvw h-full max-w-[1550px] max-xl:flex-col max-xl:h-full ">
                <Sidebar />
                <Students />
            </div>
        </div>
    );
}
