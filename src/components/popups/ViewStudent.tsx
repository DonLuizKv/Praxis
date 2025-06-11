"use client"

import { Student } from "@/types/Users";
import ProfileStudent from "@/components/admin/students/ProfileStudent";
import BinnacleViewer from "@/components/popups/BinnacleViewer";
import { useState } from "react";
import ArchiveViewer from "@/components/popups/ArchiveViewer";
import UploadArchive from "./UploadArchive";
import { updateDocument, uploadDocument } from "@/utils/DataSync";

interface ViewStudentProps {
    data: Student,
    onClose: () => void;
}

export default function ViewStudent({ data, onClose }: ViewStudentProps) {

    const [binnacleViewer, setBinnacleViewer] = useState<boolean>(false);
    const [uploadArchive, setUploadArchive] = useState<{ display: boolean, pointer: string }>({ display: false, pointer: "" });
    const [documentViewer, setDocumentViewer] = useState<{ display: boolean, label: string, file: File | string }>({ display: false, label: "", file: "" });

    const getBinnacle = (data: Student) => {
        return data.binnacles.map((binnacle) => {
            return { 
                name: binnacle.name, 
                file_path: binnacle.file_path 
            }
        });
    }

    const handleUploadArchive = async (file: File) => {
        if (!file) return;

        const document_type = uploadArchive.pointer;
        const existinPath = data.documents[document_type]?.file_path;
        const payloadDocuments = { ...data.documents };

        if (document_type === "arl") {
            payloadDocuments.arl = {
                ...payloadDocuments.arl,
                file_path: file,
            };
        } else if (document_type === "coverLetter") {
            payloadDocuments.coverLetter = {
                ...payloadDocuments.coverLetter,
                file_path: file,
            };
        }

        try {
            if (existinPath === "" || existinPath === undefined || existinPath === null) {
                await uploadDocument({
                    student_id: data.id,
                    name: document_type,
                    file,
                });
            } else {
                await updateDocument(data.id, file)
            }

            setUploadArchive({ display: false, pointer: "" });
        } catch (error) {
            console.error("Error subiendo documento:", error);
        }
    }

    return (
        <div className="fixed inset-0 z-10 bg-black/10 backdrop-blur-xs flex justify-center items-center">
            <div className="flex max-lg:flex-col gap-2 max-sm:w-full max-lg:overflow-auto ">
                <ProfileStudent
                    data={data}
                    onClose={onClose}
                    gridStyle="col-span-1 row-span-3"
                    onView={(label, file) => {
                        setDocumentViewer({ display: true, label: label, file: file })
                    }}
                    onUpload={(pointer) => setUploadArchive({ display: true, pointer: pointer })}
                    onViewBinnacle={() => setBinnacleViewer(true)}
                />
                {
                    binnacleViewer && (
                        <BinnacleViewer
                            onView={(file, label) =>
                                setDocumentViewer({ display: true, label: label, file: file })
                            }
                            onClose={() => setBinnacleViewer(!binnacleViewer)}
                            gridStyle="col-span-1 row-span-2" binnacles={getBinnacle(data)}
                        />
                    )
                }

                {
                    documentViewer.display && (
                        <ArchiveViewer
                            isStudentsTable={true}
                            name={documentViewer.label}
                            file={documentViewer.file}
                            gridStyle="col-span-1 row-span-3"
                            onClose={() =>
                                setDocumentViewer({ display: false, label: "", file: "" })
                            }
                        />
                    )
                }

                {
                    uploadArchive.display && (
                        <UploadArchive
                            onClose={() => setUploadArchive({ display: false, pointer: "" })}
                            onUpload={handleUploadArchive}
                        />
                    )
                }
            </div>
        </div>
    );
}