// Module Imports
import React from "react";
import {
	Grid,
	Typography,
	Avatar,
	useTheme,
	useMediaQuery,
} from "@mui/material";

// Local Imports
import CallToAction from "./ui/CallToAction";

function About() {
	const theme = useTheme();
	const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

	const sx = {
		missionStatement: {
			fontStyle: "italic",
			fontWeight: 300,
			fontSize: "1.5rem",
			maxWidth: "50em",
			lineHeight: 1.4,
		},
		rowContainer: {
			paddingLeft: "5em",
			paddingRight: "5em",
			[theme.breakpoints.down("sm")]: {
				paddingLeft: "1.5em",
				paddingRight: "1.5em",
			},
		},
		paragraph: {
			textAlign: "justify",
			textJustify: "inter-word",
		},
		avatar: {
			height: "25em",
			width: "25em",
			[theme.breakpoints.down("md")]: {
				height: "20em",
				width: "20em",
				maxHeight: 300,
				maxWidth: 300,
			},
		},
	};

	return (
		<Grid container direction="column">
			{/* -----About Us----- */}
			<Grid
				item
				sx={sx.rowContainer}
				style={{ marginTop: matchesMD ? "1em" : "2em" }}
			>
				<Typography variant="h2" align={matchesLG ? "center" : "left"}>
					About Us
				</Typography>
			</Grid>
			{/* -----Mission Statement----- */}
			<Grid item container sx={sx.rowContainer} justifyContent="center">
				<Typography
					variant="h4"
					align="center"
					sx={sx.missionStatement}
					style={{ marginTop: "2em" }}
				>
					Whether it be person to person, business to consumer, or an individual
					to their interests, technology is meant to bring us closer to what we
					care about in the best way possible. Arc Development will use that
					principle to provide fast, modern, inexpensive, and aesthetic software
					to the Midwest and beyond.
				</Typography>
			</Grid>
			{/* -----History----- */}
			<Grid
				item
				container
				sx={sx.rowContainer}
				style={{ margin: "10em 0" }}
				direction={matchesLG ? "column" : "row"}
				justifyContent="space-around"
				alignItems={matchesLG ? "center" : undefined}
			>
				<Grid item container direction="column" style={{ maxWidth: "35em" }} lg>
					<Grid item>
						<Typography
							align={matchesLG ? "center" : "left"}
							variant="h4"
							gutterBottom
						>
							History
						</Typography>
					</Grid>
					<Grid item sx={sx.paragraph}>
						<Typography
							variant="body1"
							align={matchesLG ? "center" : "left"}
							paragraph
							style={{ fontWeight: 700, fontStyle: "italic" }}
						>
							We&apos;re the new kid on the block
						</Typography>
						<Typography variant="body1" paragraph>
							Founded in 2019, we’re ready to get our hands on the world’s
							business problems.
						</Typography>
						<Typography variant="body1" paragraph>
							It all started with one question: Why aren’t all businesses using
							available technology? There are many different answers to that
							question: economic barriers, social barriers, educational
							barriers, and sometimes institutional barriers.
						</Typography>
						<Typography variant="body1" paragraph>
							We aim to be a powerful force in overcoming these obstacles.
							Recent developments in software engineering and computing power,
							compounded by the proliferation of smart phones, has opened up
							infinite worlds of possibility. Things that have always been done
							by hand can now be done digitally and automatically, and
							completely new methods of interaction are created daily. Taking
							full advantage of these advancements is the name of the game.
						</Typography>
						<Typography variant="body1" paragraph>
							All this change can be a lot to keep up with, and that’s where we
							come in.
						</Typography>
					</Grid>
				</Grid>
				<Grid item container justifyContent="center" lg>
					<img
						src="/assets/history.svg"
						style={{
							maxHeight: matchesLG ? 200 : "22em",
							marginLeft: matchesLG ? 0 : "2em",
							marginTop: matchesLG ? 0 : "5em",
						}}
						alt="quill pen sitting on top of book"
					/>
				</Grid>
			</Grid>
			{/* -----Team----- */}
			<Grid
				item
				container
				direction="column"
				alignItems="center"
				sx={sx.rowContainer}
				style={{ marginBottom: "15em" }}
			>
				<Grid item>
					<Typography variant="h4" align="center" gutterBottom>
						Team
					</Typography>
				</Grid>
				<Grid item style={{ marginBottom: "2em" }}>
					<Typography variant="body1" paragraph align="center">
						Zachary Reece, Founder
					</Typography>
					<Typography variant="body1" paragraph align="center">
						I started coding when I was 9 years old.
					</Typography>
				</Grid>
				<Grid item style={{ marginBottom: matchesLG ? "2em" : "5em" }}>
					<Avatar src="/assets/founder.jpg" alt="founder" sx={sx.avatar} />
				</Grid>
				<Grid item container justifyContent={matchesLG ? "center" : undefined}>
					<Grid
						item
						sx={{
							display: {
								lg: "none",
								xs: "block",
							},
							...sx.paragraph,
						}}
						style={{ maxWidth: "45em", padding: "1.25em" }}
						lg
					>
						<Typography variant="body1" paragraph>
							I taught myself basic coding from a library book in third grade,
							and ever since then my passion has solely been set on learning —
							learning about computers, learning mathematics and philosophy,
							studying design, always just learning.
						</Typography>
						<Typography variant="body1" paragraph>
							Now I’m ready to apply everything I’ve learned, and to help others
							with the intuition I have developed.
						</Typography>
					</Grid>
					<Grid
						item
						container
						direction="column"
						alignItems={matchesLG ? "center" : undefined}
						style={{ marginBottom: matchesLG ? "2.5em" : 0 }}
						lg
					>
						<Grid item>
							<img
								src="/assets/yearbook.svg"
								style={{
									maxWidth: matchesMD ? 300 : undefined,
								}}
								alt="yearbook page about founder"
							/>
						</Grid>
						<Grid item>
							<Typography variant="caption">
								a page from my Sophomore yearbook
							</Typography>
						</Grid>
					</Grid>
					<Grid
						item
						sx={{
							display: {
								lg: "block",
								xs: "none",
							},
							...sx.paragraph,
						}}
						style={{ maxWidth: "45em", padding: "1.25em" }}
						lg
					>
						<Typography variant="body1" paragraph>
							I taught myself basic coding from a library book in third grade,
							and ever since then my passion has solely been set on learning —
							learning about computers, learning mathematics and philosophy,
							studying design, always just learning.
						</Typography>
						<Typography variant="body1" paragraph>
							Now I’m ready to apply everything I’ve learned, and to help others
							with the intuition I have developed.
						</Typography>
					</Grid>
					<Grid
						item
						container
						direction="column"
						alignItems={matchesLG ? "center" : "flex-end"}
						lg
					>
						<Grid item>
							<img
								src="/assets/puppy.svg"
								style={{ maxWidth: matchesMD ? 300 : undefined }}
								alt="grey spotted puppy"
							/>
						</Grid>
						<Grid item>
							<Typography variant="caption">
								my miniature dapple dachshund, Sterling
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			{/* -----Call To Action----- */}
			<Grid item>
				<CallToAction />
			</Grid>
		</Grid>
	);
}

export default About;
