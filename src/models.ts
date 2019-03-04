export interface UserLight {
    username: string;
    password: string;
    credential: Credential;
}

export enum Credential {
    ADMIN = "ADMIN", REGISTER = "REGISTER", VISITOR = "VISITOR"
}

export interface User extends UserLight {
    email: string;
}

export enum Plateform {
    SUPER_NINTENDO = "SUPER_NINTENDO", NES = "NES", MEGA_DRIVE = "MEGA_DRIVE", PLAYSTATION = "PLAYSTATION", GAMEBOY = "GAMEBOY"
}

export enum Genre {
    PLATEFORME = "PLATEFORME", RPG = "RPG", FPS = "FPS", AVENTURE = "AVENTURE"
}

export interface PostGame {
    name?: string;
    price?: string;
    plateform?: string;
    reference?: string;
}

export interface GamePaging {
    pages: number;
    games: Game[];
}

export interface Game {
    name?: string;
    plateform?: Plateform;
    genre?: Genre;
    price?: number;
    image?: string;
    description?: string;
    reference?: string;
    stock?: number;
    editor?: string;
    date?: Date;
    active?: boolean;
}