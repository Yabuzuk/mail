import { SortOrder } from "../../util/SortOrder";

export type RatingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  ratingValue?: SortOrder;
  comment?: SortOrder;
  userId?: SortOrder;
};
