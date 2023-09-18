import { Project } from "@/src/models/project";
import { projects } from "@/src/repositories/projects.repository";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export function CardProject({ project }: { project: Project }) {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-8 lg:h-[304px]">
                <div className="bg-card rounded-md w-full lg:w-[420px] h-full min-h-[264px] relative overflow-hidden">
                    <Image src={project.thumb} alt="" fill />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="h-6 w-6 relative">
                            <Image src={'/icon.svg'} alt="" width={24} height={24} />
                        </div>
                        <h4 className="text-white font-semibold text-xl">{project.name}</h4>
                    </div>
                    <p className="line-clamp-4 max-w-xl text-white/80">{project.description}</p>
                    <ul className="my-8 flex gap-4 max-w-lg flex-wrap">
                        {project.technologies.map(item => (
                            <li>
                                <button className="h-8 px-6 flex items-center justify-center bg-primary-dark/20 rounded-md text-primary font-medium">{item}</button>
                            </li>
                        ))}
                    </ul>
                    <Link href={`/projetos/${project.id}`} className="text-white/80 hover:text-white transition-colors font-medium flex items-center gap-4">Ver projeto <FaArrowRight size={16} /></Link>
                </div>
            </div>
            <div className="border-t border-white/5 mt-4"></div>
        </>
    )
}