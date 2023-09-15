import { createSlice } from "@reduxjs/toolkit";

const IME = {
    id: "",
    userId: "",
    name: "",
    phoneNumber: "",
    address: "",
    email: "",
    birth: "",
    profileImage: "",
    sellerName: "",
    sellerNumber: ""
};

export const MeSlice = createSlice({
    name: "me",
    initialState: { ...IME },
    reducers: {
        setState: (state, { payload }) => {
            state.token = payload.data;
        },
        setMe: (state, { payload }) => {
            state.id = payload.id;
            state.userId = payload.userId;
            state.name = payload.name;
            state.phoneNumber = payload.phoneNumber;
            state.address = payload.address;
            state.email = payload.email;
            state.birth = payload.birth;
            state.profileImage = payload.profileImage;
            state.sellerName = payload.sellerName;
            state.sellerNumber = payload.sellerNumber;
        }
    },
});

export const { setState, setMe } = MeSlice.actions;

export default MeSlice.reducer;