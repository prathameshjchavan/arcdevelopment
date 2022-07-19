import { Grid } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import React, { useMemo } from "react";

function Footer() {
	const theme = useTheme();

	const links = useMemo(
		() => [
			[{ name: "Home", link: "/" }],
			[
				{ name: "Services", link: "/services" },
				{ name: "Custom Software Development", link: "/customsoftware" },
				{ name: "Mobile App Development", link: "/mobileapps" },
				{ name: "Website Development", link: "/websites" },
			],
			[
				{ name: "The Revolution", link: "/revolution" },
				{ name: "Vision", link: "/revolution" },
				{ name: "Technology", link: "/revolution" },
				{ name: "Process", link: "/revolution" },
			],
			[
				{ name: "About Us", link: "/about" },
				{ name: "History", link: "/about" },
				{ name: "Team", link: "/about" },
			],
			[{ name: "Contact Us", link: "/contact" }],
		],
		[]
	);

	const socialLinks = useMemo(
		() => [
			{
				href: "https://www.facebook.com",
				src: "/assets/facebook.svg",
				alt: "facebook logo",
			},
			{
				href: "https://www.twitter.com",
				src: "/assets/twitter.svg",
				alt: "twitter logo",
			},
			{
				href: "https://www.instagram.com",
				src: "/assets/instagram.svg",
				alt: "instagram logo",
			},
		],
		[]
	);

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

	const SocialIcon = styled("img")(({ theme }) => ({
		height: "4em",
		width: "4em",
		[theme.breakpoints.down("sm")]: {
			height: "2.5em",
			width: "2.5em",
		},
	}));

	const sx = {
		mainContainer: {
			position: "absolute",
			[theme.breakpoints.down("md")]: {
				display: "none",
			},
		},
		link: {
			color: "#fff",
			fontFamily: "Arial",
			fontSize: "0.75rem",
			fontWeight: "bold",
			textDecoration: "none",
		},
		gridItem: {
			margin: "3em",
		},
		socialContainer: {
			position: "absolute",
			marginTop: "-6em",
			right: "1.5em",
			[theme.breakpoints.down("sm")]: {
				marginTop: "-4.5em",
				right: "1em",
			},
		},
	};

	return (
		<Footer>
			<Grid container justifyContent="center" sx={sx.mainContainer}>
				{links.map((col, index) => (
					<Grid key={index} item sx={sx.gridItem}>
						<Grid container direction="column" spacing={2}>
							{col.map(({ name, link }) => (
								<Grid key={name} item component={Link} to={link} sx={sx.link}>
									{name}
								</Grid>
							))}
						</Grid>
					</Grid>
				))}
			</Grid>

			<Adornment
				src="/assets/Footer Adornment.svg"
				alt="black decorative slash"
			/>

			<Grid
				container
				justifyContent="flex-end"
				spacing={2}
				sx={sx.socialContainer}
			>
				{socialLinks.map(({ href, src, alt }) => (
					<Grid
						key={href}
						item
						component="a"
						href={href}
						rel="noopener noreferrer"
						target="_blank"
					>
						<SocialIcon src={src} alt={alt} />
					</Grid>
				))}
			</Grid>
		</Footer>
	);
}

export default Footer;
