"use client"
import { useEffect, useState } from "react";
import Binnacle from "./Binnacle";
import Curriculum from "./Curriculum";
import UploadArchive from "../popups/UploadArchive";
import Scenary from "./Scenary";
import UploadBinnacles from "../popups/UploadBinnacles";
import ViewBinnacles from "../popups/ViewBinnacles";
import Arl from "./Arl";
import CoverLetter from "./CoverLetter";
import UserInfo from "./UserInfo";
import Notifications from "../popups/Notifications";
import SettingStudent from "./SettingStudent";
import { Student } from "@/types/user";

interface StudentSectionProps {
    data: Student,
    onLogout: () => void
}

export default function StudentSection({ data, onLogout }: StudentSectionProps) {
    const [showUploadBinnacles, setShowUploadBinnacles] = useState<boolean>(false);
    const [showViewBinnacles, setShowViewBinnacles] = useState<boolean>(false);
    const [showNotifications, setShowNotifications] = useState<boolean>(false);
    const [showUploadArchive, setShowUploadArchive] = useState(false);
    const [showSetting, setShowSetting] = useState(false);
    const [uploadType, setUploadType] = useState<"curriculum" | "coverLetter" |null>(null);

    const description = `
        Tecnologia en sistemas de informacion y redes de computo
    `

    const handleUploadCurriculum = () => {
        setUploadType("coverLetter");
        setShowUploadArchive(true);
    }

    const handleUploadCoverLetter = () => {
        setUploadType("coverLetter")
        setShowUploadArchive(true);
    }

    const handleShowNotifications = () => {
        setShowNotifications(!showNotifications);
    }

    const handleShowSetting = () => {
        setShowSetting(!showSetting);
    }

    const handleUploadBinnacles = async (status: boolean, files: File[]) => {
        console.log(status, files);
    }

    return (
        <section className="h-full w-full grid grid-cols-4 grid-rows-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 max-md:gap-2">
            <article className="row-span-4 col-span-1 max-lg:col-span-1 max-md:row-span-1 max-md:row-start-6">
                <Curriculum
                    nameStudent={data?.username || "Sin Nombre"}
                    description={description}
                    faculty={"Ingenieria en sistemas"}
                    uploadCurriculum={handleUploadCurriculum}
                />
            </article>
            <article className="row-span-2 col-span-2 max-lg:col-span-1 max-md:row-start-2 max-md:row-span-1">
                <Scenary scenary={data?.scenary?.name || "Sin Escenario"} student={data} />
            </article>
            <article className="row-span-2 col-span-1 max-lg:col-span-1 max-md:row-start-1 max-md:row-span-1">
                <UserInfo
                    userName={data?.username}
                    state={data?.active}
                    onShowNotifications={handleShowNotifications}
                    sonShowSettings={handleShowSetting}
                    onLogout={onLogout}
                />
            </article>
            <article className="row-span-2 col-span-1 max-lg:col-span-1 max-md:row-span-1">
                <Arl File={""} uploaded={false} />
            </article>
            <article className="row-span-2 col-span-1 max-lg:col-span-1 max-md:row-span-1">
                <CoverLetter File={""} uploaded={false} onUpload={handleUploadCoverLetter} />
            </article>
            <article className="row-span-2 col-span-1 max-lg:col-span-1 max-md:row-span-1">
                <Binnacle numberBinnacles={data?.binnacles?.length || 0} onUpload={() => setShowUploadBinnacles(true)} onViewBinnacles={() => setShowViewBinnacles(true)} />
            </article>

            {showNotifications && <Notifications notifications={[]} onClose={handleShowNotifications} />}
            {showSetting && <SettingStudent data={data} onClose={handleShowSetting} />}
            {showUploadBinnacles && <UploadBinnacles onUpload={handleUploadBinnacles} onClose={()=> setShowUploadBinnacles(false)} />}
            {showViewBinnacles && <ViewBinnacles binnacles={data?.binnacles || []} onClose={() => setShowViewBinnacles(!showViewBinnacles)} />}
            {showUploadArchive && <UploadArchive onClose={() => setShowUploadArchive(!showUploadArchive)} onUpload={()=>{}} />}
        </section>
    );
}