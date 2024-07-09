import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackUpdateInput = {
  feedbackContent?: string | null;
  rating?: number | null;
  user?: UserWhereUniqueInput | null;
};
