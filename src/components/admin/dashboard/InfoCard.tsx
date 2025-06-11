
interface InfoCardProps {
    title: string;
    value: number;
    icon: "users-active";
}

export default function InfoCard({ title, value, icon }: InfoCardProps) {
    return (
        <section className="bg-[#F1F1F1] border-1 border-[#C8C8C8] rounded-[10px] p-4">
            {title}
            {value}
            {icon}
        </section>
    );
}
