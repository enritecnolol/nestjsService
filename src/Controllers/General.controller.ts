import { Controller, Get } from '@nestjs/common';

@Controller('testing')
export class GeneralController {
    @Get()
    getTesting(): string{
        return 'This is a test of the route';
    }
}