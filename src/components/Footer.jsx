import React from "react";
import { GitHub, LinkedIn, MailRounded, X } from "@mui/icons-material";
import { Box, Container, IconButton, Stack, Tooltip } from "@mui/material";

const Footer = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        borderTop: "1px solid black",
        paddingBlockEnd: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          marginBlockStart: 1,
        }}
      >
        <Tooltip title="Mail" placement="bottom">
          <IconButton
            aria-label="delete"
            target="_blank"
            href="mailto:bilalsen2010@gmail.com"
          >
            <MailRounded
              sx={{
                color: "#10101A",
                "&:hover": {
                  cursor: "pointer",
                  color: "#FFA500",
                },
              }}
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="GitHub" placement="bottom">
          <IconButton
            aria-label="delete"
            href="https://github.com/bilalseen"
            target="_blank"
          >
            <GitHub
              sx={{
                color: "#10101A",
                "&:hover": {
                  cursor: "pointer",
                  color: "#FFA500",
                },
              }}
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn" placement="bottom">
          <IconButton
            aria-label="delete"
            href="https://www.linkedin.com/in/bilalseen/"
            target="_blank"
          >
            <LinkedIn
              sx={{
                color: "#10101A",
                "&:hover": {
                  cursor: "pointer",
                  color: "#FFA500",
                },
              }}
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Twitter" placement="bottom">
          <IconButton
            aria-label="delete"
            href="https://twitter.com/bilalsen2010"
            target="_blank"
          >
            <X
              sx={{
                color: "#10101A",
                "&:hover": {
                  cursor: "pointer",
                  color: "#FFA500",
                },
              }}
            />
          </IconButton>
        </Tooltip>
      </Box>
    </Container>
  );
};

export default Footer;
