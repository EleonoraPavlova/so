import { AnyAction, applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { dialogsPageReducer } from "src/state/reducers/dialogs/dialogsPageReducer";
import { friendsPageReducer } from "src/state/reducers/friends/friendsPageReducer";
import { profilePageReducer } from "src/state/reducers/profile/profilePageReducer";
import { usersReducer } from "src/state/reducers/users/usersReducer";

//обязательно Provider в App
//одельный reducer отвечает за каждую ветку

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  //все dispatch приходят в rootReducer, а он самостоятельно раскидывает их
  //по нужным напрвлениям
  dialogsPage: dialogsPageReducer,
  profilePage: profilePageReducer,
  friendsPage: friendsPageReducer,
  usersPage: usersReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AnyAction> //будет приниматься любой action


//@ts-ignore
window.store = store

