export interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
  ticketId: (data: any) => void;
}

export interface ClientToServerEvents {
  hello: () => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  uuid: string;
  success: boolean;
  date: 'YB' | 'OB';
  ticketStatus: '입장완료' | '입금확인' | '확인대기' | '기한만료';
  message: string;
  name: string;
  phoneNumber: string;
  adminName: string;
}
