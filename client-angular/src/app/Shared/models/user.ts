import {Role} from './Role';

export class User {
    static username: string;
    static password: string;
    static isAdmin: boolean;
    id: number;
    numOfBooks: number;
    overdueBook: number;
    history: string;
    role: Role;
    token: string;
    firstName: string;
    lastName: string;
}
