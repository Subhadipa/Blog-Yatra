import { AppBar, Button, Container, Link, Toolbar } from "@mui/material";
import styles from "../../styles/Header.module.css";
import Image from "next/image";
import logo from "../../Images/Brand_logo_1.png";
import { useEffect, useState } from "react";
import RenderFunction from "./RenderFunction";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [color, setColor] = useState("");

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url === "/") {
        setColor("");
      } else {
        setColor("#87CEEB");
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    if (router.pathname === "/") {
      setColor("");
    } else {
      setColor("#87CEEB");
    }

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.pathname]);

  
  return (
    <>
      <AppBar position="absolute" className={styles.appbar}>
        <Toolbar
          style={{
            position: "absolute",
            marginTop: "-15px",
            marginLeft: "-5px",
            backgroundColor: color,
            width: "100%",
          }}
        >
          <Link href="/">
            <Image src={logo} alt="..." className={styles.logo} />
          </Link>

          <RenderFunction />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
