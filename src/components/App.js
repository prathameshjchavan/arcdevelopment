// Module Imports
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./ui/Footer";

// Local Imports
import Header from "./ui/Header";
import theme from "./ui/theme";

const Home = () => {
	return <div style={{ height: "2000px" }}>Home</div>;
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Home />} />
					<Route path="/customsoftware" element={<Home />} />
					<Route path="/mobileapps" element={<Home />} />
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
