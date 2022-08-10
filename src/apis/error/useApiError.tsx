import { AxiosError } from 'axios';
import { useCallback } from 'react';
import useErrorModal from './useErrorModal';

export type TCustomError = {
  error: string;
  statusCode: number;
  message: string;
  code: string;
};

export type TCustomErrorResponse = {
  method: string;
  timestamp: number;
  statusCode: string;
  path: string;
  error: TCustomError;
};

const useApiError = () => {
  const { openErrorModal } = useErrorModal();

  const handleError = useCallback((axiosError: AxiosError) => {
    const errorResponse = axiosError.response?.data as TCustomErrorResponse;
    const error = errorResponse.error;
    const status = error.statusCode;

    console.log(error, status);
    switch (status) {
      case 400: // BadRequestException | ValidationError
        openErrorModal(error);
        break;
      case 429: // 과도한 요청을 보낼 시
        openErrorModal(error);
        break;
      case 500: // 문자메시지 발송 실패
        //Handler.custom(error);
        break;
      default:
        //Handler.default(axiosError);
        break;
    }
  }, []);
  return { handleError } as const;
};

export default useApiError;
