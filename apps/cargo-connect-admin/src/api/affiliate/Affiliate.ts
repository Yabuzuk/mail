import { User } from "../user/User";

export type Affiliate = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  referredUser: string | null;
  user?: User | null;
};
