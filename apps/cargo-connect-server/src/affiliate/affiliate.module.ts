import { Module } from "@nestjs/common";
import { AffiliateModuleBase } from "./base/affiliate.module.base";
import { AffiliateService } from "./affiliate.service";
import { AffiliateController } from "./affiliate.controller";
import { AffiliateResolver } from "./affiliate.resolver";

@Module({
  imports: [AffiliateModuleBase],
  controllers: [AffiliateController],
  providers: [AffiliateService, AffiliateResolver],
  exports: [AffiliateService],
})
export class AffiliateModule {}
