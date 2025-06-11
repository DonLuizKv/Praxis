import { Sidebar } from "@/components/admin/Sidebar";
import Curriculums from "@/components/admin/curriculums/Curriculums";
export default function Home() {
    return (
        <div className="flex h-dvh justify-center ">
            <div className="flex w-dvw h-full max-w-[1550px] max-xl:flex-col max-xl:h-full ">
                <Sidebar />
                <Curriculums />
            </div>
        </div>
    )
}