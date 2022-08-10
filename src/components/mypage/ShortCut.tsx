import styled from 'styled-components';
import { ReactComponent as Home } from '../../assets/icons/home.svg';
import { ReactComponent as ChevronRight } from '../../assets/icons/chevronRight.svg';
import { ReactComponent as ChatHeart } from '../../assets/icons/chatHeart.svg';
import { ReactComponent as Cart } from '../../assets/icons/cart.svg';

interface IShortCut {
  type: 'talk' | 'mainPage' | 'orderList';
  onClick: () => void;
}

const ShortCut = ({ type, onClick }: IShortCut) => {
  return (
    <Wrapper onClick={onClick}>
      <div>
        {type === 'talk' ? (
          <>
            <ChatHeart
              style={{ padding: '1px', transform: 'translate3d(0,1px,0)' }}
            />
            <p>고스락 응원톡</p>
          </>
        ) : type === 'mainPage' ? (
          <>
            <Home />
            <p>메인페이지</p>
          </>
        ) : (
          <>
            <Cart />
            <p>내 주문 목록</p>
          </>
        )}
      </div>
      <ChevronRight></ChevronRight>
    </Wrapper>
  );
};
export default ShortCut;

const Wrapper = styled.div`
  width: calc(100% - 36px);
  margin: 12px 18px 0px 18px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;

  background: ${({ theme }) => theme.palette.mono.black_26};
  border-radius: 12px;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  & p {
    ${({ theme }) => theme.typo.text_14_M};
    color: ${({ theme }) => theme.palette.mono.white_fa};
    margin-left: 12px;
  }
`;
