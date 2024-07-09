import { Affiliate as TAffiliate } from "../api/affiliate/Affiliate";

export const AFFILIATE_TITLE_FIELD = "referredUser";

export const AffiliateTitle = (record: TAffiliate): string => {
  return record.referredUser?.toString() || String(record.id);
};
