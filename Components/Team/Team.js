import Image from "next/image"
import styles from "../../styles/Team.module.css"
import { Button, Card, CardContent, Container, Grid, Typography } from "@mui/material"
import t1 from "../../Images/team-1.jpg"
import t2 from "../../Images/team-2.jpg"
import t3 from "../../Images/team-3.jpg"
import t4 from "../../Images/team-4.jpg"
const Team = () => {
  return (
   <>
   
    <Container className={styles.container}>
      <div className={styles.textCenter}>
        <Typography variant="h6" className={styles.header}>
          Team Memebers
        </Typography>
        <Typography variant="h4">
          Message From Team Members
        </Typography>
      </div>
      <br/>  <br/>
      <Grid container spacing={4}>
        {/* Team 1 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card className={styles.teamItem}>
            <div className={styles.teamImg}>
              <Image src={t1} alt="Team 1" className={styles.imgFluid} />
            </div>
            <CardContent>
              <Typography variant="h6" className={styles.textCenter}>
                Emma Johnson
              </Typography>
              <Typography variant="body2" className={styles.textCenter}>
                CEO
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Team 2 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card className={styles.teamItem}>
            <div className={styles.teamImg}>
              <Image src={t2} alt="Team 1" className={styles.imgFluid} />
            </div>
            <CardContent>
              <Typography variant="h6" className={styles.textCenter}>
                Emma Johnson
              </Typography>
              <Typography variant="body2" className={styles.textCenter}>
                CTO
              </Typography>
            </CardContent>
          </Card>
        </Grid>
         {/* Team 3 */}
         <Grid item xs={12} sm={6} md={3}>
          <Card className={styles.teamItem}>
            <div className={styles.teamImg}>
              <Image src={t3} alt="Team 1" className={styles.imgFluid} />
            
            </div>
            <CardContent>
              <Typography variant="h6" className={styles.textCenter}>
                Emma Johnson
              </Typography>
              <Typography variant="body2" className={styles.textCenter}>
                CBO
              </Typography>
            </CardContent>
          </Card>
        </Grid>
         {/* Team 4 */}
         <Grid item xs={12} sm={6} md={3}>
          <Card className={styles.teamItem}>
            <div className={styles.teamImg}>
              <Image src={t4} alt="Team 1" className={styles.imgFluid} />
              
            </div>
            <CardContent>
              <Typography variant="h6" className={styles.textCenter}>
                Emma Johnson
              </Typography>
              <Typography variant="body2" className={styles.textCenter}>
              EIC
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
   </>
  )
}

export default Team