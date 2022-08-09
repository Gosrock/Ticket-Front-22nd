import TicketInfoSkeleton from '../../skeleton/TicketInfoSkeleton';
import TicketInfo from './TicketInfo';
import PurchaseTicket from './PurchaseTicket';
import styled from 'styled-components';
import { convertDate } from '../../../utils/convertDate';

import { useNavigate } from 'react-router-dom';
import { ITicket } from '../../../apis/type/ticket';

interface IMyReservedTicket {
  date: 'YB' | 'OB';
  tickets: ITicket[] | undefined;
  status: string;
}

const MyReservedTicket = ({ date, tickets, status }: IMyReservedTicket) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      {date === 'YB' ? (
        <>
          <h3>9월 1일 (목)</h3>
          <h3>
            <span>DAY 1 : YB</span>
          </h3>
        </>
      ) : (
        <>
          <h3>9월 2일 (금)</h3>
          <h3>
            <span>DAY 2 : OB</span>
          </h3>
        </>
      )}
      <Tickets>
        {status === 'success' ? (
          !!tickets && (
            <>
              {tickets.map((el: ITicket) => {
                const { Month, Day, Hour, Minute } = convertDate(el.createdAt);
                return (
                  <TicketInfo
                    key={el.id}
                    status={el.status}
                    createdat={`${Month}/${Day} ${Hour}:${Minute}`}
                    id={el.id}
                    onClick={() => navigate(`/tickets/${el.uuid}`)}
                  />
                );
              })}
              <PurchaseTicket
                isFirst={!(tickets.length > 0)}
                onClick={() => {
                  navigate('/ticketing/select');
                }}
              />
            </>
          )
        ) : (
          <>
            <TicketInfoSkeleton />
            <TicketInfoSkeleton />
          </>
        )}
      </Tickets>
    </Wrapper>
  );
};

export default MyReservedTicket;

const Wrapper = styled.div`
  & > h3 {
    width: 100%;
    padding: 0px 18px;
    color: ${({ theme }) => theme.palette.mono.font_sub};
    ${({ theme }) => theme.typo.text_18_M_lessSpacing};
  }

  & > h3 span {
    color: ${({ theme }) => theme.palette.mono.white};
  }
`;

const Tickets = styled.div`
  width: 100%;
  margin: 12px 0 48px 0;
  padding: 0 18px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  & > * {
    margin-left: 16px;
  }
  & > :first-child {
    margin: 0;
  }
  & > div {
    flex-shrink: 0;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
