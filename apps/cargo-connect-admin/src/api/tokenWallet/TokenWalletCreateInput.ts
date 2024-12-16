import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TokenWalletCreateInput = {
  tokenBalance?: number | null;
  user?: UserWhereUniqueInput | null;
};
