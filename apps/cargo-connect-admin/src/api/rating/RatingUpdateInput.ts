import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RatingUpdateInput = {
  ratingValue?: number | null;
  comment?: string | null;
  user?: UserWhereUniqueInput | null;
};
