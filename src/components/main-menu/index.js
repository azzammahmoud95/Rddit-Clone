import React from 'react'
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Brightness5Icon from '@mui/icons-material/Brightness5';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import styles from "./styles.module.css"
export default function mainMenu() {
  return (
    <div className={styles.mainMenu}>
    <div className={styles.leftPartMenu}>
    <button
      style={{
        borderRadius: "20px",
        backgroundColor: "#e4f3ff",
        border: "none",
        width: "8%",
        display: "flex",
      }}
    >
      <LocalFireDepartmentIcon color="primary" fontSize="large" />
      <span style={{ fontWeight: 700,color: "#0079d3" }} className={styles.buttonLabel}>
        Hot
      </span>
    </button>
    <button
      style={{
        borderRadius: "20px",
        backgroundColor: "#e4f3ff",
        border: "none",
        width: "14%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <span style={{ fontWeight: 700,color: "#0079d3" }} className={styles.buttonLabel}>
        United States
      </span>
      <KeyboardArrowDownOutlinedIcon color="primary" fontSize="large" />
    </button>
    <button
      style={{
        borderRadius: "20px",
        backgroundColor: "#e4f3ff",
        border: "none",
        width: "8%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <span style={{ fontWeight: 700,color: "#0079d3" }} className={styles.buttonLabel}>
        All
      </span>
      <KeyboardArrowDownOutlinedIcon color="primary" fontSize="large" />
    </button>
    <button
      style={{
        borderRadius: "20px",
        border: "none",
        width: "8%",
        display: "flex",
        justifyContent: "center",
        backgroundColor:"white"
      }}
    >
      <Brightness5Icon  fontSize="medium" />
      <span style={{ fontWeight: 700,  }} className={styles.buttonLabel}>
        New
      </span>
    </button>
    <button
      style={{
        borderRadius: "20px",
        border: "none",
        width: "8%",
        display: "flex",
        justifyContent: "center",
        backgroundColor:"white"
      }}
    >
      <FileUploadIcon  fontSize="medium" />
      <span style={{ fontWeight: 700  }} className={styles.buttonLabel}>
        Top
      </span>
    </button>
    <button
      style={{
        borderRadius: "20px",
        border: "none",
        width: "8%",
        display: "flex",
        justifyContent: "center",
        backgroundColor:"white"
      }}
    >
      <MoreHorizOutlinedIcon  fontSize="medium" />
      <span style={{ fontWeight: 700  }} className={styles.buttonLabel}>
      </span>
    </button>
    </div>
   <button
      style={{
        borderRadius: "20px",
        border: "none",
        width: "8%",
        display: "flex",
        justifyContent: "center",
        backgroundColor:"white"
      }}
    >
      <IndeterminateCheckBoxOutlinedIcon fontSize="medium"/>
      <KeyboardArrowDownOutlinedIcon  fontSize="medium" />
    </button>
    
  </div>
  )
}
