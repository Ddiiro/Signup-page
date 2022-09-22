import React from "react";
import {useField} from "formik"
import { TextField  } from "@mui/material"
import "../../../src/Login.css"

export const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div className="input">
        <label >
          {label}
          <TextField 
          id="filled-basic"
            variant="filled"
            fullWidth
           {...field} {...props} />
        </label> 
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  }; 