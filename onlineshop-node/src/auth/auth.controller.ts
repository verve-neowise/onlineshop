import { Body, Controller, HttpException, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Auth } from './model/auth'
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import jwt from 'jsonwebtoken'

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ) {}

    @Post('login')
    login(@Body() loginDto: LoginDto) {
        console.log("> required login");
        console.log(loginDto);

        throw new HttpException("Route is not implemented", 500)
    } 

    @Post('register') 
    async register(@Body() registerDto: RegisterDto) {

        console.log("> required register");
        console.log(registerDto);

        try {
            let user = await this.authService.register(registerDto)
            let { username, phone, role } = user

            let token = jwt.sign(
                { username, phone, role },
                process.env.SECRET_KEY,
                { expiresIn: '2h' }
            )

            return new Auth(user.name, token)
        }
        catch(e) {
            throw new HttpException(e.message, 403)
        }
    }
}