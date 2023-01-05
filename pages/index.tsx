import CategoriesPost from "../Components/CategoriesPost/CategoriesPost";
import LatestPosts from "../Components/LatestPosts/LatestPosts";
import MostPopular from "../Components/MostPopular/MostPopular";
import TrendingBlog from "../Components/TrendingBlog/TrendingBlog";
import Layout from "../Layout/Layout";

const Home = () => {
    return (
        <Layout>
            <TrendingBlog />
            <LatestPosts />
            <MostPopular />
            <CategoriesPost />
        </Layout>
    );
}
 
export default Home;