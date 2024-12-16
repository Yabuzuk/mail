import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AffiliateService } from "./affiliate.service";
import { AffiliateControllerBase } from "./base/affiliate.controller.base";

@swagger.ApiTags("affiliates")
@common.Controller("affiliates")
export class AffiliateController extends AffiliateControllerBase {
  constructor(protected readonly service: AffiliateService) {
    super(service);
  }
}
