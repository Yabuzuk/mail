import { Module } from "@nestjs/common";
import { FormDataModuleBase } from "./base/formData.module.base";
import { FormDataService } from "./formData.service";
import { FormDataController } from "./formData.controller";
import { FormDataResolver } from "./formData.resolver";

@Module({
  imports: [FormDataModuleBase],
  controllers: [FormDataController],
  providers: [FormDataService, FormDataResolver],
  exports: [FormDataService],
})
export class FormDataModule {}
