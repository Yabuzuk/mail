import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApplicationCreateInput = {
  description?: string | null;
  status?: string | null;
  user?: UserWhereUniqueInput | null;
};
