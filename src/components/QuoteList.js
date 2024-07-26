import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
  Typography,
  Container,
} from "@mui/material";
import Quote from "./Quote";

const QuoteList = () => {
  const [quotes, setQuotes] = useState([]);

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://api.api-ninjas.com/v1/quotes", {
        headers: { "X-Api-Key": "EL+r3EvUhAGRzLpFG/Ghqg==poHfEGPcQmfH7lpq" },
      });
      setQuotes([...quotes, response.data[0]]);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "50px" }}>
      <Paper
        elevation={3}
        style={{
          padding: "20px",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Quotes
        </Typography>
        <Box display="flex" justifyContent="center" marginBottom="20px">
          <Button variant="contained" color="primary" onClick={fetchQuote}>
            Get Random Quote
          </Button>
        </Box>
        {quotes.length == 0 ? (
          <Typography variant="h6" align="center" gutterBottom>
            No quotes present. Kindly press above button
          </Typography>
        ) : (
          <div
            style={{ display: "flex", maxHeight: "30rem", overflow: "auto" }}
          >
            <List>
              {quotes.map((quote, index) => (
                <Quote key={index} quote={quote} />
              ))}
            </List>
          </div>
        )}
      </Paper>
    </Container>
  );
};

export default QuoteList;
