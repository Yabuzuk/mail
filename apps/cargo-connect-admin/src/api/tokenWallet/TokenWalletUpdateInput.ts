import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TokenWalletUpdateInput = {
  tokenBalance?: number | null;
  user?: UserWhereUniqueInput | null;
};
