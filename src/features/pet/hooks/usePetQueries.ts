import { useQuery } from "@tanstack/react-query";
import { petApi } from "../../../api";
import { FindPetsByStatusStatusEnum } from "../../../api/generated";

export type UseFindPetsByStatusQueryParams = {
  status?: FindPetsByStatusStatusEnum[];
};

export const useFindPetsByStatusQuery = ({
  status = [FindPetsByStatusStatusEnum.Available],
}: UseFindPetsByStatusQueryParams) => {
  return useQuery({
    queryKey: ["pets", status],
    queryFn: () => petApi.findPetsByStatus(status),
    select: (response) => response?.data,
  });
};
