import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TokenWalletWhereInput = {
  id?: StringFilter;
  tokenBalance?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
