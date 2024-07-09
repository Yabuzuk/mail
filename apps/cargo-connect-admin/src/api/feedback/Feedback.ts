import { User } from "../user/User";

export type Feedback = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  feedbackContent: string | null;
  rating: number | null;
  user?: User | null;
};
