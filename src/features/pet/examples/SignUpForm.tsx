import SchemaForm from "@/infrastructure/SchemaForm";
import { z } from "zod";

// 1. aşama: Form şeması ve validation kuralları
const SignUpFormSchema = z.object({
  email: z.string().email("Enter a real email please.").describe("Email"), // renders TextField
  password: z.string().describe("Password // Enter your password"),
  age: z.number().int().positive().describe("Age // Enter your age"), // renders NumberField
  testBoolean: z.boolean().describe("test?"), // renders CheckBoxField
});

export const SignUpForm = () => {
  function onSubmit(data: z.infer<typeof SignUpFormSchema>) {
    // gets typesafe data when form is submitted
    console.log({ data });
  }

  return (
    <SchemaForm
      schema={SignUpFormSchema}
      onSubmit={onSubmit}
      renderAfter={() => <button type="submit">Submit</button>}
      // 2. Aşama: field propertylerini ayarla
      props={{
        email: {
          className: "class-to-pass",
        },
        password: {
          type: "password",
        },
      }}
    >
      {/* 3. Aşama: Form alanlarını tasarıma göre render */}
      {(fields) => (
        <>
          <h2>Sign Up</h2>
          <div>{fields.email}</div>
          <div>{fields.password}</div>
          <h3>Extra Information</h3>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#e5e5e5",
              padding: "1rem",
            }}
          >
            <div>{fields.age}</div>
            <div>{fields.testBoolean}</div>
          </div>
        </>
      )}
    </SchemaForm>
  );
};
