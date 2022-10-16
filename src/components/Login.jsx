import { Client, Account } from "appwrite";
import { Outlet, Link } from "react-router-dom";
import back from '../img/back.png'

const appwrite = ()=>{

    const client = new Client();
  
    const account = new Account(client);
  
    client
        .setEndpoint('http://localhost/v1') // Your API Endpoint
        .setProject('6325af9026717524dc78') // Your project ID
    ;
  
    // Go to OAuth provider login page
    console.log(account);
    account.createOAuth2Session('google',"http://localhost:3000/dashboard", "http://localhost:3000/failure", []);
  }
  function Login() {
    
    return (
        <div className="bg-gradient-primary"  style={{height:"100vh"}}>

            <div className="container" style={{display: "flex", flexDirection: 'column', height: '90vh', justifyContent: 'center'}}>
                <div className="card o-hidden border-0 shadow-lg my-5"  style={{height:"66%"}}>
                    <div className="card-body p-0">
                        <div className="row" style={{height:'100%'}}>
                            <div className="col-lg-5 d-none d-lg-block bg-register-image" style={{background:`url(${back})`}}></div>
                            <div className="col-lg-7" style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                                <div className="p-5" style={{width:"100%"}}>
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                    </div>
                                    <form className="user">
                                        
                                        <hr />
                                        <a href="#" onClick={appwrite} className="btn-google btn btn-user btn-block">
                                            <i className="fa fa-google fa-fw"></i> Register with Google
                                        </a>
                                    
                                    </form>
                                    <hr />
                                
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
  }
  export default Login;
