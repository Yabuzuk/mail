import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const FormDataShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="from" source="fromField" />
        <TextField label="to" source="to" />
        <TextField label="date" source="date" />
        <TextField label="weight" source="weight" />
        <TextField label="price" source="price" />
        <TextField label="contact" source="contact" />
        <TextField label="messages" source="messages" />
      </SimpleShowLayout>
    </Show>
  );
};
