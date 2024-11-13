import { useQuery } from "@tanstack/react-query";
import { FindPetsByStatusStatusEnum, petApi } from "../../../api";

export type UseFindPetsByStatusQueryParams = {
  status?: FindPetsByStatusStatusEnum[];
};

export const useFindPetsByStatusQuery = ({
  status = [FindPetsByStatusStatusEnum.Available],
}: UseFindPetsByStatusQueryParams) => {
  return useQuery({
    queryKey: ["pets", status],
    queryFn: () => petApi.findPetsByStatus(status),
    select: (response) => response?.data, // data transformation here
    enabled: status.length > 0, // fetch on a case
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  });
};
