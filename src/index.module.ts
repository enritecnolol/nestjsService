import { Module } from "@nestjs/common";
import { GeneralModule } from "./Modules/General.module";

@Module({
    imports:[
        GeneralModule
    ],
})

export class indexModule {}