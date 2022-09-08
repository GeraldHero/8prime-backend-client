import React from "react";

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
const SendEmail = () => {
  return (
    <Paper sx={{ "& > :not(style)": { m: 1 }, p: 3, m: { xs: 2, md: 10 } }}>
      <FormControl variant="standard">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            width: { xs: 300, md: 560 },
          }}
        >
          <TextField id="input-with-sx" label="Email:" variant="standard" />

          <TextField
            id="standard-multiline-static"
            label="Message:"
            multiline
            rows={5}
            variant="standard"
          />
          <Button variant="contained">Send</Button>
        </Box>
      </FormControl>
    </Paper>
  );
};

export default SendEmail;
