
import React from "react";


function User(props) {
  const { user } = props;

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="user-items">
      <h2>{`${user.firstname} ${user.lastname}`}</h2>
      <h3>{user.email}</h3>
      <p>{user.termsOfService === true ? "Agreed To Terms Of Service" : "Did Not Agree To Terms Of Service"}</p>
      </div>
  );
}

export default User;
