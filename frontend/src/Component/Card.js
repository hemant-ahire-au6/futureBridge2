import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { useHistory } from "react-router-dom";

export default function BasicCard({
  movieName,
  releaseDate,
  rating,
  poster_path,
  id,
}) {
  const history = useHistory();
  const Img_API = "https://image.tmdb.org/t/p/w500";

  const handleChange = () => {
    history.push(`/${id}`);
  };
  return (
    <Card
      sx={{
        width: 350,
        textAlign: "left",
        margin: "0.3rem",
        cursor: "pointer",
      }}
      onClick={handleChange}
    >
      <CardContent>
        <img
          src={`${Img_API + poster_path}`}
          style={{
            width: "100%",
            display: "flex",
            margin: "auto",
          }}
          alt={movieName}
        />

        <Typography
          sx={{ fontSize: 18, marginTop: "0.5rem" }}
          color="text.secondary"
          gutterBottom
        >
          Name: {movieName}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Rating: {rating}
        </Typography>
        <Typography variant="body2">Release date: {releaseDate}</Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
