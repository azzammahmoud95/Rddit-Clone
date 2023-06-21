import React from "react";
import Button from "@mui/material/Button";

function MainButton(props) {
  return (
    <Button
      variant="contained"
      sx={{
        boxShadow: "none",
        background: "var(--primary-color)",
        color: "#fff",
        padding: "4px 36px",
        textTransform: "unset",
        fontSize: "14px",
        fontWeight: "700",
        lineHeight: "17px",
        minHeight: "32px",
        minWidth: "32px",
        borderRadius: "9999px",
        transition: "none",
        "&:hover": {
          background: "#ff4520",
          boxShadow: "none",
        },
      }}
      style={props.style}
      fullWidth={props.fullWidth}
    >
      {props.children}
    </Button>
  );
}

export default MainButton;