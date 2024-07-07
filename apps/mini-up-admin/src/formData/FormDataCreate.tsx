import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const FormDataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="from" source="fromField" />
        <TextInput label="to" source="to" />
        <DateTimeInput label="date" source="date" />
        <NumberInput label="weight" source="weight" />
        <NumberInput label="price" source="price" />
        <TextInput label="contact" source="contact" />
        <TextInput label="messages" multiline source="messages" />
      </SimpleForm>
    </Create>
  );
};
