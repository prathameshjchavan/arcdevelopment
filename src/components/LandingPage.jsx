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
	const servicesVertical = useMediaQuery(theme.breakpoints.down("services"));

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
			[theme.breakpoints.down("services")]: {
				marginBottom: "2em",
			},
		},
		subtitle: {
			marginBottom: "1em",
		},
		servicesContainer: {
			marginTop: "12em",
			[theme.breakpoints.down("services")]: {
				padding: "25px",
			},
		},
	};

	const SpecialText = styled("span")(({ theme }) => ({
		fontFamily: "Pacifico",
		color: theme.palette.common.orange,
	}));

	const Icon = styled("img")(() => ({
		marginLeft: "2em",
		[theme.breakpoints.down("services")]: {
			marginLeft: 0,
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
			{/* -----Services Block----- */}
			<Grid item>
				<Grid
					container
					sx={sx.servicesContainer}
					direction={servicesVertical ? "column" : "row"}
					alignItems={servicesVertical ? "center" : undefined}
				>
					<Grid
						item
						style={{
							marginLeft: servicesVertical ? 0 : "5em",
							textAlign: servicesVertical ? "center" : undefined,
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
					<Grid item>
						<Icon
							src="/assets/Custom Software Icon.svg"
							alt="custom software icon"
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default LandingPage;
