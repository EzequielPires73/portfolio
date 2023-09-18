import { Project } from "@/src/models/project";
import Image from "next/image";
import Link from "next/link";

export function CardProjectVertical({project}: {project: Project}) {
    return (
        <Link href={`/projetos/${project.id}`} className="h-[396px] overflow-hidden flex flex-col rounded-md bg-card-dark opacity-50 hover:opacity-100 transition-all">
            <div className="bg-card rounded-t-md h-[192px] relative">
                <Image src={project.thumb} alt="" fill/>
            </div>
            <div className="flex-1 p-4">
                <h4 className="text-white font-semibold text-xl mb-1">{project.name}</h4>
                <p className="max-w-xl text-white/80 line-clamp-3">{project.description}</p>
                <span className="max-w-xl text-white/80 block mt-3">
                    {project.technologies.map((item, index) => index === project.technologies.length - 1 ? item : item + ', ' )}
                </span>
            </div>
        </Link>
    )
}