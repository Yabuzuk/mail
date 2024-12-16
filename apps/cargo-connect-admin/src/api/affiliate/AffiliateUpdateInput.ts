import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AffiliateUpdateInput = {
  referredUser?: string | null;
  user?: UserWhereUniqueInput | null;
};
