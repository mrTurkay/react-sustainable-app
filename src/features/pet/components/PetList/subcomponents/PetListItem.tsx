import { Pet } from "../../../../../api/generated";

export const PetListItem = ({ pet }: { pet: Pet }) => {
  return (
    <li key={pet.id}>
      {pet.name} - {pet.category?.name}
    </li>
  );
};
