import { GetAddtocart } from '../../models/get-addtocart';

export interface AdminDashState {
  data: GetAddtocart[];
  error: string | null;
  loading: boolean;
}

export const initialState: AdminDashState = {
  data: [],
  error: null,
  loading: false,
};
