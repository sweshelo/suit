import { 
  createMessage, 
  createMessageFromActionType
} from '../types/message/message';
import type { 
  Message, 
  HandlerType,
  ActionType
} from '../types/message/message';
import type { 
  RoomOpenRequestPayload, 
  RoomOpenResponsePayload,
  PlayerEntryPayload
} from '../types/message/payload';

/**
 * 例1: Message<RoomOpenRequestPayload>を使用した場合
 * ジェネリックパラメータでペイロードの型を指定
 */
const example1: Message<RoomOpenRequestPayload> = {
  action: {
    handler: 'server',
    type: 'open'
  },
  payload: {
    type: 'RoomOpenRequest',
    name: 'Game Room',
    requestId: '123'
  }
};

// payload.typeに基づいて型が推論される
function processMessage(message: Message) {
  if (message.payload.type === 'RoomOpenRequest') {
    // この中ではmessage.payloadはRoomOpenRequestPayloadとして推論される
    console.log(message.payload.name);  // OK
    console.log(message.payload.requestId);  // OK
  } else if (message.payload.type === 'PlayerEntry') {
    // この中ではmessage.payloadはPlayerEntryPayloadとして推論される
    console.log(message.payload.player.name);  // OK
    console.log(message.payload.roomId);  // OK
  }
}

/**
 * 例2: createMessage関数を使用した場合
 * 型安全なメッセージ作成
 */
const example2 = createMessage({
  action: {
    handler: 'server',
    type: 'open'
  },
  payload: {
    type: 'RoomOpenRequest',
    name: 'Game Room',
    requestId: '123'
  }
});

/**
 * 例3: createMessageFromActionType関数を使用した場合
 * アクションタイプからペイロードタイプを自動的に設定
 */
const example3 = createMessageFromActionType({
  action: {
    handler: 'server',
    type: 'open'
  },
  payload: {
    name: 'Game Room',
    requestId: '123'
  }
});
// example3.payload.typeは'RoomOpenRequest'として自動的に設定される

/**
 * 例4: レスポンスメッセージの作成
 */
const example4: Message<RoomOpenResponsePayload> = {
  action: {
    handler: 'client',
    type: 'response'
  },
  payload: {
    type: 'RoomOpenResponse',
    requestId: '123',
    roomId: 'room-1',
    result: true
  }
};

/**
 * 例5: 型推論を活用した関数
 */
function handleRoomOpenRequest(message: Message<RoomOpenRequestPayload>) {
  const roomId = 'generated-room-id';
  
  // レスポンスメッセージを作成
  const response: Message<RoomOpenResponsePayload> = {
    action: {
      handler: 'client',
      type: 'response'
    },
    payload: {
      type: 'RoomOpenResponse',
      requestId: message.payload.requestId,
      roomId,
      result: true
    }
  };
  
  return response;
}

/**
 * 例6: as constを使用した型推論
 */
const example6 = {
  action: {
    handler: 'server' as const,
    type: 'open' as const
  },
  payload: {
    type: 'RoomOpenRequest' as const,
    name: 'Game Room',
    requestId: '123'
  }
};
// example6の型は自動的に推論される
