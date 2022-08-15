import { useLocation, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import AppBar from '../../components/common/AppBar';
import SetMargin from '../../components/common/SetMargin';
import UtilityButton from '../../components/common/UtilityButton';
import QRCodeBox from '../../components/mypage/QRCodeBox';
import useGetTicket from '../../hooks/queries/useGetTicket';
import { authState } from '../../stores/auth';
import { ReactComponent as Locate } from '../../assets/icons/locate.svg';
import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import { ServerToClientEvents, SocketData } from '../../apis/type/socket';
import { useQueryClient } from 'react-query';
import useModal from '../../hooks/useModal';
import QRBottomSkeleton from '../../components/skeleton/QRBottomSkeleton';

const TicketQR = ({}) => {
  const auth = useRecoilValue(authState);
  const { ticketId } = useParams();
  const location = useLocation();
  console.log(location.state);
  const [socket, setSocket] = useState<Socket<ServerToClientEvents>>();
  const { openModal, closeModal } = useModal();
  const { data, status } = ticketId
    ? useGetTicket(ticketId)
    : { data: null, status: 'idle' };
  const queryClient = useQueryClient();

  useEffect(() => {
    const KAKAO_APP_KEY = `${process.env.REACT_APP_KAKAO_APP_KEY}`;
    if (!window.Kakao.isInitialized()) {
      // JavaScript key를 인자로 주고 SDK 초기화
      window.Kakao.init(KAKAO_APP_KEY);
      // SDK 초기화 여부를 확인하자.
      console.log(window.Kakao.isInitialized());
    }
  }, []);

  useEffect(() => {
    if (ticketId) {
      if (!socket) {
        setSocket(
          io('https://api.gosrock.band/socket/user', {
            auth: {
              ticketUuid: ticketId,
            },
          }),
        );
      } else {
        const ticketIdForSocket = ticketId as keyof ServerToClientEvents;
        socket.on(ticketIdForSocket, (data: SocketData) => {
          if (data.success) {
            console.log(data);
            queryClient.invalidateQueries(['ticket', `${ticketId}`]);
            queryClient.invalidateQueries('ticket');
          } else {
            console.log(data);
            if (data.message === '[입장실패]이미 입장 완료된 티켓입니다') {
              openModal({
                modalType: 'Notice',
                modalProps: {
                  onClick: () => {
                    closeModal();
                  },
                  type: '입장완료',
                },
              });
            } else if (
              data.message === '[입장실패] 공연 날짜가 일치하지 않습니다'
            ) {
              openModal({
                modalType: 'Notice',
                modalProps: {
                  onClick: () => {
                    closeModal();
                  },
                  type: '공연날짜',
                },
              });
            }
          }
        });
      }
    }
    console.log(socket);
  }, [socket]);

  const onShareButtonClick = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '고스락 티켓',
        description: `입금자명 : ${data?.data.user.name}\n관람일 : ${
          data?.data.date === 'YB' ? '9월 1일 목요일' : '9월 2일 금요일'
        }\n장소 : ${data?.data.date === 'YB' ? '드림홀' : '얼라이브홀'}`,
        imageUrl: 'https://gosrock.band', //TODO : 변경예정
        link: {
          mobileWebUrl: `https://gosrock.band/tickets/${ticketId}`,
          androidExecutionParams: 'test',
        },
      },
      buttons: [
        {
          title: '티켓 보기',
          link: {
            mobileWebUrl: `https://gosrock.band/tickets/${ticketId}`,
          },
        },
      ],
    });
  };

  const onChatButtonClick = () => {
    window.Kakao.Channel.chat({
      channelPublicId: '_QxeZBT',
    });
  };

  return (
    <Wrapper>
      {location.state ? <AppBar label="마이페이지" target="/mypage" /> : null}
      <div>
        <SetMargin>
          <TicketContainer>
            <QRContainer>
              <div>
                {data ? (
                  <QRCodeBox uuid={data.data.uuid} status={data.data.status} />
                ) : (
                  <>loading</>
                )}
              </div>
            </QRContainer>
            {status === 'success' && (
              <>
                <div>
                  <UtilityButton type={'share'} onClick={onShareButtonClick} />
                  <UtilityButton type={'kakao'} onClick={onChatButtonClick} />
                </div>
                <Notice>
                  <div className="left">
                    <p>
                      {data?.data.date === 'YB'
                        ? '9월 1일 목요일'
                        : '9월 2일 금요일'}
                    </p>
                    <div>
                      <Locate />
                      <p>
                        {data?.data.date === 'YB' ? '드림홀' : '얼라이브홀'}
                      </p>
                    </div>
                  </div>
                  <div className="right">
                    <div>
                      <p>티켓번호</p>
                      <p>#{data?.data.id}</p>
                    </div>
                    <div>
                      <p>입금자명</p>
                      <p>{data?.data.user.name}</p>
                    </div>
                  </div>
                </Notice>
              </>
            )}
          </TicketContainer>
          {status !== 'success' && <QRBottomSkeleton />}
        </SetMargin>
      </div>
    </Wrapper>
  );
};

export default TicketQR;

const Wrapper = styled.div`
  & > div:last-child {
    @keyframes slide {
      from {
        transform: translateY(80%);
      }
      to {
        transform: translateY(0%);
      }
    }
    animation: slide 0.5s ease;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100 - 80px);
    max-height: 600px;
    background-color: ${({ theme }) => theme.palette.mono.white};
    border-radius: 24px 24px 0px 0px;
    position: fixed;
    bottom: 0px;
    min-width: 320px;
    overflow-x: hidden;
  }
`;
const TicketContainer = styled.div`
  max-width: 375px;
  margin: 0 auto;
  & > div:nth-child(2) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
  }
`;

const QRContainer = styled.div`
  margin: 18px 0;
  border-radius: 24px;
  height: 300px;
  background-color: ${({ theme }) => theme.palette.mono.font_main};

  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 250px;
    height: 250px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.palette.mono.white};

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Notice = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  margin: 28px 12px 0px 12px;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > p {
      ${({ theme }) => theme.typo.text_18_B}
      color: ${({ theme }) => theme.palette.mono.black_00};
    }
    & > div {
      display: flex;
      align-items: center;
      flex-direction: ${({ theme }) => theme.typo.text_14_M};
      color: ${({ theme }) => theme.palette.mono.font_sub};

      svg {
        margin-right: 4px;
        margin-top: 1px;
      }
    }
  }

  .right {
    display: flex;
    ${({ theme }) => theme.typo.text_14_M}
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & > p:first-child {
        color: ${({ theme }) => theme.palette.mono.font_sub};
      }
      & > p:last-child {
        color: ${({ theme }) => theme.palette.mono.black_12};
      }
      margin-left: 24px;
    }
  }
`;
