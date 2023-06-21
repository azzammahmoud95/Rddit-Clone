import React from "react";
import Button from "@mui/material/Button";

export default function secondaryButton(props) {
  return (
    <Button
      variant="contained"
      sx={{
        boxShadow: "none",
        background: "var(--secondary-color)",
        color: "#0f1a1c",
        padding: "4px 18px",
        textTransform: "unset",
        fontSize: "14px",
        fontWeight: "700",
        lineHeight: "17px",
        minHeight: "32px",
        minWidth: "32px",
        borderRadius: "9999px",
        transition: "none",
        "&:hover": {
          background: "#dae0e6",
          boxShadow: "none",
        },
      }}
      style={props.style}
    >
      {props.children}
    </Button>
  );
}

