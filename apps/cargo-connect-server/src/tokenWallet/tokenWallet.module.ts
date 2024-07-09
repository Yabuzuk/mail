import { Module } from "@nestjs/common";
import { TokenWalletModuleBase } from "./base/tokenWallet.module.base";
import { TokenWalletService } from "./tokenWallet.service";
import { TokenWalletController } from "./tokenWallet.controller";
import { TokenWalletResolver } from "./tokenWallet.resolver";

@Module({
  imports: [TokenWalletModuleBase],
  controllers: [TokenWalletController],
  providers: [TokenWalletService, TokenWalletResolver],
  exports: [TokenWalletService],
})
export class TokenWalletModule {}
