import React from 'react'

function Register() {
  return (
            <div className="bg-gradient-primary"  style={{height:"100vh"}}>

            <div className="container" style={{display: "flex", flexDirection: 'column', height: '90vh', justifyContent: 'center'}}>
                <div className="card o-hidden border-0 shadow-lg my-5"  style={{height:"66%"}}>
                    <div className="card-body p-0">
                        <div className="row" style={{height:'100%'}}>
                            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                            <div className="col-lg-7" style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                                <div className="p-5" style={{width:"100%"}}>
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                    </div>
                                    <form className="user">
                                        
                                        <hr />
                                        <a className="btn btn-google btn-user btn-block">
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
  )
}

export default Register