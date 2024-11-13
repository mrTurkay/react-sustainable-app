import { Pet } from "@/api";

export const PetListItem = ({ pet }: { pet: Pet }) => {
  return (
    <li key={pet.id}>
      {pet.name} - {pet.category?.name}
    </li>
  );
};
