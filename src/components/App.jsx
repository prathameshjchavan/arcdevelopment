// Module Imports
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Local Imports
import Header from "./ui/Header";
import LandingPage from "./LandingPage";
import Services from "./Services";
import Footer from "./ui/Footer";
import theme from "./ui/theme";
import CustomSoftware from "./CustomSoftware";
import MobileApps from "./MobileApps";
import Websites from "./Websites";
import Revolution from "./Revolution";
import About from "./About";

const Home = () => {
	return <div>Home</div>;
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/services" element={<Services />} />
					<Route path="/customsoftware" element={<CustomSoftware />} />
					<Route path="/mobileapps" element={<MobileApps />} />
					<Route path="/websites" element={<Websites />} />
					<Route path="/revolution" element={<Revolution />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Home />} />
					<Route path="/estimate" element={<Home />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
