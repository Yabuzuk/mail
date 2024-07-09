import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RatingCreateInput = {
  ratingValue?: number | null;
  comment?: string | null;
  user?: UserWhereUniqueInput | null;
};
