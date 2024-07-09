import * as graphql from "@nestjs/graphql";
import { AffiliateResolverBase } from "./base/affiliate.resolver.base";
import { Affiliate } from "./base/Affiliate";
import { AffiliateService } from "./affiliate.service";

@graphql.Resolver(() => Affiliate)
export class AffiliateResolver extends AffiliateResolverBase {
  constructor(protected readonly service: AffiliateService) {
    super(service);
  }
}
