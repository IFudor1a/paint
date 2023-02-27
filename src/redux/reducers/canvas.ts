import {ICanvas} from "../../models/ICanvas";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import canvas from "../../components/Canvas";
import {IPosts} from "../../models/IPosts";
import {stat} from "fs";
import {fetchUsers} from "./actionCreator";

interface postState {
    posts: IPosts[];
    isLoading: boolean;
    error: string;
    count: number;
}

const initialState: postState = {
    posts: [],
    isLoading: false,
    error: '',
    count: 0,
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.count += action.payload;
        },
        postsFetching(state, action: PayloadAction<IPosts>) {
            state.isLoading = true;
        },
        postsFetchingSuccess(state, action: PayloadAction<IPosts[]>) {
            state.isLoading = false;
            state.error = '';
            state.posts =action.payload;
        },
        postsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }

    },

    extraReducers: {
      [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IPosts[]>) => {
          state.isLoading = false;
          state.error = '';
          state.posts =action.payload;
      },
      [fetchUsers.pending.type]: (state, action: PayloadAction<IPosts[]>) => {
          state.isLoading = true;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default postSlice.reducer;