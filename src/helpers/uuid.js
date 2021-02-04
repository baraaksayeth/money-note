import uuid from "uuid";

export default function generateUUID(v) {
  return uuid[v]();
}
