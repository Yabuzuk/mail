import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AffiliateServiceBase } from "./base/affiliate.service.base";

@Injectable()
export class AffiliateService extends AffiliateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
