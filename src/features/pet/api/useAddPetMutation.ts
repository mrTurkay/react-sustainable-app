import { useMutation } from "@tanstack/react-query";
import { Pet, petApi } from "../../../api";

export const useAddPetMutation = () => {
  return useMutation({
    mutationFn: (pet: Pet) => petApi.addPet(pet),
    onSuccess: (result) => {
      console.log({ result });
      alert("Pet added successfully");
    },
    onError: (error) => {
      alert(`Error adding pet: ${error}`);
      console.log({ error });
    },
  });
};
