import Navbar from "../components/Navbar";
import Hero3D from "../components/Hero3D";
import SearchBar from "../components/SearchBar";
import FeaturedProjects from "../components/FeaturedProjects";
import WhyChooseUs from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero3D />
            <SearchBar />
            <FeaturedProjects />
            <WhyChooseUs />
            <Stats />
            <About />
            <Testimonials />
            <ContactForm />
            <Footer />
        </>
    );
}

export default Home;