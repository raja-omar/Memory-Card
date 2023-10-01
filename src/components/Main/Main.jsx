import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const MainSection = () => {
  const [currentNumber, setCurrentNumber] = useState(1);
  const [highScore, setHighScore] = useState(0);

  const handleCardClick = (number) => {
    if (number === currentNumber) {
      setCurrentNumber(currentNumber + 1);
      if (currentNumber >= highScore) {
        setHighScore(currentNumber);
      }
    } else {
      setCurrentNumber(1);
    }
  };

  return (
    <Grid container justifyContent="center" spacing={3}>
      <Grid item xs={12} sm={8}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h4" gutterBottom>
            Memory Card Game
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to the Memory Card Game! Here's how to play:
          </Typography>
          <Typography variant="body1" paragraph>
            - You will be shown cards with different numbers.
          </Typography>
          <Typography variant="body1" paragraph>
            - Click on a card with a unique number each time.
          </Typography>
          <Typography variant="body1" paragraph>
            - Your current number: {currentNumber}
          </Typography>
          <Typography variant="body1">High Score: {highScore}</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCurrentNumber(1)}
            style={{ marginTop: "10px" }}
          >
            Reset Game
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MainSection;
