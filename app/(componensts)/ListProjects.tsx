import { projects } from "@/src/repositories/projects.repository";
import { CardProjectVertical } from "./cards/CardProjectVertical";

export function ListProjects() {
    return (
        <div className="w-full max-w-7xl mx-auto px-3 xl:px-0 py-20">
            <div className="grid lg:grid-cols-4 gap-4">
                {projects.map(project => <CardProjectVertical project={project}/>)}
            </div>
        </div>
    )
}