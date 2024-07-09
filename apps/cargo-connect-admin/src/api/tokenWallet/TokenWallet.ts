import { User } from "../user/User";

export type TokenWallet = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  tokenBalance: number | null;
  user?: User | null;
};
