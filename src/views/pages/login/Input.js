import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Input = ({ name, handleChange, label, half, autoFocus, type, handleShowPassword }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField 
        name = {name}
        onChange = {handleChange}
        variant = "outlined" 
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={name === 'password' ? {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {type === 'password' ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        } : null}
      />
    </Grid>
  )
}

export default Input



// import React from 'react'
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardGroup,
//   CCol,
//   CContainer,
//   CForm,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CRow,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'

// const Input = ({ icon, placeholder, autoComplete, type, label, onChange }) => {
//   return (
//     <CInputGroup className="mb-4">

//       <CInputGroupText>
//         <CIcon icon={icon} />
//       </CInputGroupText>

//       <CFormInput 
//         placeholder={placeholder}
//         autoComplete={autoComplete}
//         type={type}
//         label={label}
//         onChange={onChange}
//       />

//     </CInputGroup>
//   )
// }

// export default Input