import React from 'react';
import { Redirect} from 'react-router-dom';
import '../assets/css/main.css';
import '../assets/css/bootstrap.min.css';
import Header from '../component/header';


const Profile = props => {
  const statusLogin = JSON.parse(localStorage.getItem("statusLogin"));
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  console.warn("statusLogin", statusLogin);
  if (statusLogin === null) {
    return <Redirect to={{ pathname: "/signin" }} />;
  } else {
    return (
      <React.Fragment>
        <Header {...props} />
        <section className="content" style={{paddingTop:"100px",textAlign:"center"}}>
          <h1
            style={{
              textalign: "center"
            }}
          >
            Profile
          </h1>
          <p>
            <label>Name:</label> {name}
          </p>
          <p>
            <label>Email:</label> {email}
          </p>
        </section>
      </React.Fragment>
    );
  }
};

export default Profile;