// src/features/pet/components/CreatePetForm.tsx

import SchemaForm from "@/infrastructure/SchemaForm";
import { z } from "zod";
import { useAddPetMutation } from "../api";
import { Pet } from "@/api";

const CreatePetSchema = z.object({
  name: z.string().min(3, "At least 3 chars").describe("Pet Name // Karabaş"),
  status: z.string().describe("Status // available"),
});

export const CreatePetForm = () => {
  const { mutate: createNewPet } = useAddPetMutation();

  function onSubmit(data: z.infer<typeof CreatePetSchema>) {
    createNewPet(data as Pet);
  }

  return (
    <SchemaForm
      schema={CreatePetSchema}
      onSubmit={onSubmit}
      renderAfter={() => <button type="submit">Submit</button>}
      props={{}}
    />
  );
};
