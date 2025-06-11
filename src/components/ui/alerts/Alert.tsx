import { IconCircleCheck } from "@tabler/icons-react"

interface AlertErrorProps {
    message: string
    status: boolean
}

export default function Alert({ message, status }: AlertErrorProps) {
    return (
        <div className="absolute top-0 left-0 z-[10] w-full h-full flex justify-end items-start pt-[20rem] px-6">
            <div className="bg-red-500 p-4 rounded-md">
                <h1>{message}</h1>
                {status && <IconCircleCheck className="h-6 w-6" />}
            </div>
        </div>
    )
}
