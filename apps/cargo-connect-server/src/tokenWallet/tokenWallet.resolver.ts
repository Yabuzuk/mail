import * as graphql from "@nestjs/graphql";
import { TokenWalletResolverBase } from "./base/tokenWallet.resolver.base";
import { TokenWallet } from "./base/TokenWallet";
import { TokenWalletService } from "./tokenWallet.service";

@graphql.Resolver(() => TokenWallet)
export class TokenWalletResolver extends TokenWalletResolverBase {
  constructor(protected readonly service: TokenWalletService) {
    super(service);
  }
}
