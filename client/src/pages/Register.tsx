import { useContext, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import { useForm } from "../utils/hooks";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "graphql-tag";
import { useNavigate } from "react-router-dom";
import {
	TextField,
	Button,
	Stack,
	Alert,
	Container,
} from "@mui/material";

interface RegisterInput {
	username?: string;
	email?: string;
	password?: string;
	confirmPassword?: string;
}

interface RegisterUserResponse {
	registerUser: {
		email?: string;
		username?: string;
		token?: string;
	};
}

const REGISTER_USER = gql`
	mutation Mutation($registerInput: RegisterInput) {
		registerUser(registerInput: $registerInput) {
			email
			userName
			token
		}
	}
`;

function Register(props) {
	const context = useContext(AuthContext);
	const navigate = useNavigate();
	const [errors, setErrors] = useState({});

	function registerUserCallback() {
		console.log("Callback Hit");
		registerUser();
	}

	const { onChange, onSubmit, values } = useForm(registerUserCallback, {
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	function Register(props){
		const navigate = useNavigate();
		const [errors, setErrors] = useState([]);


		const [registerUser, {loading}]= useMutation(REGISTER_USER, {
			update(proxy, {data:{registerUser: userData}}){
				context.login(userData);
				navigate('/')
			},
			onError({graphQLErrors}){
				// setErrors(graphQLErrors[0].extensions.errors);
				setErrors(graphQLErrors);
			},
			variables: {registerInput: values}
		})
	}

	

	
	return (
		<>
			<Container spacing={2} maxWidth="sm">
				<h3>Register</h3>
				<p>
					This is the register page, register below to create an
					account!
				</p>
				<Stack spacing={2} paddingBottom={2}>
					<TextField
						label="Username"
						name="username"
						onChange={onChange}
					/>
					<TextField label="Email" name="email" onChange={onChange} />
					<TextField
						label="Password"
						name="password"
						onChange={onChange}
					/>
					<TextField
						label="Confirm Password"
						name="confirmPassword"
						onChange={onChange}
					/>
				</Stack>
				{errors?.map(function (error){
					return (
						<Alert severity="error" key={error}>
							{error.message}
						</Alert>
					);
				})}
				<Button variant="contained" onClick={onSubmit}>
					Register
				</Button>
			</Container>
		</>
	);
}
export default Register;
