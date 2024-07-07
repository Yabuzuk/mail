import * as graphql from "@nestjs/graphql";
import { FormDataResolverBase } from "./base/formData.resolver.base";
import { FormData } from "./base/FormData";
import { FormDataService } from "./formData.service";

@graphql.Resolver(() => FormData)
export class FormDataResolver extends FormDataResolverBase {
  constructor(protected readonly service: FormDataService) {
    super(service);
  }
}
