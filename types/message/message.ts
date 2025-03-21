import type { Payload, RoomPayload } from "./payload";

interface Action<T = string> {
  handler: T;
  type: string;
}

/**
 * Message
 * WebSocketを通じて送信されるJSONオブジェクトの形式を定義しています。
 * @param action.handler payloadを処理させる対象を 'server' 'room' 'core' のいずれかで指定します。
 * @param action.type payloadを処理するタイプを指定します。
 * @param payload 処理内容を記述します。
 */
interface BaseMessage<T = Payload> {
  action: Action;
  payload: T;
}

export interface RoomMessage extends BaseMessage<RoomPayload> {
  action: Action<'room'>
}

export interface ServerMessage<T = Payload> extends BaseMessage<T> {
  action: Action<'server'>
}

export interface CoreMessage<T = Payload> extends BaseMessage<T> {
  action: Action<'core'>
}

export interface ClientMessage<T = Payload> extends BaseMessage<T> {
  action: Action<'client'>
}

export type Message<T = Payload> = RoomMessage | ServerMessage<T> | CoreMessage<T> | ClientMessage<T>