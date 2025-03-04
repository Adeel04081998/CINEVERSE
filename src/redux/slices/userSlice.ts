import { User } from '@custom-types/User'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UserState = {
    user: User | null
}
var initialState: UserState = {
    user: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload
        },
        deleteUser(state) {
            state.user = null
        },
    },
})

export const { setUser, deleteUser } = userSlice.actions

export default userSlice.reducer
