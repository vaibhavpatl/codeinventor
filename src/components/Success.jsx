import React from 'react'
import { Client, Account } from "appwrite";

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

function Success() {
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
  }, function (error) {
      console.log(error); // Failure
  });

  return (
    <div>Success</div>
  )
}

export default Success