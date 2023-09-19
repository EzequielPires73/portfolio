import Image from "next/image";
import { CardSkill } from "./cards/CardSkill";
import { skills } from "@/src/repositories/skills.repository";

export function Skills() {
    return (
        <div className="w-full max-w-7xl mx-auto px-3 xl:px-0 py-20 flex flex-col items-center lg:items-start">
            <span className="text-primary text-lg">../competências</span>
            <h2 className="text-white text-3xl lg:text-4xl font-medium mt-2">Conhecimentos</h2>
            <div className="w-full grid grid-cols-2 lg:grid-cols-4 mt-12 gap-2">
                {skills.map(skill => <CardSkill skill={skill}/>)}
            </div>
        </div>
    )
}