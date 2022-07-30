const TicketMockApi = {
  // 해당 uuid에 해당하는 티켓 불러오기
  getTicketMock: async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return {
      id: 0,
      uuid: 'string',
      date: 'YB',
      status: '입장완료',
      admin: {
        id: 0,
        name: 'string',
        phoneNumber: 'string',
        role: 'User',
      },
      user: {
        id: 0,
        name: 'string',
        phoneNumber: 'string',
        role: 'User',
      },
      createdAt: '2022-07-27T03:18:09.469Z',
    };
  },

  // 모든 티켓 불러오기
  getTicketsMock: async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return [
      {
        id: 0,
        uuid: '0',
        date: 'YB',
        status: '입금확인',
        admin: {
          id: 0,
          name: 'string',
          phoneNumber: 'string',
          role: 'User',
        },
        user: {
          id: 0,
          name: 'string',
          phoneNumber: 'string',
          role: 'User',
        },
        createdAt: '2022-07-27T03:18:09.469Z',
      },
      {
        id: 1,
        uuid: '1',
        date: 'YB',
        status: '입장완료',
        admin: {
          id: 0,
          name: 'string',
          phoneNumber: 'string',
          role: 'User',
        },
        user: {
          id: 0,
          name: 'string',
          phoneNumber: 'string',
          role: 'User',
        },
        createdAt: '2022-07-27T03:18:09.469Z',
      },
      {
        id: 2,
        uuid: '2',
        date: 'OB',
        status: '확인대기',
        admin: {
          id: 0,
          name: 'string',
          phoneNumber: 'string',
          role: 'User',
        },
        user: {
          id: 0,
          name: 'string',
          phoneNumber: 'string',
          role: 'User',
        },
        createdAt: '2022-07-27T03:18:09.469Z',
      },
      {
        id: 3,
        uuid: '3',
        date: 'YB',
        status: '기한만료',
        admin: {
          id: 0,
          name: 'string',
          phoneNumber: 'string',
          role: 'User',
        },
        user: {
          id: 0,
          name: 'string',
          phoneNumber: 'string',
          role: 'User',
        },
        createdAt: '2022-07-27T03:18:09.469Z',
      },
    ];
  },
};

export default TicketMockApi;
