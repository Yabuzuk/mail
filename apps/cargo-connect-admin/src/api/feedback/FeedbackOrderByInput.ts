import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  feedbackContent?: SortOrder;
  rating?: SortOrder;
  userId?: SortOrder;
};
