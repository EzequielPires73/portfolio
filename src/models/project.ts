export class Project {
    id: number;
    name: string;
    description: string;
    thumb: string;
    technologies: Array<string>;
    pages?: Array<{
        name: string;
        path: string;
    }>

    constructor({ description, id, name, thumb, technologies, pages }: { id: number, name: string, description: string, thumb: string, technologies: Array<string>, pages?: Array<{ name: string; path: string; }> }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.thumb = thumb;
        this.technologies = technologies;
        this.pages = pages;
    }
}