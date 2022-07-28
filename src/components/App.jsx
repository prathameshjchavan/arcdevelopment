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
					<Route path="/websites" element={<Home />} />
					<Route path="/revolution" element={<Home />} />
					<Route path="/about" element={<Home />} />
					<Route path="/contact" element={<Home />} />
					<Route path="/estimate" element={<Home />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
