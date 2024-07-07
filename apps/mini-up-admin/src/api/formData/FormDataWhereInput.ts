import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type FormDataWhereInput = {
  id?: StringFilter;
  fromField?: StringNullableFilter;
  to?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  weight?: FloatNullableFilter;
  price?: FloatNullableFilter;
  contact?: StringNullableFilter;
  messages?: StringNullableFilter;
};
