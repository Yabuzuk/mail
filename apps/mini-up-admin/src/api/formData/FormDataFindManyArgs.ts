import { FormDataWhereInput } from "./FormDataWhereInput";
import { FormDataOrderByInput } from "./FormDataOrderByInput";

export type FormDataFindManyArgs = {
  where?: FormDataWhereInput;
  orderBy?: Array<FormDataOrderByInput>;
  skip?: number;
  take?: number;
};
