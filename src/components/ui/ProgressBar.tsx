"use client";

interface ProgressBarProps {
    type?: "simple" | "bar";
    progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {

    return (
        <div className="">
            <span className="absolute top-0 left-0 h-full bg-[#4670B4] rounded-full transition-all duration-300"></span>
            <input type="range" min="0" max="100" value={progress} readOnly className="w-full h-[.8rem] opacity-0 cursor-default" />
        </div>
    );
};
