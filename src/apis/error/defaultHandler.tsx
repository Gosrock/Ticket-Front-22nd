import { AxiosError } from 'axios';

const defaultHandler = (axiosError: AxiosError) => {
  console.error(axiosError);
};
export default defaultHandler;
