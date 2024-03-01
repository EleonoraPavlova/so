import { ResultCode, switchLoaderAC } from '../users/usersReducer'
import { setAppStatusAC, setSuccessAppAC } from '../appSlice/appSlice'
import { ProfileUserContactsType, ResponseProfileUserType, userProfileApi } from 'api/profileApi'
import { UserPhotosType } from 'api/usersApi'
import { AppRootState, AppThunk } from 'state/store'
import { handleServerAppError, handleServerNetworkError } from 'utils/error-utils'

export type SetProfileUser = ReturnType<typeof setProfileUserAC>
export type SetProfileUserStatus = ReturnType<typeof setProfileUserStatusAC>
export type UpdateProfileUser = ReturnType<typeof updateProfileUserAC>
export type UpdateProfileUserStatus = ReturnType<typeof updateProfileUserStatusAC>

type UserActionsType = SetProfileUser | SetProfileUserStatus | UpdateProfileUser | UpdateProfileUserStatus

export type ExtendedInitialStateType = ResponseProfileUserType & { status: string; aboutMe: string | null }

export const initialState: ExtendedInitialStateType = {
  userId: 0,
  lookingForAJob: false,
  lookingForAJobDescription: '',
  fullName: '',
  contacts: {} as ProfileUserContactsType,
  photos: {} as UserPhotosType,
  status: '',
  aboutMe: 'About me',
}

export const userProfileReducer = (
  state: ExtendedInitialStateType = initialState,
  action: UserActionsType
): ExtendedInitialStateType => {
  switch (action.type) {
    case 'GET-PROFILE-USER-STATUS':
      return { ...state, status: action.status }
    case 'UPDATE-PROFILE-USER-STATUS':
      return { ...state, status: action.status }
    case 'SET-PROFILE-USER':
      return {
        ...state,
        ...action.response,
        contacts: {
          ...action.response.contacts,
          facebook: action.response.contacts?.facebook || 'https://www.facebook.com',
          github: action.response.contacts?.github || 'https://github.com',
          instagram: action.response.contacts?.instagram || 'https://www.instagram.com',
          vk: action.response.contacts?.vk || 'https://vk.com',
          youtube: action.response.contacts?.youtube || 'https://www.youtube.com',
          twitter: action.response.contacts?.twitter || 'https://twitter.com',
          website: action.response.contacts?.website || 'https://www.asos.com/',
          mainLink: action.response.contacts?.mainLink || 'https://fontawesome.com',
        },
      }
    case 'UPDATE-PROFILE-USER':
      return { ...state, ...action.params }
    default:
      return state
  }
}

//actions
export const setProfileUserAC = (response: ResponseProfileUserType) => {
  return {
    type: 'SET-PROFILE-USER',
    response,
  } as const
}

export const setProfileUserStatusAC = (status: string) => {
  return {
    type: 'GET-PROFILE-USER-STATUS',
    status,
  } as const
}

export const updateProfileUserAC = (params: ResponseProfileUserType) => {
  return {
    type: 'UPDATE-PROFILE-USER',
    params,
  } as const
}

export const updateProfileUserStatusAC = (status: string) => {
  return {
    type: 'UPDATE-PROFILE-USER-STATUS',
    status,
  } as const
}

//thunk
export const getProfileUserTC =
  (userId: number, isLoader: boolean = false): AppThunk =>
  async (dispatch) => {
    dispatch(switchLoaderAC(!isLoader))
    dispatch(setAppStatusAC('loading'))
    try {
      const res = await userProfileApi.getProfileUser(userId)
      dispatch(setProfileUserAC(res.data))
      dispatch(getProfileUserStatusTC(userId))
      dispatch(setAppStatusAC('succeeded'))
    } catch (err) {
      handleServerNetworkError(err as { message: string }, dispatch)
    }
    dispatch(switchLoaderAC(isLoader))
  }

export const getProfileUserStatusTC =
  (userId: number, isLoader: boolean = false): AppThunk =>
  async (dispatch) => {
    dispatch(switchLoaderAC(!isLoader))
    dispatch(setAppStatusAC('loading'))
    try {
      const res = await userProfileApi.getProfileUserStatus(userId)
      dispatch(setProfileUserStatusAC(res.data))
      dispatch(setAppStatusAC('succeeded'))
    } catch (err) {
      handleServerNetworkError(err as { message: string }, dispatch)
    }
    dispatch(switchLoaderAC(isLoader))
  }

export const UpdateProfileUserTC =
  (params: ResponseProfileUserType, isLoader: boolean = false): AppThunk =>
  async (dispatch, getState: () => AppRootState) => {
    const state = getState()
    const meId = state.app.meId
    if (!meId) return

    dispatch(switchLoaderAC(!isLoader))
    dispatch(setAppStatusAC('loading'))

    const apiModel: ResponseProfileUserType = {
      ...params,
      userId: meId,
    }

    try {
      const res = await userProfileApi.updateProfileUser(apiModel)
      if (res.data.resultCode === ResultCode.SUCCEEDED) {
        dispatch(updateProfileUserAC(apiModel))
        dispatch(setSuccessAppAC('your profile was successfully updated'))
        dispatch(setAppStatusAC('succeeded'))
      } else {
        handleServerAppError(res.data, dispatch)
      }
    } catch (err) {
      handleServerNetworkError(err as { message: string }, dispatch)
    }
    dispatch(switchLoaderAC(isLoader))
  }

export const UpdateProfileUserStatusTC =
  (status: string, isLoader: boolean = false): AppThunk =>
  async (dispatch) => {
    dispatch(switchLoaderAC(!isLoader))
    dispatch(setAppStatusAC('loading'))
    try {
      const res = await userProfileApi.updateProfileUserStatus(status)
      if (res.data.resultCode === ResultCode.SUCCEEDED) {
        dispatch(updateProfileUserStatusAC(status))
        dispatch(setAppStatusAC('succeeded'))
      } else {
        handleServerAppError(res.data, dispatch)
      }
    } catch (err) {
      handleServerNetworkError(err as { message: string }, dispatch)
    }
    dispatch(switchLoaderAC(isLoader))
  }
