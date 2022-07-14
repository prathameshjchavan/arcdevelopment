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
	},
});
