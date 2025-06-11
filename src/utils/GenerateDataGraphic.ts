import { DataGraphic } from "@/types/Generic";
import { Student } from "@/types/Users";

export const GenerateDataGraphic = (students: Student[]): DataGraphic => {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
    const colors: string[] = ["#B33A3A", "#36802D", "#2D5680", "#80365B", "#80732D", "#5B2D80"];

    const datasets = students.map((student) => {
        const hasScenary = !!student.scenary;
        const hasARL = !!student.documents.arl?.file_path;
        const hasCoverLetter = !!student.documents.coverLetter?.file_path;
        const totalBinnacles = student.binnacles.length;

        // Progreso por componente
        const arlProgress = hasARL ? 25 : 0;
        const coverLetterProgress = hasCoverLetter ? 25 : 0;
        const scenaryProgress = hasScenary ? 25 : 0;
        const binnacleProgress = Math.min(totalBinnacles, 16) * (25 / 16); // Máximo 25%

        const totalProgress = arlProgress + coverLetterProgress + scenaryProgress + binnacleProgress;

        // Distribuye equitativamente entre los 6 meses
        const monthlyProgress = new Array(6).fill(
            Number((totalProgress / 6).toFixed(2))
        );

        return {
            label: "Progreso de los estudiantes",
            data: monthlyProgress,
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 2,
        };
    });

    return {
        labels: months,
        datasets,
    };
};
