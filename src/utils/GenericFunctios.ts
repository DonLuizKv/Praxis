
export const formatName = (name: string) => {
    if (name.length > 20) {
        return name.slice(0, 20) + "...";
    }
    return name;
}

export const formatSize = (size: number) => {
    const unidades: string[] = ['B', 'KB', 'MB', 'GB'];
    let index: number = 0;

    while (size >= 1024 && index < unidades.length - 1) {
        size /= 1024;
        index++;
    }

    return `${size.toFixed(0)} ${unidades[index]}`;
}

