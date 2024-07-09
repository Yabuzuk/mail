import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TokenWalletServiceBase } from "./base/tokenWallet.service.base";

@Injectable()
export class TokenWalletService extends TokenWalletServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
