import { Module } from '@nestjs/common';
import { GeneralController } from 'src/Controllers/General.controller';

@Module({
    controllers:[GeneralController]
})

export class GeneralModule {}