import { TokenWalletWhereInput } from "./TokenWalletWhereInput";
import { TokenWalletOrderByInput } from "./TokenWalletOrderByInput";

export type TokenWalletFindManyArgs = {
  where?: TokenWalletWhereInput;
  orderBy?: Array<TokenWalletOrderByInput>;
  skip?: number;
  take?: number;
};
