import { Contact } from "@/app/(componensts)/Contact";
import { Header } from "@/app/(componensts)/Header";
import { ProjectsImages } from "@/app/(componensts)/ProjectsImages";
import { Banner404 } from "@/app/(componensts)/banners/Banner404";
import { BannerProjectsView } from "@/app/(componensts)/banners/BannerProjectsView";
import { projects } from "@/src/repositories/projects.repository";

export default function Page({ params }: { params: { id: number } }) {
    const project = projects.find(item => item.id === +params.id);

    return (
        <main>
            <Header />
            {project ?
                <>
                    <BannerProjectsView project={project} />
                    <ProjectsImages project={project} />
                </> :
                <Banner404 message="Ops, projeto não encontrado!"/>
            }
            <Contact />
        </main>
    )
}