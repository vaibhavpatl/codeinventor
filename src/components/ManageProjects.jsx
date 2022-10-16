import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { Client, Account, Databases, Query } from "appwrite";
import {useNavigate} from 'react-router-dom'
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }
function ManageProjects() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [id, setID] = useState('')
    const [projects, setProjects] = useState([])

    let navigate = useNavigate()

    useEffect(() => {
        const client = new Client();

        const account = new Account(client);
        
        client
            .setEndpoint('http://localhost/v1') // Your API Endpoint
            .setProject('6325af9026717524dc78') // Your project ID
        ;
        
        const promise = account.get();
        
        promise.then(function (response) {
            console.log(response); // Success
            setCookie('email', response.email)
            setName(response.name)
            setEmail(response.email)
            setID(response['$id'])

        }, function (error) {
            console.log(error); // Failure
            return navigate('/login')

        });
    
    
    }, [])

    useEffect(() => {
        if (!email || email == '') return

        const client = new Client();

        const databases = new Databases(client);

        client
            .setEndpoint('http://localhost/v1') // Your API Endpoint
            .setProject('6325af9026717524dc78') // Your project ID
        ;

        const promise = databases.listDocuments('6325d764532e56ed39ec', '632604a8e88548194e0c', [
            Query.equal('owner', id)
        ]);

        promise.then(function (response) {
            console.log(response); // Success
            setProjects(response.documents)
        }, function (error) {
            console.log(error); // Failure
        });
    }, [id])

  return (
    <div id='page-top'>
            <div id="wrapper">

                <ul className="navbar-nav bg-dark sidebar sidebar-dark accordion" id="accordionSidebar">

                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div class="sidebar-brand-icon rotate-n-15">
                        <i class="fa fa-laugh-wink"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">CodeInventor</div>
                </a>


                    <hr className="sidebar-divider my-0" />

                    <li className="nav-item active">
                        <Link className="nav-link" to="/dashboard">
                            <i className="fa fa-fw fa-plus"></i>
                            <span>Create Project</span></Link>
                        <Link className="nav-link" to="/manage">
                            <i className="fa fa-fw fa-tasks"></i>
                            <span>Manage Project</span></Link>
                    </li>

                </ul>
                <div id="content-wrapper" className="d-flex flex-column">

                    <div id="content">

                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                <i className="fa fa-bars"></i>
                            </button>

                            <form
                                className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                        aria-label="Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <i class="fa fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item dropdown no-arrow d-sm-none">
                                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-search fa-fw"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                        aria-labelledby="searchDropdown">
                                        <form className="form-inline mr-auto w-100 navbar-search">
                                            <div className="input-group">
                                                <input type="text" className="form-control bg-light border-0 small"
                                                    placeholder="Search for..." aria-label="Search"
                                                    aria-describedby="basic-addon2" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="button">
                                                    {/* <Search/> */}
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>




                                <div className="topbar-divider d-none d-sm-block"></div>

                                <li className="nav-item dropdown no-arrow">
                                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{name ? name : ''}</span>
                                        {/* <img className="img-profile rounded-circle"
                                            src="img/undraw_profile.svg" /> */}
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="userDropdown">
                                        <a className="dropdown-item" href="#">
                                            <i className="fa fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Profile
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="fa fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Settings
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="fa fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Activity Log
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" style={{cursor:'pointer'}} href="#" data-toggle="modal" data-target="#logoutModal">
                                            <i className="fa fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Logout
                                        </a>
                                    </div>
                                </li>

                            </ul>

                        </nav>
                        <div className="container-fluid">

                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                {/* <h1 className="h3 mb-0 text-gray-800">BLOCKODING</h1> */}

                            </div>

                            <div className="row">

                                {
                                    projects.map(p => {
                                        return (    
                                            <div className="col-xl-3 col-md-6 mb-4">
                                                <div className="card border-left-primary shadow h-100 py-2">
                                                    <div className="card-body">
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col mr-2">
                                                                <div className="text-lg font-weight-bold text-primary text-uppercase mb-1">
                                                                    {p.name}</div>
                                                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                                    {p.type}</div>
                                                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                                    {p.type==='hardware'?
                                                                        <a href={`/hardware/BlocklyDuino-gh-pages/blockly/apps/blocklyduino/index.html?id=${p['$id']}`}>Edit <i className="fa fa-fw fa-arrow-right"></i></a>:
                                                                        <a href={`/static/blockly-master/index.html?id=${p['$id']}`}>Edit <i className="fa fa-fw fa-arrow-right"></i></a>}
                                                                    {/* <CreateProject type={'software'} email={id}/> */}

                                                                </div>
                                                            </div>
                                                            {/* <div className="col-auto">
                                                                <i className="fa fa-calendar fa-2x text-gray-300"></i>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                        </div>

                    </div>
                </div>
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fa fa-angle-up"></i>
                </a>

                <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a className="btn btn-primary" href="login.html">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
  )
}

export default ManageProjects