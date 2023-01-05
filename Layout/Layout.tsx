import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const Layout = ({ children }: any) => {
    return (
        <div>
            <Header />
            <main>
                { children }
            </main>
            <Footer />
        </div>
    );
}
 
export default Layout;