import { SortOrder } from "../../util/SortOrder";

export type FormDataOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  fromField?: SortOrder;
  to?: SortOrder;
  date?: SortOrder;
  weight?: SortOrder;
  price?: SortOrder;
  contact?: SortOrder;
  messages?: SortOrder;
};
