import { ValidRealtimeContentTypes } from "./content-types";

export * from "./content-types";

export const WS_REQ_SCHEMA_VERSION = 1

export type WSProtocol = {
  value: string,
  active: boolean
}

export type WSPayload = {
  contentType: ValidRealtimeContentTypes,
  body: string
}

export type HoppWSCommand = {
  id?: string
  v: number
  url: string
  protocols: WSProtocol[],
  payload: WSPayload,
}
