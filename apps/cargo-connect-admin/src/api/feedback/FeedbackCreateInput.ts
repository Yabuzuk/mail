import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackCreateInput = {
  feedbackContent?: string | null;
  rating?: number | null;
  user?: UserWhereUniqueInput | null;
};
