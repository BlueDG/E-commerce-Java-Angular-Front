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