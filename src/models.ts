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

export enum Plateforme {
    SUPER_NINTENDO = "SUPER_NINTENDO", NES = "NES", MEGA_DRIVE = "MEGA_DRIVE", PLAYSTATION = "PLAYSTATION", GAMEBOY = "GAMEBOY"
}

export interface PostGame {
    nom?: string;
    prix?: number;
    plateforme?: Plateforme;
    reference?: string;
}