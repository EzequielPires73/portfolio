import { Experience } from "@/src/models/experience";
import { FaCircle } from "react-icons/fa";

export function CardExperience({ experience }: { experience: Experience }) {
    return (
        <div className="lg:h-[352px] flex gap-8">
            <div className="flex flex-col h-full items-center">
                <div className="w-14 h-14 p-2 rounded-full border border-white/10">
                    <img src={experience.image} alt="" className="object-contain w-full" />
                </div>
                <div className="flex-1 border-r border-white/10 w-0"></div>
            </div>
            <div className="flex flex-col mt-3">
                <span className="flex items-center gap-3 text-white/80">@ {experience.company}</span>
                <h4 className="text-xl text-white font-semibold my-2">{experience.name}</h4>
                <div className="flex items-center gap-3 text-white/80">
                    <span>Abr {experience.start}</span>
                    <FaCircle size={8} />
                    <span>O momento</span>
                    <FaCircle size={8} />
                    <span>({experience.duration} anos)</span>
                </div>
                <p className="max-w-xl text-white/80 mt-2 text-sm">{experience.description}</p>
                <ul className="my-8 flex gap-4 max-w-lg flex-wrap">
                    {experience.technologies.map(item => (
                        <li>
                            <button className="h-8 px-6 flex items-center justify-center bg-primary-dark/20 rounded-md text-primary font-medium">{item}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}