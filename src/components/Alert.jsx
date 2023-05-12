import React, { useState } from "react";

const Alert = ({alertMessage, alertType }) => {

  return (
    <div className={`alert alert-${alertType}`} role="alert">
      {alertMessage}
    </div>
  )
}

export default Alert;