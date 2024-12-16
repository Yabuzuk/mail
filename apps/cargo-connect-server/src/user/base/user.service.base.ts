/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  User as PrismaUser,
  Application as PrismaApplication,
  TokenWallet as PrismaTokenWallet,
  Rating as PrismaRating,
  Feedback as PrismaFeedback,
  Affiliate as PrismaAffiliate,
} from "@prisma/client";

export class UserServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.UserCountArgs, "select">): Promise<number> {
    return this.prisma.user.count(args);
  }

  async users(args: Prisma.UserFindManyArgs): Promise<PrismaUser[]> {
    return this.prisma.user.findMany(args);
  }
  async user(args: Prisma.UserFindUniqueArgs): Promise<PrismaUser | null> {
    return this.prisma.user.findUnique(args);
  }
  async createUser(args: Prisma.UserCreateArgs): Promise<PrismaUser> {
    return this.prisma.user.create(args);
  }
  async updateUser(args: Prisma.UserUpdateArgs): Promise<PrismaUser> {
    return this.prisma.user.update(args);
  }
  async deleteUser(args: Prisma.UserDeleteArgs): Promise<PrismaUser> {
    return this.prisma.user.delete(args);
  }

  async findApplications(
    parentId: string,
    args: Prisma.ApplicationFindManyArgs
  ): Promise<PrismaApplication[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .applications(args);
  }

  async findTokenWallets(
    parentId: string,
    args: Prisma.TokenWalletFindManyArgs
  ): Promise<PrismaTokenWallet[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .tokenWallets(args);
  }

  async findRatings(
    parentId: string,
    args: Prisma.RatingFindManyArgs
  ): Promise<PrismaRating[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .ratings(args);
  }

  async findFeedbacks(
    parentId: string,
    args: Prisma.FeedbackFindManyArgs
  ): Promise<PrismaFeedback[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .feedbacks(args);
  }

  async findAffiliates(
    parentId: string,
    args: Prisma.AffiliateFindManyArgs
  ): Promise<PrismaAffiliate[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .affiliates(args);
  }
}
