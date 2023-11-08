import { FAILURE, LOADING, SUCCESS } from './common';

export interface IRootState {
  Status: Record<string, LOADING | SUCCESS | FAILURE>;
}
