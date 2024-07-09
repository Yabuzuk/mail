import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApplicationWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  status?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
