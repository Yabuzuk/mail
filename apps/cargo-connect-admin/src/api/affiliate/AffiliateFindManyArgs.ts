import { AffiliateWhereInput } from "./AffiliateWhereInput";
import { AffiliateOrderByInput } from "./AffiliateOrderByInput";

export type AffiliateFindManyArgs = {
  where?: AffiliateWhereInput;
  orderBy?: Array<AffiliateOrderByInput>;
  skip?: number;
  take?: number;
};
