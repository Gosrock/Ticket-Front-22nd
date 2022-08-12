import { ICustomError } from './useApiError';

const defaultHandler = (error: ICustomError) => {
  console.error(error);
};
export default defaultHandler;
