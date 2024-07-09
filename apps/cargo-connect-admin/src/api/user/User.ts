import { JsonValue } from "type-fest";
import { Application } from "../application/Application";
import { TokenWallet } from "../tokenWallet/TokenWallet";
import { Rating } from "../rating/Rating";
import { Feedback } from "../feedback/Feedback";
import { Affiliate } from "../affiliate/Affiliate";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  fullName: string | null;
  phoneNumber: string | null;
  socialMediaLinks: string | null;
  applications?: Array<Application>;
  tokenWallets?: Array<TokenWallet>;
  ratings?: Array<Rating>;
  feedbacks?: Array<Feedback>;
  affiliates?: Array<Affiliate>;
};
