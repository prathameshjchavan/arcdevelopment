import { styled } from "@mui/material/styles";
import React from "react";

function Footer() {
	const Footer = styled("footer")(({ theme }) => ({
		background: theme.palette.common.blue,
		width: "100%",
		zIndex: theme.zIndex.modal + 1,
		position: "relative",
	}));

	const Adornment = styled("img")(({ theme }) => ({
		width: "25em",
		verticalAlign: "bottom",
		[theme.breakpoints.down("md")]: {
			width: "21em",
		},
		[theme.breakpoints.down("sm")]: {
			width: "15em",
		},
	}));

	return (
		<Footer>
			<Adornment
				src="/assets/Footer Adornment.svg"
				alt="black decorative slash"
			/>
		</Footer>
	);
}

export default Footer;
