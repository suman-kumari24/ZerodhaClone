import React from "react";

function Signup() {

  const handleSignup = async () => {
    try {

      window.location.href = "http://localhost:3001";
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
   
   /*<div>
      
      <button  onClick={handleSignup}>
        Sign Up & Go to Dashboard
      </button>
    </div>
    */
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <button 
        onClick={handleSignup}
        style={{
          padding: "12px 24px",
          backgroundColor: "#387ed1",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontSize: "16px"
                }}
      >
        Sign up and go to the Dashboard
      </button>
       </div>

  );
}

export default Signup;