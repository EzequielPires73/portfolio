import Link from "next/link";
import { CardProject } from "./cards/CardProject";
import { projects } from "@/src/repositories/projects.repository";

export function Projects() {
    return (
        <div className="w-full max-w-7xl mx-auto px-3 xl:px-0 py-20 flex flex-col items-center lg:items-start">
            <span className="text-primary text-lg">../destaques</span>
            <h2 className="text-white text-3xl lg:text-4xl font-medium mt-2">Projetos em destaque</h2>
            <div className="flex flex-col gap-8 mt-16">
                {projects.map(project => <CardProject project={project}/>)}
            </div>
            <div className="flex gap-2 mt-6">
                <span className="text-base text-white/80">Se interessou?</span>
                <Link href={'/'} className="text-base text-white font-medium">Ver todos</Link>
            </div>
        </div>
    )
}