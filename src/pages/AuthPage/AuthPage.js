// AuthPage.js

import SignUpForm from "../../components/SignUpForm/SignUpForm"

export default function AuthPage(props){
    return(
        <main>
            <h1>Auth Page</h1>
            <SignUpForm setUser={props.setUser}/>
        </main>
    )
}
