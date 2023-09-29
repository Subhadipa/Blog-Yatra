import { Box, Breadcrumbs, Container, Link, Typography } from "@mui/material";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import styles from "../../styles/BackgroundImage.module.css";
import { useRouter } from "next/router";
const BackgroundImage = () => {
  const router = useRouter();
  // if (router.pathname === "/")
  return (
    <>
      <Box
        className={styles.header}
        sx={{ backgroundColor: "#333", color: "white" }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "400px",
            }}
          >
            {router.pathname === "/about" ? (
              <>
                <Typography variant="h4" className="text-uppercase">
                  About
                </Typography>
              </>
            
            ) : (
              <>
                <Typography variant="h4" className="text-uppercase">
                  Blog-List
                </Typography>
              </>
            )
            }
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
              sx={{ color: "white" }}
            >
              <Link href="/" color="inherit" style={{ textDecoration: "none" }}>
                Home
              </Link>
              {router.pathname === "/about" ? (
                <>
                  <Link
                    href="/about"
                    color="inherit"
                    style={{ textDecoration: "none" }}
                  >
                    About
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/blog-list"
                    color="inherit"
                    style={{ textDecoration: "none" }}
                  >
                    Blog-List
                  </Link>
                </>
              )}
              {/* <Link href="/blog-list" color="inherit" style={{textDecoration:"none"}}>
              Blog-List
            </Link> */}
            </Breadcrumbs>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BackgroundImage;
