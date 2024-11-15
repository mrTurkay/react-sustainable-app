import { createTsForm } from "@ts-react/form";
import { z } from "zod";
import { CheckBoxField, NumberField, TextField } from "./formFields";

// create the mapping
const mapping = [
  [z.string(), TextField],
  [z.boolean(), CheckBoxField],
  [z.number(), NumberField],
] as const; // 👈 `as const` is necessary

// A typesafe React component
const SchemaForm = createTsForm(mapping);

export default SchemaForm;
