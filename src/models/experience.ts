export class Experience {
    id: number;
    name: string;
    company: string;
    description: string;
    technologies: Array<string>;
    start: number;
    duration: number;
    image: string;

    constructor({ id, name, company, description, technologies, start, duration, image }: { id: number, name: string, company: string, description: string, technologies: Array<string>, start: number, duration: number, image: string }) {
        this.id = id;
        this.name = name;
        this.technologies = technologies;
        this.start = start;
        this.company = company;
        this.description = description;
        this.duration = duration;
        this.image = image;
    }
}