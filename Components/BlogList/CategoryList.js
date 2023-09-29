import { Box, Card, Link } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styles from "../../styles/CategoryList.module.css"
import clsx from 'clsx';

const CategoryList = () => {
    const categoryArr = [
        {
          category: "Destination Guides",
          badge: 150,
        },
        {
          category: "Adventure Travel",
          badge: 131,
        },
        {
          category: "Cultural Experiences",
          badge: 78,
        },
        {
          category: "Travel Tips and Hacks",
          badge: 56,
        },
        {
          category: "Food Explorations",
          badge: 98,
        },
      ];
      const badgeButtonClass = clsx(styles.badge,styles.badgePill,styles.badgePrimary);
  return (
    <>
   <Box  style={{ marginLeft: "1160px", marginTop: "60px" }}>
    <h2 style={{letterSpacing:"5px"}}>CATEGORIES</h2>
    <Card sx={{ width: "300px" }}>
    <ul style={{listStyleType:"none"}}>
    {categoryArr?.map((categoryEach) => (
              <>
                <li style={{fontSize:"18px",marginBottom:'20px',marginLeft:'-30px'}}>
                  <Link  href="#" style={{textDecoration:"none",color:"black"}}>
                    <div style={{display:"flex"}}>
                   <ChevronRightIcon style={{color:"#F08000"}}/>
                    {categoryEach.category}
                    <span className={badgeButtonClass} style={{marginLeft:"20px"}}>
                    {categoryEach.badge}
                  </span >
                    </div>
                  </Link>
                 
                </li>
              </>
            ))}
    </ul>
    </Card>
    </Box>
    </>
  )
}

export default CategoryList