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
import { Document, Student } from "@/types/Users";
import UserInfo from "./UserInfo";
import Notifications from "../popups/Notifications";
import { uploadDocument } from "@/utils/DataSync";
import SettingStudent from "./SettingStudent";

interface StudentSectionProps {
    data: Student ,
    onLogout: () => void
}

export default function StudentSection({ data, onLogout }: StudentSectionProps) {
    const [showUploadBinnacles, setShowUploadBinnacles] = useState<boolean>(false);
    const [showViewBinnacles, setShowViewBinnacles] = useState<boolean>(false);
    const [showNotifications, setShowNotifications] = useState<boolean>(false);
    const [showUploadArchive, setShowUploadArchive] = useState(false);
    const [showSetting, setShowSetting] = useState(false);
    const [uploadType, setUploadType] = useState<"curriculum" | "coverLetter" |null>(null);

    const [curriculum, setCurriculum] = useState<File | null>(null);
    const [coverLetter, setCoverLetter] = useState<File | null>(null);

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

    const handleLogout = async () => {
        onLogout();
    };

    const handleUploadBinnacles = async (status: boolean, files: File[]) => {
        console.log(status, files);
    }

    useEffect(() => {
        console.log(curriculum, coverLetter);
    }, [curriculum, coverLetter]);

    return (
        <section className="h-full w-full grid grid-cols-4 grid-rows-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 max-md:gap-2">
            <article className="row-span-4 col-span-1 max-lg:col-span-1 max-md:row-span-1 max-md:row-start-6">
                <Curriculum
                    nameStudent={data?.name || "Sin Nombre"}
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
                    userName={data?.name}
                    state={data?.state}
                    onShowNotifications={handleShowNotifications}
                    sonShowSettings={handleShowSetting}
                    onLogout={handleLogout}
                />
            </article>
            <article className="row-span-2 col-span-1 max-lg:col-span-1 max-md:row-span-1">
                <Arl File={(data?.documents.arl as Document)?.file_path} uploaded={data?.documents.arl !== null} />
            </article>
            <article className="row-span-2 col-span-1 max-lg:col-span-1 max-md:row-span-1">
                <CoverLetter File={(data?.documents.coverLetter as Document)?.file_path} uploaded={data?.documents.coverLetter !== null} onUpload={handleUploadCoverLetter} />
            </article>
            <article className="row-span-2 col-span-1 max-lg:col-span-1 max-md:row-span-1">
                <Binnacle numberBinnacles={data?.binnacles?.length || 0} onUpload={() => setShowUploadBinnacles(true)} onViewBinnacles={() => setShowViewBinnacles(true)} />
            </article>

            {showNotifications && <Notifications notifications={[]} onClose={handleShowNotifications} />}
            {
                showUploadArchive && (
                    <UploadArchive
                        onClose={() => setShowUploadArchive(!showUploadArchive)}
                        onUpload={async (file) => {
                            if (uploadType === "curriculum") {
                                setCurriculum(file);
                            } else if (uploadType === "coverLetter") {
                                setCoverLetter(file);
                            }
                            await uploadDocument({
                                student_id: data.id,
                                file: file,
                                name: file.name,
                            });
                        }}
                    />
                )
            }
            {
                showUploadBinnacles && (
                    <UploadBinnacles
                        onClose={() => setShowUploadBinnacles(!showUploadBinnacles)}
                        onUpload={handleUploadBinnacles}
                    />
                )
            }
            {
                showViewBinnacles && (
                    <ViewBinnacles binnacles={data.binnacles} onView={() => { }} onClose={() => setShowViewBinnacles(!showViewBinnacles)} />
                )
            }
            {
                showSetting && (
                    <SettingStudent data={data} onClose={handleShowSetting} />
                )
            }
        </section>
    );
}