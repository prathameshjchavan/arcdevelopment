// Module Imports
import {
	Grid,
	Button,
	Typography,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import Lottie from "react-lottie";
import ButtonArrow from "../components/ui/ButtonArrow";

// Animations Data
import animationData from "../animations/landinganimation/data";

function LandingPage() {
	const theme = useTheme();
	const heroVertical = useMediaQuery(theme.breakpoints.down("hero"));
	const customSoftwareVertical = useMediaQuery(
		theme.breakpoints.down("customSoftware")
	);
	const mobileAppVertical = useMediaQuery(theme.breakpoints.down("mobileApp"));
	const websitesVertical = useMediaQuery(theme.breakpoints.down("websites"));

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const sx = {
		mainContainer: {
			marginTop: "5em",
			[theme.breakpoints.down("md")]: {
				marginTop: "3em",
			},
			[theme.breakpoints.down("sm")]: {
				marginTop: "2em",
			},
		},
		heroTextContainer: {
			minWidth: "21.5em",
			marginLeft: "1em",
			[theme.breakpoints.down("hero")]: {
				marginLeft: 0,
			},
		},
		animation: {
			maxWidth: "50em",
			minWidth: "21em",
			marginTop: "2em",
			marginLeft: "10%",
			[theme.breakpoints.down("hero")]: {
				maxWidth: "30em",
			},
			alignSelf: heroVertical && "flex-end",
		},
		estimateButton: {
			...theme.typography.estimate,
			backgroundColor: theme.palette.common.orange,
			borderRadius: 50,
			height: 45,
			width: 145,
			marginRight: "40px",
			"&:hover": {
				backgroundColor: theme.palette.secondary.light,
			},
		},
		buttonContainer: {
			marginTop: "1em",
		},
		learnButtonHero: {
			...theme.typography.learnButton,
			fontSize: "0.9rem",
			height: 45,
			width: 145,
		},
		learnButton: {
			...theme.typography.learnButton,
			fontSize: "0.7rem",
			height: 35,
		},
		subtitle: {
			marginBottom: "1em",
		},
		servicesContainer: {
			marginTop: "12em",
		},
	};

	const SpecialText = styled("span")(({ theme }) => ({
		fontFamily: "Pacifico",
		color: theme.palette.common.orange,
	}));

	const Icon = styled("img")(({ breakpoint }) => ({
		marginLeft: "2em",
		[theme.breakpoints.down(breakpoint)]: {
			marginLeft: 0,
			marginTop: "2em",
		},
	}));

	return (
		<Grid container direction="column" sx={sx.mainContainer}>
			{/* -----Hero Block----- */}
			<Grid item>
				<Grid
					container
					justifyContent={!heroVertical && "flex-end"}
					alignItems={!heroVertical && "center"}
					flexDirection={heroVertical ? "column" : "row"}
				>
					<Grid sm item sx={sx.heroTextContainer}>
						<Typography variant="h2" align="center">
							Bringing West Coast Technology
							<br />
							to the Midwest
						</Typography>
						<Grid container justifyContent="center" sx={sx.buttonContainer}>
							<Grid item>
								<Button variant="contained" sx={sx.estimateButton}>
									Free Estimate
								</Button>
							</Grid>
							<Grid item>
								<Button variant="outlined" sx={sx.learnButtonHero}>
									<span style={{ marginRight: 10 }}>Learn More</span>
									<ButtonArrow
										width={15}
										height={15}
										fill={theme.palette.common.blue}
									/>
								</Button>
							</Grid>
						</Grid>
					</Grid>
					<Grid sm item sx={sx.animation}>
						{/* Animation */}
						<Lottie options={defaultOptions} height="100%" width="100%" />
					</Grid>
				</Grid>
			</Grid>
			{/* -----Custom Software Block----- */}
			<Grid item>
				<Grid
					container
					sx={sx.servicesContainer}
					direction={customSoftwareVertical ? "column" : "row"}
					justifyContent={customSoftwareVertical ? "center" : "flex-start"}
					alignItems={customSoftwareVertical ? "center" : undefined}
				>
					<Grid
						item
						style={{
							marginLeft: customSoftwareVertical ? 0 : "5em",
							textAlign: customSoftwareVertical ? "center" : undefined,
							padding: customSoftwareVertical ? "25px" : 0,
						}}
					>
						<Typography variant="h4">Custom Software Development</Typography>
						<Typography variant="subtitle1" sx={sx.subtitle}>
							Save Energy. Save Time. Save Money.
						</Typography>
						<Typography variant="subtitle1">
							Complete digital solutions, from investigation to&nbsp;
							<SpecialText>celebration</SpecialText>.
						</Typography>
						<Button variant="outlined" sx={sx.learnButton}>
							<span style={{ marginRight: 10 }}>Learn More</span>
							<ButtonArrow
								width={10}
								height={10}
								fill={theme.palette.common.blue}
							/>
						</Button>
					</Grid>
					<Grid
						item
						style={{ marginRight: customSoftwareVertical ? 0 : "5em" }}
					>
						<Icon
							breakpoint="customSoftware"
							src="/assets/Custom Software Icon.svg"
							alt="custom software icon"
						/>
					</Grid>
				</Grid>
			</Grid>
			{/* -----iOS/Android Block----- */}
			<Grid item>
				<Grid
					container
					sx={sx.servicesContainer}
					direction={mobileAppVertical ? "column" : "row"}
					justifyContent={mobileAppVertical ? "center" : "flex-end"}
					alignItems={mobileAppVertical ? "center" : undefined}
				>
					<Grid
						item
						style={{
							marginLeft: mobileAppVertical ? 0 : "5em",
							textAlign: mobileAppVertical ? "center" : undefined,
							padding: mobileAppVertical ? "25px" : 0,
						}}
					>
						<Typography variant="h4">iOS/Android App Development</Typography>
						<Typography variant="subtitle1" sx={sx.subtitle}>
							Extend Functionality. Extend Access. Increase Engagement.
						</Typography>
						<Typography variant="subtitle1">
							Integrate your web experience or create a standalone app
							{mobileAppVertical ? null : <br />} with either mobile platform.
						</Typography>
						<Button variant="outlined" sx={sx.learnButton}>
							<span style={{ marginRight: 10 }}>Learn More</span>
							<ButtonArrow
								width={10}
								height={10}
								fill={theme.palette.common.blue}
							/>
						</Button>
					</Grid>
					<Grid item style={{ marginRight: mobileAppVertical ? 0 : "5em" }}>
						<Icon
							breakpoint="mobileApp"
							src="/assets/mobileIcon.svg"
							alt="mobile phone icon"
						/>
					</Grid>
				</Grid>
			</Grid>
			{/* -----Websites Block----- */}
			<Grid item>
				<Grid
					container
					sx={sx.servicesContainer}
					direction={websitesVertical ? "column" : "row"}
					justifyContent={websitesVertical ? "center" : "flex-start"}
					alignItems={websitesVertical ? "center" : undefined}
				>
					<Grid
						item
						style={{
							marginLeft: websitesVertical ? 0 : "5em",
							textAlign: websitesVertical ? "center" : undefined,
							padding: websitesVertical ? "25px" : 0,
						}}
					>
						<Typography variant="h4">Website Development</Typography>
						<Typography variant="subtitle1" sx={sx.subtitle}>
							Reach More. Discover More. Sell More.
						</Typography>
						<Typography variant="subtitle1">
							Optimized for Search Engines, built for speed.
						</Typography>
						<Button variant="outlined" sx={sx.learnButton}>
							<span style={{ marginRight: 10 }}>Learn More</span>
							<ButtonArrow
								width={10}
								height={10}
								fill={theme.palette.common.blue}
							/>
						</Button>
					</Grid>
					<Grid item style={{ marginRight: websitesVertical ? 0 : "5em" }}>
						<Icon
							breakpoint="websites"
							src="/assets/websiteIcon.svg"
							alt="website icon"
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default LandingPage;