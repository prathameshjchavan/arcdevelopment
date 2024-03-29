import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

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
		h3: {
			fontFamily: "Pacifico",
			fontSize: "2.5rem",
			color: arcBlue,
		},
		h4: {
			fontFamily: "Raleway",
			fontSize: "1.75rem",
			color: arcBlue,
			fontWeight: 700,
		},
		h6: {
			fontWeight: 500,
			fontFamily: "Raleway",
			color: arcBlue,
			lineHeight: 1,
		},
		subtitle1: {
			fontSize: "1.25rem",
			fontWeight: 300,
			color: arcGrey,
		},
		subtitle2: {
			color: "#fff",
			fontSize: "1.25rem",
			fontWeight: 300,
		},
		body1: {
			fontSize: "1.25rem",
			color: arcGrey,
			fontWeight: 300,
		},
		caption: {
			fontSize: "1rem",
			fontWeight: 300,
			color: arcGrey,
		},
		learnButton: {
			borderColor: arcBlue,
			color: arcBlue,
			borderWidth: 2,
			textTransform: "none",
			borderRadius: 50,
			fontFamily: "Roboto",
			fontWeight: "bold",
		},
	},
	components: {
		MuiInputLabel: {
			styleOverrides: {
				root: {
					color: arcBlue,
					fontSize: "1rem",
				},
			},
		},
		MuiInput: {
			styleOverrides: {
				underline: {
					"&:before": {
						borderBottom: `2px solid ${arcBlue}`,
					},
					"&:hover:not(.Mui-disabled):before": {
						borderBottom: `2px solid ${arcBlue}`,
					},
				},
				root: {
					color: arcGrey,
					fontWeight: 300,
				},
			},
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
			customSoftware: 921,
			mobileApp: 1041,
			websites: 854,
			callToAction: 889,
		},
	},
});
