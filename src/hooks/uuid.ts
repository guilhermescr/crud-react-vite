import { v4 as uuidv4 } from 'uuid';

export function getRandomID(): string {
  return uuidv4();
}
