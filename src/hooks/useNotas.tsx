import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchNotas } from "./../fetch/fetchNotas";
export const useNotas = () => {
  //useQuery(["notas"], fetchNotas(file));
  return useMutation(fetchNotas, {
    onSuccess: () => alert("succesfully Uploaded"),
  });
};
