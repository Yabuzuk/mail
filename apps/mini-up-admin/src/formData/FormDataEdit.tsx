import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const FormDataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="from" source="fromField" />
        <TextInput label="to" source="to" />
        <DateTimeInput label="date" source="date" />
        <NumberInput label="weight" source="weight" />
        <NumberInput label="price" source="price" />
        <TextInput label="contact" source="contact" />
        <TextInput label="messages" multiline source="messages" />
      </SimpleForm>
    </Edit>
  );
};
