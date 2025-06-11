export type countableData = {
    count: number,
    actives: number
    inactives: number,
    completes: number,
    incompletes: number,
}

export type DataGraphic = {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string[];
        borderColor: string[];
        borderWidth: number;
    }[];
}
