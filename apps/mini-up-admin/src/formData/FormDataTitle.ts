import { FormData as TFormData } from "../api/formData/FormData";

export const FORMDATA_TITLE_FIELD = "fromField";

export const FormDataTitle = (record: TFormData): string => {
  return record.fromField?.toString() || String(record.id);
};
