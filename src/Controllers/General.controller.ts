import { ApiResponse } from './../helper/ApiResponse';
import { routes } from './../Routes/index';
import { GeneralService } from './../Services/General.service';
import { Controller, Get } from '@nestjs/common';

@Controller(routes.general)
export class GeneralController {

    constructor (private generalService: GeneralService){}

    @Get()
    getTesting():Promise<ApiResponse> {
        return this.generalService.generalMessage()
    }
    
}