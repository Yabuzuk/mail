import { SortOrder } from "../../util/SortOrder";

export type TokenWalletOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  tokenBalance?: SortOrder;
  userId?: SortOrder;
};
