export interface UserLight {
    id?: number;
    username?: string;
    password?: string;
    credential?: Credential;
}

export enum Credential {
    ADMIN = "ADMIN", REGISTER = "REGISTER", VISITOR = "VISITOR"
}

export interface User extends UserLight {
    email?: string;
    firstname?: string;
    lastname?: string;
    adress?: string;
    phone?: string;
    birthday?: Date;
}

export enum Plateform {
    SUPER_NINTENDO = "SUPER_NINTENDO", NES = "NES", MEGA_DRIVE = "MEGA_DRIVE", PLAYSTATION = "PLAYSTATION", GAMEBOY = "GAMEBOY"
}

export enum Genre {
    ARCADE = "ARCADE", RPG = "RPG", FPS = "FPS", SPORT = "SPORT", AVENTURE = "AVENTURE"
}

export interface PostGame {
    name?: string;
    price?: string;
    plateform?: string;
    reference?: string;
    genre?: string;
}

export interface GamePaging {
    pages: number;
    games: Game[];
}

export interface Game {
    id?: number;
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

export interface GameCart {
    game: Game;
    quantity: number;
}

export interface Order {
    id?: number;
    games?: GameCart[];
    user?: UserLight;
    orderDate?: Date;
    totalPrice?: number;
}

export interface OrderPaging {
    orders: Order[];
    pages: number;
}

export interface PostOrder {
    firstname?: string;
    lastname?: string;
    orderNum?: number;
    startDate?: Date;
    endDate?: Date;
}