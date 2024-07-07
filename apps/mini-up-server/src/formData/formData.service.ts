import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FormDataServiceBase } from "./base/formData.service.base";

@Injectable()
export class FormDataService extends FormDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
