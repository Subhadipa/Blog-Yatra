import { blogList } from "@/Redux/BlogSlice";
import { useDispatch, useSelector } from "react-redux";
import BackgroundImage from "../../../Components/BackgroundImage/BackgroundImage";
import { useEffect,useState } from "react";
import { Box, Grid, Pagination } from "@mui/material";
import BlogCard from "../../../Components/BlogList/BlogCard";
import AuthorBio from "../../../Components/BlogList/AuthorBio";
import SearchForm from "../../../Components/BlogList/SearchForm";
import CategoryList from "../../../Components/BlogList/CategoryList";
import RecentPosts from "../../../Components/BlogList/RecentPosts";
import TagClouds from "../../../Components/BlogList/TagClouds";



const index = () => {
  const [page, setPage] = useState();

  const dispatch = useDispatch();
  const { data, totalRecords, totalPage } = useSelector((s) => s.Blog);
  const blogListData = data?.data;
  const handlePageChange = (e, pageno) => {
    setPage(pageno);
    dispatch(
      blogList({
        page: pageno,
        perpage: 10,
      })
    );
  };
  useEffect(() => {
    dispatch(blogList());
  }, []);

  return (Array.isArray(blogListData) && blogListData.length === 0) ||
  blogListData === undefined ||
  totalRecords === 0 ? 
  (
  <>
  <BackgroundImage/>
  <br/>
  <h1 style={{ textAlign: "center" }}>Blog Not Found!!</h1>
  <AuthorBio/>
  <SearchForm/>
  <CategoryList/>
  <RecentPosts/>
  <TagClouds/>
  </>
  
  ):(
  <>
  <BackgroundImage/>
  <AuthorBio/>
  <SearchForm/>
  <CategoryList/>
  <RecentPosts/>
  <TagClouds/>
  <br/><br/><br/>
   <Box style={{width:"660px",marginLeft:"260px",marginTop:'-1672px',height:"1960px"}}>
   <Grid container spacing={0.5}>
    {
       blogListData?.map((blog) =>  (
          <Grid item xs={6}>
          <BlogCard blogData={blog} key={blog._id} />
          </Grid>
        )
      
    )}
    
   </Grid>
   </Box>
            <Pagination style={{backgroundColor:"#F08000",width:"200px",marginLeft:"560px",marginTop:'60px'}}
              count={totalPage}
              onChange={handlePageChange}
              totalRecords={page}
            />
          
  </>
  )
};

export default index;
