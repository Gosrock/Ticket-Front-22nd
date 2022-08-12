import { useMutation, useQueryClient } from 'react-query';
import UsersApi from '../../apis/UsersApi';

const useSendTalk = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(UsersApi.sendTalk, {
    onSuccess: () => {
      queryClient.invalidateQueries('talks'); // mutation을 성공하면 todo list를 불러오는 useQuery를 무효화 시킨다.
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return mutation;
};

export default useSendTalk;
