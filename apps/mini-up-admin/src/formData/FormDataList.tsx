import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FormDataList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FormDataItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
