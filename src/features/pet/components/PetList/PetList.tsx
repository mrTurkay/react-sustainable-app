import React from "react";

import { Pet } from "@/api";
import { useFindPetsByStatusQuery } from "@/features/pet/api";

import { PetListItem } from "./subcomponents/PetListItem";

const PetList: React.FC = () => {
  const {
    data: pets = [],
    isLoading,
    error,
  } = useFindPetsByStatusQuery({ status: ["available"] });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading pets</div>;

  return (
    <div>
      <h2>Pet List</h2>
      <ul>
        {pets.map((pet: Pet) => (
          <PetListItem key={pet.id} pet={pet} />
        ))}
      </ul>
    </div>
  );
};

export default PetList;
