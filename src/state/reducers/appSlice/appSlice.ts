import { ResultCode } from '../users/usersReducer'
import { authApi } from 'api/authApi'
import { handleServerAppError, handleServerNetworkError } from 'utils/error-utils'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed' //server interaction status

export type InitialStateType = {
  statusApp: RequestStatusType
  error: string | null
  success: string | null
  initialized: boolean
  meId: number | null
}

export const appInitialStatusState: InitialStateType = {
  statusApp: 'idle',
  error: null,
  success: null,
  initialized: false, //(проверка куки, настроек пользователя)
  meId: null,
}

export const setAppInitializeTC = createAsyncThunk(
  'app/appInitialize',
  async (params, { dispatch, rejectWithValue }) => {
    dispatch(setAppStatusAC({ statusApp: 'loading' }))
    try {
      const res = await authApi.authMe()
      // анонимный пользователь или авториз
      if (res.data.resultCode === ResultCode.SUCCEEDED) {
        // dispatch(setIsLoggedInAC(true))
        dispatch(setMeIdAC({ meId: res.data.data.id }))
        dispatch(setAppStatusAC({ statusApp: 'succeeded' }))
      } else {
        handleServerAppError(res.data, dispatch)
      }
      return
    } catch (err: unknown) {
      const error: AxiosError = err as AxiosError
      handleServerNetworkError(error as { message: string }, dispatch)
      return rejectWithValue(null)
    }
  }
)

const appSlice = createSlice({
  name: 'app',
  initialState: appInitialStatusState,
  reducers: {
    setAppStatusAC(state, action: PayloadAction<{ statusApp: RequestStatusType }>) {
      state.statusApp = action.payload.statusApp
    },
    setAppErrorAC(state, action: PayloadAction<{ error: string | null }>) {
      state.error = action.payload.error
    },
    setAppSuccessAC(state, action: PayloadAction<{ success: string | null }>) {
      state.success = action.payload.success
    },
    setMeIdAC(state, action: PayloadAction<{ meId: number | null }>) {
      state.meId = action.payload.meId
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setAppInitializeTC.fulfilled, (state) => {
      state.initialized = true
    })
  },
  selectors: {
    selectAppStatus: (sliceState) => sliceState.statusApp,
    selectAppError: (sliceState) => sliceState.error,
    selectAppSuccess: (sliceState) => sliceState.success,
    selectAppInitialized: (sliceState) => sliceState.initialized,
    selectAppMeId: (sliceState) => sliceState.meId,
  },
})

export const appReducer = appSlice.reducer
export const { setAppStatusAC, setAppErrorAC, setAppSuccessAC, setMeIdAC } = appSlice.actions
export const { selectAppStatus, selectAppError, selectAppSuccess, selectAppInitialized, selectAppMeId } =
  appSlice.selectors

// export const setInitializeAppTC = (): AppThunk => async (dispatch) => {
//   dispatch(setAppStatusAC('loading'))
//   try {
//     const res = await authApi.authMe()
//     // анонимный пользователь или авториз
//     if (res.data.resultCode === ResultCode.SUCCEEDED) {
//       dispatch(setIsLoggedInAC(true))
//       dispatch(setMeIdAC(res.data.data.id))
//       dispatch(setAppStatusAC('succeeded'))
//     } else {
//       handleServerAppError(res.data, dispatch)
//     }
//   } catch (err) {
//     handleServerNetworkError(err as { message: string }, dispatch)
//   } finally {
//     dispatch(setInitializeAppAC(true))
//   }
// }
