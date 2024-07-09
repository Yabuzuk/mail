import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AffiliateWhereInput = {
  id?: StringFilter;
  referredUser?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
