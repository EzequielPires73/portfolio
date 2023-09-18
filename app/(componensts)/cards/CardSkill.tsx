import { Skill } from "@/src/models/skill";
import Image from "next/image";

export function CardSkill({ skill }: { skill: Skill }) {
    return (
        <div className="p-6 flex justify-between bg-card rounded-md opacity-50 hover:opacity-100 transition-all">
            <div>
                <h4 className="text-white text-xl font-semibold">{skill.name}</h4>
                <span className="text-white">{skill.years} anos de experiência</span>
            </div>
            <div className="w-6 h-6 relative">
                <Image src={skill.image} alt="" width={24} height={24} />
            </div>
        </div>
    )
}