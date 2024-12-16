import { InputJsonValue } from "../../types";
import { ApplicationUpdateManyWithoutUsersInput } from "./ApplicationUpdateManyWithoutUsersInput";
import { TokenWalletUpdateManyWithoutUsersInput } from "./TokenWalletUpdateManyWithoutUsersInput";
import { RatingUpdateManyWithoutUsersInput } from "./RatingUpdateManyWithoutUsersInput";
import { FeedbackUpdateManyWithoutUsersInput } from "./FeedbackUpdateManyWithoutUsersInput";
import { AffiliateUpdateManyWithoutUsersInput } from "./AffiliateUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  fullName?: string | null;
  phoneNumber?: string | null;
  socialMediaLinks?: string | null;
  applications?: ApplicationUpdateManyWithoutUsersInput;
  tokenWallets?: TokenWalletUpdateManyWithoutUsersInput;
  ratings?: RatingUpdateManyWithoutUsersInput;
  feedbacks?: FeedbackUpdateManyWithoutUsersInput;
  affiliates?: AffiliateUpdateManyWithoutUsersInput;
};
