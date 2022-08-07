// Module Imports
import React from "react";
import Lottie from "react-lottie";
import { Grid, Typography, Button, IconButton, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

// Animations Data
import estimateAnimation from "../animations/estimateAnimation/data";

function Estimate() {
	const theme = useTheme();

	const sx = {
		estimateButton: {
			...theme.typography.estimate,
			borderRadius: 50,
			backgroundColor: theme.palette.common.orange,
			height: 50,
			width: 225,
			fontSize: "1.25rem",
			marginTop: "5em",
			"&:hover": {
				backgroundColor: theme.palette.secondary.light,
			},
		},
	};

	// styled components
	const Icon = styled("img")(() => ({
		width: "12em",
		height: "10em",
	}));

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: estimateAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<Grid container>
			<Grid item container direction="column" lg>
				<Grid item style={{ marginTop: "2em", marginLeft: "5em" }}>
					<Typography variant="h2">Estimate</Typography>
				</Grid>
				<Grid
					item
					style={{ marginRight: "10em", maxWidth: "50em", marginTop: "7.5em" }}
				>
					<Lottie options={defaultOptions} height="100%" width="100%" />
				</Grid>
			</Grid>
			<Grid
				item
				container
				direction="column"
				alignItems="center"
				lg
				style={{ marginRight: "2em", marginBottom: "25em" }}
			>
				<Grid item>
					<Typography
						variant="h2"
						align="center"
						style={{
							fontWeight: 500,
							fontSize: "2.25rem",
							marginBottom: "2.5em",
							marginTop: "5em",
						}}
						gutterBottom
					>
						Which service are you interested in?
					</Typography>
				</Grid>
				<Grid item container>
					<Grid item container direction="column" md>
						<Grid item style={{ maxWidth: "12em" }}>
							<Typography
								variant="h6"
								align="center"
								style={{ marginBottom: "1em" }}
							>
								Custom Software Development
							</Typography>
						</Grid>
						<Grid item>
							<Icon src="/assets/software.svg" alt="three floating screens" />
						</Grid>
					</Grid>
					<Grid item container direction="column" md>
						<Grid item style={{ maxWidth: "12em" }}>
							<Typography
								variant="h6"
								align="center"
								style={{ marginBottom: "1em" }}
							>
								iOS/Android App Development
							</Typography>
						</Grid>
						<Grid item>
							<Icon src="/assets/mobile.svg" alt="phones and tablet outline" />
						</Grid>
					</Grid>
					<Grid item container direction="column" md>
						<Grid item style={{ maxWidth: "12em" }}>
							<Typography
								variant="h6"
								align="center"
								style={{ marginBottom: "1em" }}
							>
								Website Development
							</Typography>
						</Grid>
						<Grid item>
							<Icon src="/assets/website.svg" alt="computer outline" />
						</Grid>
					</Grid>
				</Grid>
				<Grid
					item
					container
					justifyContent="space-between"
					style={{ width: "15em", marginTop: "3em" }}
				>
					<Grid item>
						<img src="/assets/backArrow.svg" alt="previous question" />
					</Grid>
					<Grid item>
						<img src="/assets/forwardArrow.svg" alt="next question" />
					</Grid>
				</Grid>
				<Grid item>
					<Button variant="contained" sx={sx.estimateButton}>
						Get Estimate
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Estimate;
