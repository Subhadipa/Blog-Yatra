import { Container, Grid, Paper, Typography } from "@mui/material";
import styles from "../../styles/Service.module.css";
import Image from "next/image";
import s1 from "../../Images/s1.svg";
import s2 from "../../Images/s2.svg";
import s3 from "../../Images/s3.svg";
import s4 from "../../Images/s4.svg";
import s5 from "../../Images/s5.svg";
import s6 from "../../Images/s6.svg";
const Service = () => {
  return (
    <>
      <Container className={styles.container}>
        <Typography variant="h3" className={styles.header}>
          Our Services
        </Typography>
        <Typography variant="h6">
          Elevating Your Travel Blogging Experience: Where Every Journey Feels
          Special.
        </Typography>
        <br /> <br />
        <Grid container spacing={3}>
          {/* Service 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={styles.serviceItem}>
              <div>
                <Image
                  src={s1}
                  alt="Travel Tips"
                  className={styles.serviceImage}
                />
              </div>

              <Typography variant="h5">Travel Tips</Typography>
              <Typography>Brings out the smarter version of yours.</Typography>
            </Paper>
          </Grid>

          {/* Service 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={styles.serviceItem}>
              <div>
                <Image
                  src={s2}
                  alt="Destination Insights"
                  className={styles.serviceImage}
                />
              </div>

              <Typography variant="h5">Destination Insights</Typography>
              <Typography>Wonderful styles for men and women.</Typography>
            </Paper>
          </Grid>

          {/* Service 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={styles.serviceItem}>
              <div>
                <Image
                  src={s3}
                  alt="Budget Planning"
                  className={styles.serviceImage}
                />
              </div>
              <Typography variant="h5">Budget Planning</Typography>
              <Typography>For great and smooth hair.</Typography>
            </Paper>
          </Grid>

          {/* Service 4 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={styles.serviceItem}>
              <div>
                <Image
                  src={s4}
                  alt="Itinerary Ideas"
                  className={styles.serviceImage}
                />
              </div>
              <Typography variant="h5">Itinerary Ideas</Typography>
              <Typography>To make your special day more special.</Typography>
            </Paper>
          </Grid>

          {/* Service 5 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={styles.serviceItem}>
              <div>
                <Image
                  src={s5}
                  alt="Adventure Stories"
                  className={styles.serviceImage}
                />
              </div>
              <Typography variant="h5">Adventure Stories</Typography>
              <Typography>
                Color your hair that suits and defines you.
              </Typography>
            </Paper>
          </Grid>

          {/* Service 6 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={styles.serviceItem}>
              <div>
                <Image
                  src={s6}
                  alt="Insider Secrets"
                  className={styles.serviceImage}
                />
              </div>
              <Typography variant="h5">Insider Secrets</Typography>
              <Typography>Brings out the smarter version of yours.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Service;
