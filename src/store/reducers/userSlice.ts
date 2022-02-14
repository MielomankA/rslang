import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IUserState {
  user: IUser;
  isLoading: boolean;
  error: string;
}

const initialState: IUserState = {
  user: {
    id: 0,
    name: '',
    email: '',
  },
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'username',
  initialState,
  reducers: {
    addUsername: (state, action: PayloadAction<string>) => {
      state.user.name = action.payload;
    },
  },
});

export const { addUsername } = userSlice.actions;
export default userSlice.reducer;
