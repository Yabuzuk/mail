import { User } from "../user/User";

export type Rating = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  ratingValue: number | null;
  comment: string | null;
  user?: User | null;
};
