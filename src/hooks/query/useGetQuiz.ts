import { useQuery } from '@tanstack/react-query';

import useRecodeResults from '../zustand/useRecodeResults';
import { quizRequests } from "@/apis/quiz/quiz.api";

export const useGetQuiz = () => {
  const { setStartTime } = useRecodeResults();

  return useQuery({
    queryKey: ['quiz'],
    queryFn: async () => {
      const result = await quizRequests();
      
      setStartTime(new Date());

      return result;
    },
  });
}