import { GeneralService } from './../Services/General.service';
import { Module } from '@nestjs/common';
import { GeneralController } from 'src/Controllers/General.controller';

@Module({
    controllers:[GeneralController],
    providers: [GeneralService]
})

export class GeneralModule {}