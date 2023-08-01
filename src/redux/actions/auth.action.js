import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase.js";
import * as actionTypes from "../actionType.js";

// using thunk to get the dispatch in this action for async operations
export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.LOGIN_REQUEST,
    });

    const provider = new GoogleAuthProvider();

    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");

    const response = await signInWithPopup(auth, provider);

    console.log(response);
    const accessToken = response._tokenResponse.oauthAccessToken;

    const profile = {
      name: response._tokenResponse.displayName,
      photoURL: response._tokenResponse.photoUrl,
    };

    sessionStorage.setItem("ytc-access-token", accessToken);
    sessionStorage.setItem("ytc-user", JSON.stringify(profile));

    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispatch({
      type: actionTypes.LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  await signOut(auth);

  dispatch({
    type: actionTypes.LOG_OUT,
  });

  sessionStorage.removeItem("ytc-access-token");
  sessionStorage.removeItem("ytc-user");
};
