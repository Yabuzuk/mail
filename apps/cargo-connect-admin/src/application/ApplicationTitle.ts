import { Application as TApplication } from "../api/application/Application";

export const APPLICATION_TITLE_FIELD = "description";

export const ApplicationTitle = (record: TApplication): string => {
  return record.description?.toString() || String(record.id);
};
