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
        <b>-{">"} </b>Login with your email and password.<br></br>
        <b>-{">"} </b>If the user is not exist Signup with your email and
        password to create. The Email Activation link is sent to your email
        provided.<br></br>
        <b>-{">"} </b>Click the link and click the button to activate the email
        and it redirect to login page.<br></br>
        <b>-{">"} </b>After successful of Signup, Login with same email and
        password.<br></br>
        <b>-{">"} </b>If the user password is incorrect and cannot remember.
        Click on Forgot Password option in Login Page.<br></br>
        <b>-{">"} </b>In the Forgot Password page, Enter your email and submit.
        A reset password link will be sent to your email.
        <br></br>
        <b>-{">"} </b>Open your email and click on the link and it navigates to
        another page.
        <br></br>
        <b>-{">"} </b>There type your new password and re-enter the new password
        to conform and submit.
        <br></br>
        <b>-{">"} </b>The new password is updated and now user can login with
        email and updated password.<br></br>
        <b>-{">"} </b>After Login it redirect to URL Shortener page where you
        can enter long URL and it provide a short URL which is used to direct
        the same page where the long url directs.
      </p>
    </div>
  );
}

export default Home;
