import { styled } from "@mui/material/styles";

export const SpecialText = styled("span")(({ theme }) => ({
	fontFamily: "Pacifico",
	color: theme.palette.common.orange,
}));

export const Icon = styled("img")(({ theme, breakpoint }) => ({
	marginLeft: "2em",
	[theme.breakpoints.down(breakpoint)]: {
		marginLeft: 0,
		marginTop: "2em",
	},
}));
