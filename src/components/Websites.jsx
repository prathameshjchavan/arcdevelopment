// Module Imports
import React from "react";
import { Link } from "react-router-dom";
import {
	Grid,
	IconButton,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";

// Local Imports
import CallToAction from "./ui/CallToAction";

function Websites() {
	const theme = useTheme();
	const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

	const sx = {
		rowContainer: {
			paddingLeft: "5em",
			paddingRight: "5em",
			[theme.breakpoints.down("sm")]: {
				paddingLeft: "1.5em",
				paddingRight: "1.5em",
			},
		},
		heading: {
			maxWidth: "40em",
		},
		arrowContainer: {
			marginTop: "0.7em",
		},
		paragraph: { textAlign: "justify", textJustify: "inter-word" },
		paragraphContainer: {
			textAlign: "justify",
			textJustify: "inter-word",
			maxWidth: "30em",
		},
	};

	return (
		<Grid item container direction="column">
			{/* -----Introduction----- */}
			<Grid
				item
				container
				sx={sx.rowContainer}
				style={{ marginTop: matchesSM ? "1em" : "2em" }}
				justifyContent={matchesMD ? "center" : undefined}
			>
				<Grid
					item
					sx={sx.arrowContainer}
					style={{
						marginRight: "1em",
						marginLeft: "-3.5em",
						display: matchesLG ? "none" : "block",
					}}
				>
					<IconButton
						component={Link}
						to="/mobileapps"
						style={{ background: "transparent" }}
					>
						<img
							src="/assets/backArrow.svg"
							alt="back to ios/android app development page"
						/>
					</IconButton>
				</Grid>
				<Grid item container sx={sx.heading} direction="column">
					<Grid item>
						<Typography
							variant="h2"
							lineHeight={matchesMD && 1.2}
							style={{ marginBottom: matchesMD && "0.5em" }}
							align={matchesMD ? "center" : undefined}
						>
							Website Development
						</Typography>
					</Grid>
					<Grid item sx={sx.paragraph}>
						<Typography variant="body1" paragraph>
							Having a website is a necessity in today’s business world. They
							give you one central, public location to let people know who you
							are, what you do, and why you’re the best at it.
						</Typography>
						<Typography variant="body1" paragraph>
							From simply having your hours posted to having a full fledged
							online store, making yourself as accessible as possible to users
							online drives growth and enables you to reach new customers.
						</Typography>
					</Grid>
				</Grid>
				<Grid
					item
					sx={sx.arrowContainer}
					style={{ display: matchesLG ? "none" : "block" }}
				>
					<IconButton
						component={Link}
						to="/services"
						style={{ background: "transparent" }}
					>
						<img
							src="/assets/forwardArrow.svg"
							alt="forward to services page"
						/>
					</IconButton>
				</Grid>
			</Grid>
			{/* -----Analytics----- */}
			<Grid
				item
				container
				direction={matchesMD ? "column" : "row"}
				sx={sx.rowContainer}
				style={{ marginTop: "15em" }}
				alignItems="center"
				flexWrap="nowrap"
			>
				<Grid item>
					<Grid container direction="column">
						<Grid item>
							<Typography
								align={matchesMD ? "center" : "left"}
								variant="h4"
								gutterBottom
							>
								Analytics
							</Typography>
						</Grid>
						<Grid item>
							<img
								src="/assets/analytics.svg"
								style={{ marginLeft: matchesMD ? 0 : "-2.75em" }}
								alt="graph with magnifying glass revealing 1's and 0s"
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item sx={sx.paragraphContainer}>
					<Typography variant="body1">
						Knowledge is power, and data is 21st Century gold. Analyzing this
						data can reveal hidden patterns and trends in your business,
						empowering you to make smarter decisions with measurable effects.
					</Typography>
				</Grid>
			</Grid>
			{/* -----E-commerce----- */}
			<Grid
				item
				container
				direction={matchesMD ? "column" : "row"}
				sx={sx.rowContainer}
				style={{ margin: "15em 0" }}
				justifyContent="flex-end"
				alignItems="center"
				flexWrap="nowrap"
			>
				<Grid item>
					<Grid container direction="column">
						<Grid item>
							<Typography variant="h4" align="center" gutterBottom>
								E-commerce
							</Typography>
						</Grid>
						<Grid item>
							<img
								src="/assets/ecommerce.svg"
								alt="world outline made of dollar signs"
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid
					item
					sx={sx.paragraphContainer}
					style={{ marginLeft: matchesMD ? 0 : "1em" }}
				>
					<Typography variant="body1" paragraph>
						It’s no secret that people like to shop online. In 2017 over $2.3
						trillion was spent in e-commerce, and it’s time for your slice of
						that pie.
					</Typography>
					<Typography variant="body1" paragraph>
						In 2017 over $2.3 trillion was spent in e-commerce, and it’s time
						for your slice of that pie.
					</Typography>
				</Grid>
			</Grid>
			{/* -----Outreach----- */}
			<Grid
				item
				container
				direction={matchesMD ? "column" : "row"}
				sx={sx.rowContainer}
				alignItems="center"
				flexWrap="nowrap"
			>
				<Grid item>
					<Grid container direction="column">
						<Grid item>
							<Typography
								variant="h4"
								align={matchesMD ? "center" : "left"}
								gutterBottom
							>
								Outreach
							</Typography>
						</Grid>
						<Grid item>
							<img src="/assets/outreach.svg" alt="megaphone" />
						</Grid>
					</Grid>
				</Grid>
				<Grid
					item
					sx={sx.paragraphContainer}
					style={{ marginLeft: matchesMD ? 0 : "1em" }}
				>
					<Typography variant="body1">
						Draw people in with a dazzling website. Showing off your products
						online is a great way to help customers decide what’s right for them
						before visiting in person.
					</Typography>
				</Grid>
			</Grid>
			{/* -----Search Engine Optimization----- */}
			<Grid
				item
				container
				direction={matchesMD ? "column" : "row"}
				sx={sx.rowContainer}
				style={{ margin: "15em 0" }}
				justifyContent="flex-end"
				alignItems="center"
				flexWrap="nowrap"
			>
				<Grid item>
					<Grid container direction="column">
						<Grid item>
							<Typography variant="h4" align="center" gutterBottom>
								Search Engine
								<br />
								Optimization
							</Typography>
						</Grid>
						<Grid item>
							<img
								src="/assets/seo.svg"
								alt="website standing on winner's podium"
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid
					item
					sx={sx.paragraphContainer}
					style={{ marginLeft: matchesMD ? 0 : "1em" }}
				>
					<Typography variant="body1" paragraph>
						How often have you ever been to the second page of Google results?
					</Typography>
					<Typography variant="body1" paragraph>
						If you’re like us, probably never.
					</Typography>
					<Typography variant="body1" paragraph>
						Customers don’t go there either, so we make sure your website is
						designed to end up on top.
					</Typography>
				</Grid>
			</Grid>
			<Grid item>
				<CallToAction />
			</Grid>
		</Grid>
	);
}

export default Websites;
