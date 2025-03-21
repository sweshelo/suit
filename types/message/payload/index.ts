import type { PlayerEntryPayload } from "./room";
import type { RoomOpenRequestPayload, RoomOpenResponsePayload } from "./server";

export type * from "./base";
export type * from "./room";
export type * from "./server";

export type Payload = RoomOpenRequestPayload | RoomOpenResponsePayload | PlayerEntryPayload