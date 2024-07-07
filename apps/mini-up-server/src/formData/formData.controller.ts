import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FormDataService } from "./formData.service";
import { FormDataControllerBase } from "./base/formData.controller.base";

@swagger.ApiTags("formData")
@common.Controller("formData")
export class FormDataController extends FormDataControllerBase {
  constructor(protected readonly service: FormDataService) {
    super(service);
  }
}
