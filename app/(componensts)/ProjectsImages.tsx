import { Project } from "@/src/models/project";
import Image from "next/image";

export function ProjectsImages({ project }: { project: Project }) {
    return (
        <div className="w-full max-w-7xl mx-auto px-3 xl:px-0 py-20 flex flex-col items-center">
            {
                project.pages?.map(item => (
                    <>
                        <h4 className="text-2xl lg:text-4xl text-white font-medium mb-6">{item.name}</h4>
                        <div className="relative h-[264px] lg:h-[400px] w-full max-w-[600px] mb-8">
                            <Image src={item.path} alt="" fill />
                        </div>
                    </>
                ))
            }
        </div>
    )
}