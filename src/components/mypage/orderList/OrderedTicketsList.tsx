import OrderedTicket from './OrderedTicket';
import OrderedTicketSkeleton from '../../skeleton/OrderedTicketSkeleton';
import { convertDate } from '../../../utils/convertDate';
import { IOrder } from '../../../apis/type/order';
import styled from 'styled-components';

interface IOrderedTicketsList {
  status: string;
  orders: IOrder[] | undefined;
}
const OrderedTicketsList = ({ status, orders }: IOrderedTicketsList) => {
  return (
    <List>
      {status === 'success' ? (
        !!orders &&
        orders.map((el: IOrder) => {
          const { Year, Month, Day, DayKR } = convertDate(el.createdAt);
          return (
            <OrderedTicket
              key={el.id}
              status={el.status}
              createdat={`${Year}.${Month}.${Day} (${DayKR})`}
              id={el.id}
              selection={el.selection}
              ticketCount={el.ticketCount}
            ></OrderedTicket>
          );
        })
      ) : (
        <>
          <OrderedTicketSkeleton />
          <OrderedTicketSkeleton />
        </>
      )}
    </List>
  );
};

export default OrderedTicketsList;

const List = styled.div`
  padding-bottom: 16px;
  & > * {
    margin-top: 16px;
  }
`;
