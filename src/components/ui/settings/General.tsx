import Image from "next/image";
import Button from "../Button";
import { useEffect, useRef, useState } from "react";
import { useFile } from "@/hooks/client/useFile";
import { IconId, IconMail, IconUser } from "@tabler/icons-react";
import { updateStudent } from "@/utils/DataSync";
import { DataChangeStudent } from "@/types/Users";

interface GeneralSettingsProps {
    dataUser: {
        idStudent: number;
        name: string;
        email: string;
        document: number;
        profilePhoto: string | File | null;
    }
}

export default function General({ dataUser }: GeneralSettingsProps) {

    const inputRef = useRef<HTMLInputElement>(null);
    const { file, changeFile, deleteFile } = useFile();

    const [haveChanges, setHaveChanges] = useState<boolean>(false);
    const [originalData, setOriginalData] = useState<DataChangeStudent>(dataUser);
    const [newData, setNewData] = useState<DataChangeStudent>(dataUser);

    const handleOpenArchives = () => {
        inputRef.current?.click();
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "document") {
            if (/^\d*$/.test(value)) {
                setNewData({ ...newData, [name]: value });
            }
            return;
        }

        setNewData({ ...newData, [name]: value });
    };

    const handleSaveChanges = async () => {
        try {
            if (newData.profilePhoto) return;

            setOriginalData(newData);
            setHaveChanges(false);
            await updateStudent(dataUser.idStudent, newData);

        } catch (error) {
            console.log(error);
        }
    };

    const handleCancelChanges = () => {
        deleteFile();
        if (inputRef.current) inputRef.current.value = '';
        setNewData(originalData);
        setHaveChanges(false);
    };

    useEffect(() => {
        const hasChanges = Object.keys(originalData).some(key =>
            originalData[key as keyof DataChangeStudent] !== newData[key as keyof DataChangeStudent]
        );
        setHaveChanges(hasChanges || Boolean(file));
    }, [originalData, newData, file]);

    return (
        <section className="h-full w-full flex flex-col gap-6">
            <article className="flex flex-col gap-2">
                <h3 className="font-light text-[1.2rem] text-[#707070]">Foto de Perfil</h3>
                <aside className="w-full flex items-center gap-4">
                    <input
                        ref={inputRef}
                        name="profilePhoto"
                        type="file"
                        id="profilePhoto"
                        accept=".png, .jpg, .jpeg"
                        className="sr-only"
                        onChange={changeFile}
                    />
                    <Image
                        src={
                            file ?
                                URL.createObjectURL(file) as string
                                :
                                dataUser.profilePhoto as string || "/profile.jpeg"
                        }
                        alt="profile"
                        width={80}
                        height={80}
                        className="rounded-full aspect-square object-cover border border-[#c8c8c8]"
                    />
                    <Button
                        type="button"
                        style="outline-fullRound"
                        text="Cambiar"
                        aditionalsStyles="text-[.9rem]"
                        onClick={handleOpenArchives}
                    />
                </aside>
            </article>

            <article className="flex flex-col gap-2">
                <h3 className="font-light text-[1.2rem] text-[#707070]">Datos Personales</h3>
                <aside className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <h4>Cedula/Documento de identidad</h4>
                        <span className="w-full flex items-center relative">
                            <IconId className="absolute left-2" color="#707070" />
                            <input
                                type="text"
                                name="document"
                                value={newData.document}
                                onChange={handleInput}
                                placeholder={dataUser.document}
                                className="w-full py-2 px-4 pl-9 bg-transparent border border-[#c8c8c8] rounded-[6px] outline-2 outline-transparent outline-offset-2 focus:outline-[#B33A3A] transition-all placeholder:text-[#232121]"
                            />
                        </span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4>Nombre</h4>
                        <span className="w-full flex items-center relative">
                            <IconUser className="absolute left-2" color="#707070" />
                            <input
                                type="text"
                                name="name"
                                value={newData.name || ""}
                                onChange={handleInput}
                                placeholder={dataUser.name}
                                className="w-full py-2 px-4 pl-9 bg-transparent border border-[#c8c8c8] rounded-[6px] outline-2 outline-transparent outline-offset-2 focus:outline-[#B33A3A] transition-all placeholder:text-[#232121]"
                            />
                        </span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4>Correo Electrónico</h4>
                        <span className="w-full flex items-center relative">
                            <IconMail className="absolute left-2" color="#707070" />
                            <input
                                type="email"
                                name="email"
                                value={newData.email || ""}
                                onChange={handleInput}
                                placeholder={dataUser.email}
                                className="w-full py-2 px-4 pl-9 bg-transparent border border-[#c8c8c8] rounded-[6px] outline-2 outline-transparent outline-offset-2 focus:outline-[#B33A3A] transition-all placeholder:text-[#232121]"
                            />
                        </span>
                    </div>
                </aside>
            </article>

            {haveChanges && (
                <article className="h-full w-full flex items-end justify-end gap-2">
                    <Button type="button" style="basic" text="Guardar" onClick={handleSaveChanges} />
                    <Button type="button" style="basic-gray" text="Cancelar" onClick={handleCancelChanges} />
                </article>
            )}
        </section>
    );
}
