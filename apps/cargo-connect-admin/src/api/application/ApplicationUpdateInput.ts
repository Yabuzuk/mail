import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApplicationUpdateInput = {
  description?: string | null;
  status?: string | null;
  user?: UserWhereUniqueInput | null;
};
