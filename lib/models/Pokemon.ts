export interface Pokemon {
    id: number;
    name: string;
    baseExperience: number;
    sprite: string | null;
    types: string[];
}