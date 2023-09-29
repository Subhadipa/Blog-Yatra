import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const SearchForm = () => {
  return (
    <>
      <Box style={{ marginLeft: "1160px", marginTop: "60px" }}>
        <Card sx={{ width: "300px" }}>
          <CardContent>
            <TextField
              variant="outlined"
              label="Keyword"
              InputProps={{
               endAdornment: (
                <InputAdornment position="end">
                <Button style={{backgroundColor:"#F08000",color:"white",height:"53.8px",marginRight:'-15px'}}>
                <SearchIcon/>
              </Button>
              </InputAdornment>
               ),
              }}
            />
           
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default SearchForm;
