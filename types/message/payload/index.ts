import type { PlayerEntryPayload } from "./room";
import type { RoomOpenRequestPayload, RoomOpenResponsePayload } from "./server";

export type Payload = RoomOpenRequestPayload | RoomOpenResponsePayload | PlayerEntryPayload