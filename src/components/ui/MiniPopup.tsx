import Button from "./Button";

interface MiniPopupProps {
    title: string;
    icon?: React.ReactNode;
    input?: {
        type: string;
        placeholder: string;
        value?: string;
        onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }[],
    onClick?: () => void;
    onCancel?: () => void;
    buttonText:string[],
}

export default function MiniPopup({ title, icon, input, onClick, onCancel, buttonText }: MiniPopupProps) {
    return (
        <section className="fixed top-0 left-0 w-full h-full bg-black/20 flex items-center justify-center gap-1 z-20">
            <article className="h-fit w-[20rem] p-4 bg-[#f1f1f1] flex flex-col gap-2 rounded-[15px] shadow-sm">
                <h1 className="flex items-center gap-2">
                    <span>{icon}</span>
                    <span>{title}</span>
                </h1>
                <aside className="flex flex-col gap-2">
                    {
                        input?.map((input, i) => (
                            <input
                                key={i}
                                type={input.type}
                                className="py-2 px-3 rounded-[4px] border border-[#c8c8c8]"
                                placeholder={input.placeholder}
                                value={input.value}
                                onChange={input.onChange}
                            />
                        ))
                    }
                </aside>
                <article className="flex w-full gap-2">
                    <Button
                        type="button"
                        style="basic"
                        text={buttonText[0]}
                        aditionalsStyles="w-full"
                        onClick={onClick}
                    />
                    <Button
                        type="button"
                        style="basic-gray"
                        text="Cancelar"
                        onClick={onCancel}
                    />
                </article>
            </article>
        </section>
    )
}
