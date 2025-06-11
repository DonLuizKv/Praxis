
interface RecentsStudentsProps {
    students: string[];
}

export default function RecentsStudents({ students }: RecentsStudentsProps) {
    return (
        <section className="h-full w-full flex flex-col gap-2">
            <h2 className="text-[1.6rem] max-md:text-[1.2rem] font-bold text-[#232121]">Estudiantes Recientes</h2>
            <div className="overflow-auto">
                <table className="table-auto h-full w-full text-sm border-collapse">
                    <thead className="sticky top-0 z-[5] bg-[#ffff]">
                        <tr className="text-center border-b border-[#C8C8C8]">
                            <th className="px-4 py-2">Nombre</th>
                            <th className="px-4 py-2">Cedula</th>
                            <th className="px-4 py-2">Correo</th>
                            <th className="px-4 py-2">Fecha</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            students.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50 text-center">
                                    <td className="px-4 py-2">{item}</td>
                                    <td className="px-4 py-2">{item + index++}</td>
                                    <td className="px-4 py-2">@</td>
                                    <td className="px-4 py-2">37/24/666</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
}
