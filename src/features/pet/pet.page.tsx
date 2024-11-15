import React from "react";

import PetList from "@/features/pet/components/PetList/PetList";
import { CreatePetForm } from "./components/CreatePetForm";

const PetPage: React.FC = () => (
  <>
    <CreatePetForm />
    <PetList />
  </>
);

export default PetPage;
