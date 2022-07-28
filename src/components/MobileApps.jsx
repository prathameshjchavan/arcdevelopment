// Module Imports
import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import {
	Grid,
	Typography,
	IconButton,
	useMediaQuery,
	useTheme,
} from "@mui/material";

// Animations Data
import integrationAnimation from "../animations/integrationAnimation/data";

// Local Imports
import CallToAction from "./ui/CallToAction";

function MobileApps() {
	const theme = useTheme();
	const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: integrationAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

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
		paragraph: {
			textAlign: "justify",
			textJustify: "inter-word",
		},
	};

	return (
		<Grid container direction="column">
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
						to="/customsoftware"
						style={{ background: "transparent" }}
					>
						<img
							src="/assets/backArrow.svg"
							alt="back to custom software development page"
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
							iOS/Android App Development
						</Typography>
					</Grid>
					<Grid item sx={sx.paragraph}>
						<Typography variant="body1" paragraph>
							Mobile apps allow you to take your tools on the go.
						</Typography>
						<Typography variant="body1" paragraph>
							Whether you want an app for your customers, employees, or
							yourself, we can build cross-platform native solutions for any
							part of your business process. This opens you up to a whole new
							world of possibilities by taking advantage of phone features like
							the camera, GPS, push notifications, and more.
						</Typography>
						<Typography variant="body1" paragraph>
							Convenience. Connection.
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
						to="/websites"
						style={{ background: "transparent" }}
					>
						<img
							src="/assets/forwardArrow.svg"
							alt="forward to website development page"
						/>
					</IconButton>
				</Grid>
			</Grid>
			<Grid
				item
				container
				direction={matchesLG ? "column" : "row"}
				style={{ margin: "15em 0" }}
				sx={sx.rowContainer}
			>
				<Grid item container direction="column" lg>
					<Grid item>
						<Typography
							variant="h4"
							align={matchesLG ? "center" : "left"}
							gutterBottom
						>
							Integration
						</Typography>
					</Grid>
					<Grid item sx={sx.paragraph}>
						<Typography variant="body1" paragraph>
							Our technology enables an innate interconnection between web and
							mobile applications, putting everything you need right in one
							convenient place.
						</Typography>
						<Typography variant="body1" paragraph>
							This allows you to extend your reach, reinvent interactions, and
							develop a stronger relationship with your users than ever before.
						</Typography>
					</Grid>
				</Grid>
				<Grid item lg>
					<Lottie
						options={defaultOptions}
						style={{
							maxWidth: "20em",
							marginTop: matchesLG && "2em",
							marginBottom: matchesLG && "2em",
						}}
					/>
				</Grid>
				<Grid item container direction="column" lg>
					<Grid item>
						<Typography
							variant="h4"
							gutterBottom
							align={matchesLG ? "center" : "right"}
						>
							Simultaneous Platform Support
						</Typography>
					</Grid>
					<Grid item sx={sx.paragraph}>
						<Typography variant="body1" paragraph>
							Our cutting-edge development process allows us to create apps for
							iPhone, Android, and tablets — all at the same time.
						</Typography>
						<Typography variant="body1" paragraph>
							This significantly reduces costs and creates a more unified brand
							experience across all devices.
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				item
				container
				direction={matchesLG ? "column" : "row"}
				style={{ marginBottom: "15em" }}
				sx={sx.rowContainer}
			>
				<Grid item container alignItems="center" direction="column" md>
					<Grid item>
						<Typography variant="h4" align="center" gutterBottom>
							Extend Functionality
						</Typography>
					</Grid>
					<Grid item>
						<img src="/assets/swissknife.svg" alt="swiss army knife" />
					</Grid>
				</Grid>
				<Grid
					item
					container
					alignItems="center"
					style={{ margin: matchesLG ? "10em 0" : 0 }}
					direction="column"
					md
				>
					<Grid item>
						<Typography variant="h4" align="center" gutterBottom>
							Extend Access
						</Typography>
					</Grid>
					<Grid item>
						<img
							src="/assets/extendAccess.svg"
							style={{ maxWidth: matchesSM ? "20em" : "28em" }}
							alt="tear-one-off sign"
						/>
					</Grid>
				</Grid>
				<Grid item container alignItems="center" direction="column" md>
					<Grid item>
						<Typography variant="h4" align="center" gutterBottom>
							Increase Engagement
						</Typography>
					</Grid>
					<Grid item>
						<img
							src="/assets/increaseEngagement.svg"
							alt="app with notification"
						/>
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				<CallToAction />
			</Grid>
		</Grid>
	);
}

export default MobileApps;
