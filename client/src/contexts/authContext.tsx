import React, { useReducer, createContext } from "react";
import {jwtDecode} from "jwt-decode";

// Interface for the AuthContext value
interface AuthContextValue {
	user: User | null; // We can improve this type definition later
	login: (userData: LoginUserData) => void;
	logout: () => void;
  }
  interface User {
	id: string;
	name: string;
	// ... other user properties
  }
//   interface PartialUser {
// 	[key: string]: any; // Allows any properties
//   }
  
  // Interface for login user data (assuming it has a token property)
  interface LoginUserData {
	token: string;
	id: string ;
	name: string
  }


const initialState : AuthContextValue = {
	user: null,
	login: () => {}, // Placeholder function for login
  logout: () => {}, // Placeholder function for logout
};

if (localStorage.getItem("token")) {
	const decodedToken = jwtDecode(localStorage.getItem("token") as string ) as {exp: number, id: string, name:string  };

	
	if (decodedToken?.exp * 1000 < Date.now()) {
		localStorage.removeItem("token");
	} else {
		initialState.user = decodedToken;
	}
}

const AuthContext = createContext<AuthContextValue>(initialState)

	

function authReducer(state: AuthContextValue, action : LogoutAction | AuthAction): AuthContextValue {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				user: action.payload,
			};
		case "LOGOUT":
			return {
				...state,
				user: null,
			};

		default:
			return state;
	}
}
type LogoutAction = {
	type: "LOGOUT";
  };

type AuthAction = {
	type: "LOGIN" | "LOGOUT";
	payload: LoginUserData;
}

function AuthProvider(props: React.PropsWithChildren) {
	const [state, dispatch] = useReducer(authReducer, initialState);

	const login = (userData : LoginUserData) => {
		localStorage.setItem("token", userData.token);
		dispatch({
			type: "LOGIN",
			payload: userData,
		});
	};
	const logout = () => {
		localStorage.removeItem("token");
		dispatch({
			type: "LOGOUT",
			
		});
	};
	return (
		<AuthContext.Provider
			value={{ user: state.user, login, logout }}
            {...props}
		/> 

	);
}

export {AuthContext, AuthProvider}