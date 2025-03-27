import type { SyncPayload } from './client'
import type { DebugDrawPayload } from './core'
import type { PlayerEntryPayload } from './room'
import type { RoomOpenRequestPayload, RoomOpenResponsePayload } from './server'

export type * from './base'
export type * from './room'
export type * from './server'
export type * from './client'
export type * from './core'

export type Payload = RoomOpenRequestPayload | RoomOpenResponsePayload | PlayerEntryPayload | SyncPayload | DebugDrawPayload
