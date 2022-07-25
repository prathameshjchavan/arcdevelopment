import React from "react";
import {
	Grid,
	Typography,
	Button,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ButtonArrow from "./ButtonArrow";

function CallToAction() {
	const theme = useTheme();
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const callToActionVertical = useMediaQuery(
		theme.breakpoints.down("callToAction")
	);

	const sx = {
		learnButtonSmall: {
			...theme.typography.learnButton,
			fontSize: "0.7rem",
			height: 35,
		},
		estimateButton: {
			...theme.typography.estimate,
			borderRadius: 50,
			height: 80,
			width: 205,
			backgroundColor: theme.palette.common.orange,
			fontSize: "1.5rem",
			marginRight: callToActionVertical ? 0 : "5em",
			marginLeft: callToActionVertical ? 0 : "2em",
			marginTop: callToActionVertical ? "1em" : 0,
		},
	};

	const Background = styled("div")(({ theme }) => ({
		backgroundImage: `url("/assets/background.jpg")`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundAttachment: "fixed",
		height: "100%",
		width: "100%",
		[theme.breakpoints.down("md")]: {
			backgroundImage: `url("/assets/mobileBackground.jpg")`,
		},
		[theme.breakpoints.down("sm")]: {
			backgroundAttachment: "inherit",
		},
	}));

	return (
		<Grid container style={{ height: "60em" }} alignItems="center">
			<Grid
				item
				container
				style={{ position: "absolute" }}
				direction={callToActionVertical ? "column" : "row"}
				alignItems="center"
				justifyContent={callToActionVertical ? "center" : "space-between"}
			>
				<Grid
					item
					style={{
						marginLeft: callToActionVertical ? 0 : "5em",
						textAlign: callToActionVertical ? "center" : "inherit",
						paddingLeft: matchesSM ? "25px" : 0,
						paddingRight: matchesSM ? "25px" : 0,
					}}
				>
					<Grid container direction="column">
						<Grid item>
							<Typography
								variant="h2"
								style={{ fontSize: matchesSM && "2rem" }}
							>
								Simple Software.
								<br />
								Revolutionary Results.
							</Typography>
							<Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
								Take advantage of the 21st century
							</Typography>
							<Button variant="outlined" sx={sx.learnButtonSmall}>
								<span style={{ marginRight: 5 }}>Learn More</span>
								<ButtonArrow
									width={10}
									height={10}
									fill={theme.palette.common.blue}
								/>
							</Button>
						</Grid>
					</Grid>
				</Grid>
				<Grid item>
					<Button sx={sx.estimateButton} variant="contained">
						Free Estimate
					</Button>
				</Grid>
			</Grid>
			<Background />
		</Grid>
	);
}

export default CallToAction;
