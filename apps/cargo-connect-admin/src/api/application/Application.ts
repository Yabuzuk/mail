import { User } from "../user/User";

export type Application = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  status: string | null;
  user?: User | null;
};
