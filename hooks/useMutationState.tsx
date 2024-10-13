import { useMutation } from "convex/react";
import { useState } from "react";

export const useMutationState = (mutationToRun: any) => {
  const [pending, setPending] = useState(false);

  const mutationFn = useMutation(mutationToRun);

  const mutate = async (payload: any) => {
    setPending(true);

    try {
      try {
        const res = await mutationFn(payload);
        return res;
      } catch (error) {
        throw error;
      }
    } finally {
      return setPending(false);
    }
  };

  return { mutate, pending };
};
