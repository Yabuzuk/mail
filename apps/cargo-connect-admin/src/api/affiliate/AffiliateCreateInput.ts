import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AffiliateCreateInput = {
  referredUser?: string | null;
  user?: UserWhereUniqueInput | null;
};
