import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackWhereInput = {
  id?: StringFilter;
  feedbackContent?: StringNullableFilter;
  rating?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
