export class Skill {
    id: number;
    name: string;
    years: number;
    image: string;

    constructor({ id, name, years, image }: { id: number, name: string, years: number, image: string }) {
        this.id = id;
        this.name = name;
        this.years = years;
        this.image = image;
    };
}