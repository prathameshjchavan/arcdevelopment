import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

export default createTheme({
	palette: {
		common: {
			blue: arcBlue,
			orange: arcOrange,
		},
		primary: {
			main: arcBlue,
		},
		secondary: {
			main: arcOrange,
		},
	},
	mixins: {
		toolbar: {
			height: "7em",
		},
	},
	typography: {
		tab: {
			fontFamily: "Raleway",
			textTransform: "none",
			fontWeight: 700,
			fontSize: "1rem",
		},
		estimate: {
			fontFamily: "Pacifico",
			textTransform: "none",
			fontSize: "1rem",
			color: "#fff",
		},
		h2: {
			fontFamily: "Raleway",
			fontWeight: 700,
			fontSize: "2.5rem",
			color: arcBlue,
			lineHeight: 1.5,
		},
	},
	breakpoints: {
		values: {
			// default
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
			// custom
			tabs: 1290,
			hero: 773,
		},
	},
});
