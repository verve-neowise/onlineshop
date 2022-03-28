import { Body, Controller, HttpException, InternalServerErrorException, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Auth } from './model/auth'
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import jwt from 'jsonwebtoken'
import config from "../config";
import SHA256 from "crypto-js/sha256";
import { User } from "./model/user";
import { Response } from 'express'

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ) {}

    @Post('login')
    async login(@Res() response: Response, @Body() loginDto: LoginDto) {

        console.log("> required login");
        console.log(loginDto);

        try {
            let user = await this.authService.find(loginDto.username)

            if (user) {
                let encrypedPassword = SHA256(loginDto.password).toString()

                if (user.password === encrypedPassword) {

                    let token = this.sign(user)

                    response.send(new Auth(user.username, token)) 
                }
                else {
                    throw new HttpException(`Login or password wrong`, 400)
                }
            }
            else {
                throw new HttpException(`user with username: ${loginDto.username} not found. Please register with 'auth/register'`, 400)
            }
        }
        catch(e) {
            if (e instanceof HttpException) {
                throw e
            }
            else {
                throw new InternalServerErrorException()
            }
        }
    } 

    @Post('register') 
    async register(@Body() registerDto: RegisterDto) {

        console.log("> required register");
        console.log(registerDto);

        try {
            let user = await this.authService.register(registerDto)

            let token = this.sign(user)

            return new Auth(user.username, token)
        }
        catch(e) {
            if (e instanceof HttpException) {
                throw e
            }
            else {
                throw new InternalServerErrorException()
            }
        }
    }

    private sign(user: User) {

        let { username, phone, role } = user

        return jwt.sign(
            { username, phone, role },
            config.secretKey,
            { expiresIn: '2h' }
        )
    }
}