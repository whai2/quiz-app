import client from '@/apis/axios';

export const quizRequests = async () => {
  const { data } = await client.get('',{
    params: {
      amount: 10
    }
  });

  return data;
}