import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TokenWalletService } from "./tokenWallet.service";
import { TokenWalletControllerBase } from "./base/tokenWallet.controller.base";

@swagger.ApiTags("tokenWallets")
@common.Controller("tokenWallets")
export class TokenWalletController extends TokenWalletControllerBase {
  constructor(protected readonly service: TokenWalletService) {
    super(service);
  }
}
