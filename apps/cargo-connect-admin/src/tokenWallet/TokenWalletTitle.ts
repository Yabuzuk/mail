import { TokenWallet as TTokenWallet } from "../api/tokenWallet/TokenWallet";

export const TOKENWALLET_TITLE_FIELD = "id";

export const TokenWalletTitle = (record: TTokenWallet): string => {
  return record.id?.toString() || String(record.id);
};
