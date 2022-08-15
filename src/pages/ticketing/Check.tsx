import AppBar from '../../components/common/AppBar';
import SetMargin from '../../components/common/SetMargin';
import styled from 'styled-components';
import ButtonSet from '../../components/common/ButtonSet';
import CheckedTicket from '../../components/ticketing/CheckedTicket';
import CheckedAccount from '../../components/ticketing/CheckedAccount';
import { useRecoilValue } from 'recoil';
import { IOptionType, optionState } from '../../stores/option';
import { useEffect, useState } from 'react';
import useModal from '../../hooks/useModal';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import OrderApi from '../../apis/OrderApi';

const Check = ({}) => {
  const option = useRecoilValue(optionState);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [selected, setSelected] = useState<boolean>(false);
  const { openModal, closeModal } = useModal();
  const { mutate } = useMutation(OrderApi.postOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries('ticket');
      navigate('/mypage');
    },
  });
  useEffect(() => {
    if (option.date === null) {
      openModal({
        modalType: 'Notice',
        modalProps: {
          onClick: () => {
            closeModal();
            navigate('/ticketing/select');
          },
          type: '에러처리',
          errorMessage: '잘못된 접근입니다',
        },
      });
    }
  }, []);

  const onTicketingButtonClick = (option: IOptionType) => {
    mutate({ selection: option.date!, ticketCount: option.count });
  };

  return (
    <>
      <AppBar label={'뒤로가기'} />
      <SetMargin>
        <Title>티켓 구매 전, 확인해주세요</Title>
        <CheckedTicket option={option} />
        <Content></Content>
        <Title>
          <p>아래 계좌로 입금하고</p>예매를 완료해주세요
        </Title>
        <CheckedAccount selected={selected} setSelected={setSelected} />
      </SetMargin>
      <ButtonSet
        buttonDisabled={!selected}
        label={'예매 완료하기'}
        onClick={() => onTicketingButtonClick(option)}
      ></ButtonSet>
    </>
  );
};

export default Check;

const Title = styled.div`
  ${({ theme }) => theme.typo.text_18_B};
  color: ${({ theme }) => theme.palette.mono.white_fa};
  margin-bottom: 16px;

  & p {
    margin-bottom: 5px;
  }
`;

const Content = styled.div`
  margin-bottom: 32px;
`;
