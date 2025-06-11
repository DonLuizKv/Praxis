
interface StatusConfig {
    value: boolean;
    styles:string,
}

interface StudentInfoCardProps {
    title: string;
    value: string | boolean | number;
    icon: React.ReactNode;
    type: "state" | "document" | "custom";
    statusConfig?: StatusConfig;
    customValue?: React.ReactNode;
}


export default function StudentInfoCard({ title, value, icon, type, statusConfig, customValue }: StudentInfoCardProps) {    
    const renderValue = () => {
        switch (type) {
            case "state":
                return <p className={`${statusConfig?.styles}`}>{value ? "Activo" : "Inactivo"}</p>;
            case "document":
                return <p className="pl-1.5">{value}</p>;
            case "custom":
                return customValue || <p className="pl-1.5">{value}</p>;
            default:
                return <p className="pl-1.5">{value}</p>;
        }
    };

    return (
        <div className="flex flex-col gap-1.5 items-start justify-start border border-[#DEDEDE] rounded-[4px] px-3 py-2">
            <h3 className="text-[#707070] text-[.8rem] font-semibold flex items-center gap-1">
                {icon}
                <span>{title}</span>
            </h3>
            <span className="pl-1.5">
                {renderValue()}
            </span>
        </div>
    );
}
