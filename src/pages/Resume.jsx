import { Box } from "@mui/material";
import React from "react";
import ResumePdf from "../files/bilal_sen_cv_en.pdf";

export default function Resume() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <embed
        src={ResumePdf}
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </Box>
  );
}
