import React from "react";
import Nabvar from "../navbar/index.js";
import Sidebar from "../sidebar/index.js";
import { Stack } from "@mui/material";
export default function Layout({ children }) {
  return (
    <Stack display="flex" flexDirection="column">
      <Nabvar />
      <Stack display="flex" flexDirection="row">
        <Sidebar />
        <section
          style={{ display: "flex", justifyContent: "center", flex: "1 1 60%" }}
        >
          <section style={{ flexBasis: "60%" }}>
            {children}
          </section>
        </section>
      </Stack>
    </Stack>
  );
}
