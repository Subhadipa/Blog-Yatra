import { AppBar, Container, Link, Toolbar } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "../../styles/Footer.module.css";

import PhoneIcon from "@mui/icons-material/Phone";
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";
import logo from "../../Images/Brand_logo_1.png";
const Footer = () => {
  return (
    <>
    <br/>
      <AppBar position="static" className={styles.footer}>
        <Toolbar style={{width:"100%"}} >
          <Link href="#">
            <Image src={logo} alt="Logo" className={styles.logo} />
          </Link>

          <div
            style={{
              marginLeft: "820px",
              letterSpacing: "5px",
              marginTop: "-10px",
            }}
          >
            <h3>CONTACT US</h3>
            <div style={{ display: "flex" }}>
              <BusinessIcon style={{ marginTop: "10px" }} />
              <p style={{ marginLeft: "10px" }}>123 Street, New York, USA</p>
            </div>
            <div style={{ display: "flex" }}>
              <PhoneIcon style={{ marginTop: "10px" }} />
              <p style={{ marginLeft: "10px" }}>+012 345 67890</p>
            </div>
            <div style={{ display: "flex" }}>
              <EmailIcon style={{ marginTop: "10px" }} />
              <p style={{ marginLeft: "10px" }}>blogyatraconnect@gmail.com</p>
            </div>
          </div>
          <div
            style={{
              marginLeft: "-1440px",
              letterSpacing: "5px",
              marginTop: "45px",
            }}
          >
            <h3>FOLLOW US</h3>
            <div className={styles.socialLinks}>
              <Link href="#" className="twitter">
                <TwitterIcon style={{ color: "#F08000" }} />
              </Link>
              <Link href="#" className="facebook">
                <FacebookIcon style={{ color: "#F08000", marginLeft: "10px" }} />
              </Link>
              <Link href="#" className="instagram">
                <InstagramIcon style={{ color: "#F08000", marginLeft: "10px" }} />
              </Link>
              <Link href="#" className="linkedin">
                <LinkedInIcon style={{ color: "#F08000", marginLeft: "10px" }} />
              </Link>
            </div>
          </div>
        </Toolbar>

        <div style={{ marginLeft: "10px", marginTop: "50px" }}>
          Copyright &copy; Subhadipa Banerjee@2023. All Rights Reserved.
        </div>
        <div style={{ marginLeft: "1210px", marginTop: "-22px" }}>
          Designed by Subhadipa Banerjee
        </div>
      </AppBar>
    </>
  );
};

export default Footer;
