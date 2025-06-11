import { Student } from "@/types/Users";
import { useEffect, useState } from "react";
import { countableData } from "@/types/Generic";

export function useCount({ data }: { data: Student[] }) {
    const [countableData, setCountableData] = useState<countableData>({
        count: data.length,
        actives: 0,
        inactives: 0,
        completes: 0,
        incompletes: 0,
    });

    useEffect(() => {
        const newData = data.reduce(
            (acc, student) => {
                const { arl, coverLetter } = student.documents;
                acc.completes = (arl?.file_path !== null && coverLetter?.file_path !== null) ? acc.completes += 1 : acc.completes;
                acc.incompletes = (arl?.file_path === null || coverLetter?.file_path === null) ? acc.incompletes += 1 : acc.incompletes;
                acc.actives = student.state ? acc.actives += 1 : acc.actives;
                acc.inactives = !student.state ? acc.inactives += 1 : acc.inactives;
                return acc;
            },
            {
                count: data.length,
                actives: 0,
                inactives: 0,
                completes: 0,
                incompletes: 0,
            }
        )
        setCountableData(newData);
    }, [data]);

    return { countableData };
}