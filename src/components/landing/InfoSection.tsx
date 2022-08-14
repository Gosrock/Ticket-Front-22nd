import styled, { css } from 'styled-components';
import MarginContainer from './MarginContainer';

const InfoSection = ({ isPC }: { isPC: boolean }) => {
  return (
    <Wrapper isPC={isPC} id="info">
      <MarginContainer>
        <h1>공연 유의사항 안내</h1>
        <div>
          <h2>예매 & 입장 관련</h2>
          <ul>
            <li>
              티켓 발급후 인증한 전화번호로 티켓 url을 보내드립니다.
              <br />
              송신자 번호는 개인 전화번호이니 문의사항은 고스락 채널로 연락
              부탁드립니다
            </li>
            <li>
              티켓 구매시에 카카오톡 공유하기 기능을 통해 지인에게 티켓을 공유
              할 수 있습니다.
            </li>
            <li>
              티켓 주문 이후 환불이나 주문 취소를 원하시는 경우, 고스락 카카오톡
              채널로 연락 부탁드립니다.
            </li>
            <li>
              입금은 하루이내로 수동으로 확인되며, 마이페이지에서 입금 여부를
              확인할 수 있습니다.
            </li>
            <li>
              입장 시 QRcode를 통해 티켓의 유효 여부를 확인합니다. 입장 전
              발급된 QR티켓을 준비해 주세요.
            </li>
            <li>그외 문의사항은 고스락 카카오톡 채널로 연락 부탁드립니다.</li>
          </ul>
        </div>
        <div>
          <h2>공연 관련</h2>
          <ul>
            <li>
              실내에선 필히 마스크 착용을 부탁드립니다. 좌석은 스탠딩으로
              운영됩니다.
            </li>
            <li>
              드림홀 (09.01 YB 공연) : 코로나 수칙으로 인해 공연장 내 주류,
              식음료 반입이 불가합니다.
            </li>
            <li>
              얼라이브홀 (09.02 OB 공연) : 외부에서 주류, 식음료 등을 반입하실
              수 있습니다.
            </li>
          </ul>
        </div>
      </MarginContainer>
    </Wrapper>
  );
};

export default InfoSection;

const Wrapper = styled.div<{ isPC: boolean }>`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.palette.mono.white};
  color: ${({ theme }) => theme.palette.mono.black_00};
  ${({ isPC }) =>
    isPC
      ? css`
          padding-top: 180px;
          padding-bottom: 180px;
        `
      : css`
          padding-top: 120px;
          padding-bottom: 120px;
        `};

  h1 {
    ${({ isPC, theme }) =>
      isPC ? theme.typo.landing.title_48_B : theme.typo.landing.title_24_B}
  }
  h2 {
    ${({ theme }) => theme.typo.text_18_B}
    margin-top: 48px;
    margin-bottom: 12px;
  }
  ul {
    list-style: disc;
  }
  li {
    ${({ isPC, theme }) => (isPC ? theme.typo.text_14_M : theme.typo.text_12_M)}
    line-height: 200%;
    margin-left: 18px;
  }
`;
