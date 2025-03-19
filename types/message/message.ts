import type { Payload } from "./payload";

/**
 * Message
 * WebSocketを通じて送信されるJSONオブジェクトの形式を定義しています。
 * @param action.handler payloadを処理させる対象を 'server' 'room' 'core' のいずれかで指定します。
 * @param action.type payloadを処理するタイプを指定します。
 * @param payload 処理内容を記述します。
 */
export interface Message<T = Payload> {
  action: {
    handler: string;
    type: string;
  };
  payload: T;
}