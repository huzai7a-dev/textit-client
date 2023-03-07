export interface Ilogin {
    email: String,
    password:String,
}

export interface ISignUp extends Ilogin{
    firstName: String,
    lastName: String,
    confirmPassword:String,
}