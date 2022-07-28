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
import Lottie from "react-lottie";

// Local Imports
import CallToAction from "./ui/CallToAction";

// Animations data
import documentsAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data";
import automationAnimation from "../animations/automationAnimation/data";
import uxAnimation from "../animations/uxAnimation/data";

function CustomSoftware() {
	const theme = useTheme();
	const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

	const documentsOptions = {
		loop: true,
		autoplay: true,
		animationData: documentsAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const scaleOptions = {
		loop: true,
		autoplay: true,
		animationData: scaleAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const automationOptions = {
		loop: true,
		autoplay: true,
		animationData: automationAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const uxOptions = {
		loop: true,
		autoplay: true,
		animationData: uxAnimation,
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
		itemContainer: {
			maxWidth: "40em !important",
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
						to="/services"
						style={{ background: "transparent" }}
					>
						<img src="/assets/backArrow.svg" alt="back to services page" />
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
							Custom Software Development
						</Typography>
					</Grid>
					<Grid item sx={sx.paragraph}>
						<Typography variant="body1" paragraph>
							Whether we’re replacing old software or inventing new solutions,
							Arc Development is here to help your business tackle technology.
						</Typography>
						<Typography variant="body1" paragraph>
							Using regular commercial software leaves you with a lot of stuff
							you don’t need, without some of the stuff you do need, and
							ultimately controls the way you work. Without using any software
							at all you risk falling behind competitors and missing out on huge
							savings from increased efficiency.
						</Typography>
						<Typography variant="body1" paragraph>
							Our custom solutions are designed from the ground up with your
							needs, wants, and goals at the core. This collaborative process
							produces finely tuned software that is much more effective at
							improving your workflow and reducing costs than generalized
							options.
						</Typography>
						<Typography variant="body1" paragraph>
							We create exactly what you what, exactly how you want it.
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
						to="/mobileapps"
						style={{ background: "transparent" }}
					>
						<img
							src="/assets/forwardArrow.svg"
							alt="forward to ios/android app development page"
						/>
					</IconButton>
				</Grid>
			</Grid>
			<Grid
				item
				container
				sx={sx.rowContainer}
				alignItems="center"
				direction={matchesMD ? "column" : "row"}
				style={{ marginTop: "10em", marginBottom: "20em" }}
			>
				<Grid
					item
					container
					md
					alignItems="center"
					direction="column"
					style={{ maxWidth: "40em" }}
				>
					<Grid item>
						<Typography variant="h4" style={{ marginBottom: "1em" }}>
							Save Energy
						</Typography>
					</Grid>
					<Grid item>
						<img src="/assets/bulb.svg" alt="lightbulb" />
					</Grid>
				</Grid>
				<Grid
					item
					container
					md
					alignItems="center"
					direction="column"
					style={{
						maxWidth: "40em",
						marginTop: matchesMD && "10em",
						marginBottom: matchesMD && "10em",
					}}
				>
					<Grid item>
						<Typography variant="h4" style={{ marginBottom: "1em" }}>
							Save Time
						</Typography>
					</Grid>
					<Grid item>
						<img src="/assets/stopwatch.svg" alt="stopwatch" />
					</Grid>
				</Grid>
				<Grid
					item
					container
					md
					alignItems="center"
					direction="column"
					style={{ maxWidth: "40em" }}
				>
					<Grid item>
						<Typography variant="h4" style={{ marginBottom: "1em" }}>
							Save Money
						</Typography>
					</Grid>
					<Grid item>
						<img src="/assets/cash.svg" alt="cash" />
					</Grid>
				</Grid>
			</Grid>
			<Grid
				item
				container
				sx={sx.rowContainer}
				justifyContent="space-between"
				direction={matchesLG ? "column" : "row"}
				alignItems={matchesLG ? "center" : undefined}
			>
				{/* -----Digital Documents & Data----- */}
				<Grid
					item
					container
					sx={sx.itemContainer}
					direction={matchesMD ? "column" : "row"}
					style={{ marginBottom: matchesLG ? "15em" : 0 }}
					md
				>
					<Grid
						item
						container
						sx={sx.paragraph}
						direction="column"
						md
						spacing="1em"
					>
						<Grid item>
							<Typography variant="h4" align={matchesMD ? "center" : "left"}>
								Digital Documents & Data
							</Typography>
						</Grid>
						<Grid item>
							<Typography variant="body1" paragraph>
								Reduce Errors. Reduce Waste. Reduce Costs.
							</Typography>
							<Typography variant="body1" paragraph>
								Billions are spent annually on the purchasing, printing, and
								distribution of paper. On top of the massive environmental
								impact this has, it causes harm to your bottom line as well.
							</Typography>
							<Typography variant="body1" paragraph>
								By utilizing digital forms and documents you can remove these
								obsolete expenses, accelerate your communication, and help the
								Earth.
							</Typography>
						</Grid>
					</Grid>
					<Grid item md alignSelf="center">
						<Lottie
							options={documentsOptions}
							style={{
								maxHeight: 275,
								maxWidth: 275,
								minHeight: 250,
								marginTop: matchesMD && "2em",
							}}
						/>
					</Grid>
				</Grid>
				{/* -----Scale----- */}
				<Grid
					item
					container
					sx={sx.itemContainer}
					direction={matchesMD ? "column" : "row"}
					md
				>
					<Grid item md alignSelf="center">
						<Lottie
							options={scaleOptions}
							style={{
								maxHeight: 260,
								maxWidth: 280,
								marginBottom: matchesMD && "2em",
							}}
						/>
					</Grid>
					<Grid
						item
						container
						sx={sx.paragraph}
						direction="column"
						spacing="1em"
						md
					>
						<Grid item>
							<Typography variant="h4" align={matchesMD ? "center" : "right"}>
								Scale
							</Typography>
						</Grid>
						<Grid item>
							<Typography variant="body1" paragraph>
								Whether you’re a large brand, just getting started, or taking
								off right now, our application architecture ensures pain-free
								growth and reliability.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid item container sx={sx.rowContainer} style={{ margin: "20em 0" }}>
				<Grid item container direction="column" alignItems="center">
					<Grid item>
						<img
							src="/assets/root.svg"
							alt="tree with roots extending out"
							height={matchesSM ? "300em" : "450em"}
							width={matchesSM ? "300em" : "450em"}
						/>
					</Grid>
					<Grid item sx={{ ...sx.itemContainer, ...sx.paragraph }}>
						<Typography variant="h4" gutterBottom align="center">
							Root-cause Analysis
						</Typography>
						<Typography variant="body1" paragraph>
							Many problems are merely symptoms of larger, underlying issues.
						</Typography>
						<Typography variant="body1" paragraph>
							We can help you thoroughly examine all areas of your business to
							develop a holistic plan for the most effective implementation of
							technology.
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				item
				container
				sx={sx.rowContainer}
				justifyContent="space-between"
				direction={matchesLG ? "column" : "row"}
				alignItems={matchesLG ? "center" : undefined}
				style={{ marginBottom: "20em" }}
			>
				{/* -----Automation----- */}
				<Grid
					item
					container
					sx={sx.itemContainer}
					direction={matchesMD ? "column" : "row"}
					style={{ marginBottom: matchesLG ? "15em" : 0 }}
					md
				>
					<Grid
						item
						container
						sx={sx.paragraph}
						direction="column"
						spacing="1em"
						md
					>
						<Grid item>
							<Typography variant="h4" align={matchesMD ? "center" : "left"}>
								Automation
							</Typography>
						</Grid>
						<Grid item>
							<Typography variant="body1" paragraph>
								Why waste time when you don’t have to?
							</Typography>
							<Typography variant="body1" paragraph>
								We can help you identify processes with time or event based
								actions which can now easily be automated.
							</Typography>
							<Typography variant="body1" paragraph>
								Increasing efficiency increases profits, leaving you more time
								to focus on your business, not busywork.
							</Typography>
						</Grid>
					</Grid>
					<Grid item md alignSelf="center">
						<Lottie
							options={automationOptions}
							style={{
								maxHeight: 290,
								maxWidth: 280,
								marginTop: matchesMD && "2em",
							}}
						/>
					</Grid>
				</Grid>
				{/* -----User Experience Design----- */}
				<Grid
					item
					container
					sx={sx.itemContainer}
					direction={matchesMD ? "column" : "row"}
					md
				>
					<Grid item md alignSelf="center">
						<Lottie
							options={uxOptions}
							style={{
								maxHeight: 310,
								maxWidth: 155,
								marginBottom: matchesMD && "2em",
							}}
						/>
					</Grid>
					<Grid
						item
						container
						sx={sx.paragraph}
						direction="column"
						spacing="1em"
						md
					>
						<Grid item>
							<Typography variant="h4" align={matchesMD ? "center" : "right"}>
								User Experience Design
							</Typography>
						</Grid>
						<Grid item>
							<Typography variant="body1" paragraph>
								A good design that isn’t usable isn’t a good design.
							</Typography>
							<Typography variant="body1" paragraph>
								So why are so many pieces of software complicated, confusing,
								and frustrating?
							</Typography>
							<Typography variant="body1" paragraph>
								By prioritizing users and the real ways they interact with
								technology we’re able to develop unique, personable experiences
								that solve problems rather than create new ones.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				<CallToAction />
			</Grid>
		</Grid>
	);
}

export default CustomSoftware;
