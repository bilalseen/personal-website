import React from "react";
import { Container, Typography } from "@mui/material";

export default function Resume() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h2" component="h2" sx={{ color: "#10101A" }}>
        Resume
      </Typography>
    </Container>
  );
}
