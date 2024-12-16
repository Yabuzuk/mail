import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { TokenWalletListRelationFilter } from "../tokenWallet/TokenWalletListRelationFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { AffiliateListRelationFilter } from "../affiliate/AffiliateListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  fullName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  socialMediaLinks?: StringNullableFilter;
  applications?: ApplicationListRelationFilter;
  tokenWallets?: TokenWalletListRelationFilter;
  ratings?: RatingListRelationFilter;
  feedbacks?: FeedbackListRelationFilter;
  affiliates?: AffiliateListRelationFilter;
};
