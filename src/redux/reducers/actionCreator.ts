import {AppDispatch} from "../index";
import axios from "axios";
import {IPosts} from "../../models/IPosts";
import {postSlice} from "./canvas";
import {createAsyncThunk} from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(postSlice.actions.postsFetching)
//         const response = await axios.get<IPosts[]>("https://jsonplaceholder.typicode.com/posts2")
//         dispatch(postSlice.actions.postsFetchingSuccess(response.data))
//     } catch (e) {
//         // @ts-ignore
//         dispatch(postSlice.actions.postsFetchingError(e.message))
//     }
// }


export const fetchUsers = createAsyncThunk(
    'post/fetchAll',
    async (_, thunkAPI) => {
        const response = await axios.get<IPosts[]>("https://jsonplaceholder.typicode.com/posts")
        return response.data
    }

)