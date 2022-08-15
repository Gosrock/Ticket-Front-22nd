import { AxiosError } from 'axios';
import { useCallback } from 'react';
import code401Handler from './code401Handler';
import defaultHandler from './defaultHandler';
import useErrorModal from './useErrorModal';
import useHandle401 from './code401Handler';
export interface ICustomError {
  error: string;
  statusCode: number;
  message: string;
  code: string;
}

export interface IValidationError extends ICustomError {
  validationErrorInfo: { [key: string]: string };
}

export type TCustomErrorResponse = {
  method: string;
  timestamp: number;
  statusCode: string;
  path: string;
  error: ICustomError;
};

function isValidationError(error: any): error is IValidationError {
  return (error as IValidationError).validationErrorInfo !== undefined; // T of F
}

const useApiError = () => {
  const { openErrorModal } = useErrorModal();
  const { handle401 } = useHandle401();
  const handleError = useCallback((axiosError: AxiosError) => {
    console.log(axiosError);
    const errorResponse = axiosError.response?.data as TCustomErrorResponse;
    const error = errorResponse.error;
    const status = error.statusCode;
    console.log(status);
    switch (status) {
      // BadRequestException | ValidationError
      case 400:
        if (isValidationError(error)) {
          console.log(error.validationErrorInfo);
        } else {
          openErrorModal(error);
        }
        break;
      // 과도한 요청을 보낼 시
      case 429:
        openErrorModal(error);
        break;
      // 문자메시지 발송 실패
      case 500:
        defaultHandler(error);
        break;
      case 401:
        openErrorModal(error);
        handle401(error);
        break;
      default:
        defaultHandler(error);
        break;
    }
  }, []);
  return { handleError } as const;
};

export default useApiError;
