// Module Imports
import {
	Grid,
	Button,
	Typography,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import React from "react";
import Lottie from "react-lottie";
import ButtonArrow from "../components/ui/ButtonArrow";

// Animations Data
import animationData from "../animations/landinganimation/data";

function LandingPage() {
	const theme = useTheme();
	const heroVertical = useMediaQuery(theme.breakpoints.down("hero"));

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
			borderColor: theme.palette.common.blue,
			color: theme.palette.common.blue,
			borderWidth: 2,
			textTransform: "none",
			borderRadius: 50,
			fontFamily: "Roboto",
			fontWeight: "bold",
			fontSize: "0.9rem",
			height: 45,
			width: 145,
		},
	};

	return (
		<Grid container direction="column" sx={sx.mainContainer}>
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
			{/* <Grid item>
				<Grid container>
					<Grid
						xs
						item
						sx={{ backgroundColor: "red", height: "200px", minWidth: "400px" }}
					>
						Hello
					</Grid>
					<Grid
						xs
						item
						sx={{
							backgroundColor: "green",
							height: "200px",
							minWidth: "300px",
						}}
					>
						Hello
					</Grid>
				</Grid>
			</Grid> */}
		</Grid>
	);
}

export default LandingPage;
