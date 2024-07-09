import { InputJsonValue } from "../../types";
import { ApplicationCreateNestedManyWithoutUsersInput } from "./ApplicationCreateNestedManyWithoutUsersInput";
import { TokenWalletCreateNestedManyWithoutUsersInput } from "./TokenWalletCreateNestedManyWithoutUsersInput";
import { RatingCreateNestedManyWithoutUsersInput } from "./RatingCreateNestedManyWithoutUsersInput";
import { FeedbackCreateNestedManyWithoutUsersInput } from "./FeedbackCreateNestedManyWithoutUsersInput";
import { AffiliateCreateNestedManyWithoutUsersInput } from "./AffiliateCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  fullName?: string | null;
  phoneNumber?: string | null;
  socialMediaLinks?: string | null;
  applications?: ApplicationCreateNestedManyWithoutUsersInput;
  tokenWallets?: TokenWalletCreateNestedManyWithoutUsersInput;
  ratings?: RatingCreateNestedManyWithoutUsersInput;
  feedbacks?: FeedbackCreateNestedManyWithoutUsersInput;
  affiliates?: AffiliateCreateNestedManyWithoutUsersInput;
};
