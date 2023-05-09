import { configureStore, createSlice } from "@reduxjs/toolkit";

const loginModal = createSlice({
  name: "loginModal",
  initialState: false,
  reducers: {
    setLoginModal: (state) => {
      return !state;
    },
  },
});

const joinModal = createSlice({
  name: "joinModal",
  initialState: false,
  reducers: {
    setJoinModal: (state) => {
      return !state;
    },
  },
});

const passwordModal = createSlice({
  name: "passwordModal",
  initialState: false,
  reducers: {
    setPasswordModal: (state) => {
      return !state;
    },
  },
});

export const { setLoginModal } = loginModal.actions;
export const { setJoinModal } = joinModal.actions;
export const { setPasswordModal } = passwordModal.actions;

export default configureStore({
  reducer: {
    loginModal: loginModal.reducer,
    joinModal: joinModal.reducer,
    passwordModal: passwordModal.reducer,
  },
});
