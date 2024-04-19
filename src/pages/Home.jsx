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
              I am a computer engineering student, currently pursuing my
              education as a fourth-year student at Iskenderun Technical
              University. I am dedicated to constantly improving my skills in
              the field of Front End Development.
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
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="360"
                  image="https://framerusercontent.com/images/FMbGFT5dh4VLrTr0btn1qCNErw0.jpg"
                  alt="green iguana"
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
