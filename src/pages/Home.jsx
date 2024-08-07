import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";

function App() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Stack spacing={15}>
        <AppBar />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", xl: "row" },
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Stack direction={"column"} spacing={2} sx={{ maxWidth: 768 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                color: "#10101A",
                textAlign: { xs: "center", xl: "start" },
              }}
            >
              Hello, I'm Bilal.
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                color: "#10101A",
                textAlign: { xs: "center", xl: "start" },
              }}
            >
              I graduated from Iskenderun Technical University with a degree in
              Computer Engineering. I am dedicated to constantly improving my
              skills in the field of Front End Development. I am currently
              looking for a job in the field of React Native development.
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                color: "#10101A",
                textAlign: { xs: "center", xl: "start" },
              }}
            >
              I enjoy crafting code from the ground up and taking pleasure in
              bringing concepts to life on the web.
            </Typography>
          </Stack>
          <Tooltip title="Bilal Sen Unsplash Gallery" placement="bottom">
            <Card
              sx={{
                width: "100%",
              }}
            >
              <CardActionArea
                href="https://unsplash.com/photos/a-bunch-of-boats-that-are-sitting-in-the-water-yFF8r2TRjqQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardMedia
                  component="img"
                  height="360"
                  image="https://framerusercontent.com/images/FMbGFT5dh4VLrTr0btn1qCNErw0.jpg"
                  alt="Bilal Sen Unsplash Gallery"
                  sx={{
                    width: "100%",
                  }}
                />
              </CardActionArea>
            </Card>
          </Tooltip>
        </Box>
        <Footer />
      </Stack>
    </Container>
  );
}

export default App;
