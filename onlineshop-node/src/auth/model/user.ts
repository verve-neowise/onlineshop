export type User = {
    id: number,
    username: string,
    password: string,
    name: string,
    phone: number,
    address: string,
    role: string
}

export enum Role {
    admin = 'admin',
    user  = 'user' 
}