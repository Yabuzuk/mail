import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RatingWhereInput = {
  id?: StringFilter;
  ratingValue?: IntNullableFilter;
  comment?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
