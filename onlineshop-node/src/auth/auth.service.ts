import { HttpException, Injectable } from "@nestjs/common";
import { UserModel } from "../storage/database";
import { RegisterDto } from "./dto/register.dto";
import { Role, User } from './model/user'
import { mapTo } from '../storage/extentions'
import sha256 from 'crypto-js/sha256';

@Injectable()
export class AuthService {

    async register(registerDto: RegisterDto): Promise<User> {

        let { username, password } = registerDto

        if (await this.find(username)) {
            throw new Error(`User with username: ${username} already exists!`)
        }

        let encrypedPassword = sha256(password).toString()

        let user: User = {
            id: undefined,
            username: username,
            password: encrypedPassword,
            name: registerDto.name,
            phone: registerDto.phone,
            address: registerDto.address,
            role: Role.user
        }

        let data = await UserModel.create(user)

        console.log(data);

        return user
    }

    async find(username: string): Promise<User> {

        let user = await UserModel.findOne({
            where: { username }
        })
        
        return user ? mapTo<User>(user) : undefined
    }
}