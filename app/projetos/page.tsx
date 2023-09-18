import { BannerProjects } from "../(componensts)/banners/BannerProjects";
import { Contact } from "../(componensts)/Contact";
import { Header } from "../(componensts)/Header";
import { ListProjects } from "../(componensts)/ListProjects";

export default function Page() {
    return (
        <main>
            <Header />
            <BannerProjects />
            <ListProjects />
            <Contact />
        </main>
    )
}