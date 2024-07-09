import { SortOrder } from "../../util/SortOrder";

export type AffiliateOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  referredUser?: SortOrder;
  userId?: SortOrder;
};
