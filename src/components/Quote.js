import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Button,
  Paper,
  Box,
} from "@mui/material";
import {
  Favorite,
  FavoriteBorder,
  Edit,
  Save,
  Cancel,
} from "@mui/icons-material";

const Quote = ({ quote }) => {
  const [isFav, setIsFav] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedQuote, setEditedQuote] = useState(quote.quote);
  const [editedAuthor, setEditedAuthor] = useState(quote.author);

  const toggleFav = () => {
    setIsFav(!isFav);
  };

  const toggleEdit = () => {
    if (isEditing) {
      quote.quote = editedQuote;
      quote.author = editedAuthor;
    }
    setIsEditing(!isEditing);
  };

  return (
    <Paper elevation={2} style={{ margin: "10px 0", padding: "10px" }}>
      <ListItem alignItems="flex-start">
        {isEditing ? (
          <Box display="flex" flexDirection="column" width="100%">
            <TextField
              label="Quote"
              value={editedQuote}
              onChange={(e) => setEditedQuote(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Author"
              value={editedAuthor}
              onChange={(e) => setEditedAuthor(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <Box
              display="flex"
              justifyContent="flex-end"
              marginTop="10px"
              gap={2}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() => setIsEditing(false)}
                startIcon={<Cancel />}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={toggleEdit}
                startIcon={<Save />}
              >
                Save
              </Button>
            </Box>
          </Box>
        ) : (
          <>
            <ListItemText primary={quote.quote} secondary={quote.author} />
            <IconButton onClick={toggleFav}>
              {isFav ? <Favorite color="secondary" /> : <FavoriteBorder />}
            </IconButton>
            <IconButton onClick={toggleEdit}>
              <Edit />
            </IconButton>
          </>
        )}
      </ListItem>
    </Paper>
  );
};

export default Quote;
