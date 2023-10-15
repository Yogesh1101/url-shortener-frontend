import React from "react";

// This is the Home component where the instruction or step to use this task.
function Home() {
  return (
    <div className="mt-5 container">
      <h1 className="text-center mb-5">URL Shortener Task</h1>
      <h6 className="text-center">
        Develop a URL shortening web Application with Frontend and Backend.
      </h6>
      <p className="mt-5">
        <b>1. What is URL shortening?</b> <br></br>
        <b>-{">"} </b>URL shortening is a required page. This is achieved by
        using a redirect which links to the web page that technique on the World
        Wide Web in which a Uniform Resource Locator may be made substanilly
        shorter and still direct to these long URL.
        <br></br>
        <b>2. The Task Work Flow</b>
        <br></br>
        <b>-{">"} </b>Read this work flow for your reference.<br></br>
        <b>-{">"} </b>Go to Login Page, Login with email and password<br></br>
        <b>-{">"} </b>If the user is not exists, Create user in the signup page
        with all given details.<br></br>
        <b>-{">"} </b>A Activation Link will be sent to the given email and
        click the link in email to activate the account.<br></br>
        <b>-{">"} </b>Once after activation, login with the same email and
        password. Note - Only the activated users only can able to login.
        <br></br>
        <b>-{">"} </b>If the user can't remember the password use Forgot
        Password Option to reset the password.<br></br>
        <b>-{">"} </b>Enter your email in the Forgot Password page and a link is
        sent to the given email.<br></br>
        <b>-{">"} </b>Once the link is clicked, it verifies the user and
        redirect to reset password page.<br></br>
        <b>-{">"} </b>Enter the new password and conform password. The new
        password is updated and now the user can able to login with the same
        email and new password.<br></br>
        <b>-{">"} </b>After only the Success of login it redirects to the URL
        Shortener Page where user can enter the long url.<br></br>
        <b>-{">"} </b>It auto generates a short URL Link which is used to
        navigate to the same page of long URL.<br></br>
        <b>-{">"} </b>It also shows the number of clicks when the user clicked
        the short URL.<br></br>
      </p>
    </div>
  );
}

export default Home;
