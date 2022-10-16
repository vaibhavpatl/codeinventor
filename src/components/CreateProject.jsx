import React from 'react'
import { useEffect } from 'react'
import { Client, Databases } from "appwrite";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
   
    boxShadow: 24,
    p: 4,
  };
function CreateProject({
    type,
    email
}) {
    let [project, setProject] = useState('')
    let nav = useNavigate()
    const update = () => {

        const client = new Client();

        const databases = new Databases(client);

        client
            .setEndpoint('http://localhost/v1') // Your API Endpoint
            .setProject('6325af9026717524dc78') // Your project ID
        ;

        const promise = databases.updateDocument('6325d764532e56ed39ec', '632604a8e88548194e0c', '6325fe3f51ffc9e15b9a_asdad', {
            data: 'asdad'
        });

        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });
    }
    const submitData = () => {
        const client = new Client();

        const databases = new Databases(client);

        client
            .setEndpoint('http://localhost/v1') // Your API Endpoint
            .setProject('6325af9026717524dc78') // Your project ID
        ;

        const promise = databases.createDocument('6325d764532e56ed39ec', '632604a8e88548194e0c', `${email}_${project}`, {
            data: "",
            owner: email,
            type: type,
            name: project
        });

        promise.then(function (response) {
            console.log(response); // Success
            if(type==='software'){
                window.location="http://localhost:3000/static/blockly-master?id="+`${email}_${project}`
            }else{
                window.location="http://localhost:3000/hardware/BlocklyDuino-gh-pages/blockly/apps/blocklyduino/index.html?id="+`${email}_${project}`
            }

            // return nav('/static/blockly-master')
        }, function (error) {
            console.log(error); // Failure
            return nav('/error404')
        });
    }
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
        <>
        {/* <div className='card shadow-lg d-flex p-5' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <div className='mb-3'>
                <label for="exampleInputEmail1" class="form-label">Project Name</label>
                <input type="email" className="form-control" value={project} id="exampleInputEmail1" onChange={(e) => {setProject(e.target.value)}} aria-describedby="emailHelp" />
            </div>
            <div className='mb-3'>
                <button className='btn btn-primary' onClick={submitData}>Submit</button>
            </div>
        </div>
        <div> */}
      <Button onClick={handleOpen} style={{fontSize:'1em'}}> Start</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className='mb-3'>
                <label for="exampleInputEmail1" class="form-label">Project Name</label>
                <input type="email" className="form-control" value={project} id="exampleInputEmail1" onChange={(e) => {setProject(e.target.value)}} aria-describedby="emailHelp" />
            </div>
            <div className='mb-3'>
                <button className='btn btn-primary' onClick={submitData}>Submit</button>
            </div>
        </Box>
      </Modal>
    {/* </div> */}
        </>
        
    )
}

export default CreateProject