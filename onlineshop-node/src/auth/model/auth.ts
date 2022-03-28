import { User } from "./user";

export class Auth {
    constructor(
        private username: string,
        private token: string
    ) {}
}