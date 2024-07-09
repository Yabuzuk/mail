/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AffiliateService } from "../affiliate.service";
import { AffiliateCreateInput } from "./AffiliateCreateInput";
import { Affiliate } from "./Affiliate";
import { AffiliateFindManyArgs } from "./AffiliateFindManyArgs";
import { AffiliateWhereUniqueInput } from "./AffiliateWhereUniqueInput";
import { AffiliateUpdateInput } from "./AffiliateUpdateInput";

export class AffiliateControllerBase {
  constructor(protected readonly service: AffiliateService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Affiliate })
  async createAffiliate(
    @common.Body() data: AffiliateCreateInput
  ): Promise<Affiliate> {
    return await this.service.createAffiliate({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        referredUser: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Affiliate] })
  @ApiNestedQuery(AffiliateFindManyArgs)
  async affiliates(@common.Req() request: Request): Promise<Affiliate[]> {
    const args = plainToClass(AffiliateFindManyArgs, request.query);
    return this.service.affiliates({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        referredUser: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Affiliate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async affiliate(
    @common.Param() params: AffiliateWhereUniqueInput
  ): Promise<Affiliate | null> {
    const result = await this.service.affiliate({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        referredUser: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Affiliate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAffiliate(
    @common.Param() params: AffiliateWhereUniqueInput,
    @common.Body() data: AffiliateUpdateInput
  ): Promise<Affiliate | null> {
    try {
      return await this.service.updateAffiliate({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          referredUser: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Affiliate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAffiliate(
    @common.Param() params: AffiliateWhereUniqueInput
  ): Promise<Affiliate | null> {
    try {
      return await this.service.deleteAffiliate({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          referredUser: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}