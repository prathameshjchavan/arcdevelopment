// Module Imports
import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import {
	Grid,
	Typography,
	Button,
	TextField,
	Dialog,
	DialogContent,
	CircularProgress,
	Snackbar,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";

// Local Imports
import ButtonArrow from "./ui/ButtonArrow";

function Contact() {
	const theme = useTheme();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [emailHelper, setEmailHelper] = useState("");
	const [phone, setPhone] = useState("");
	const [phoneHelper, setPhoneHelper] = useState("");
	const [message, setMessage] = useState("");
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState({
		open: false,
		message: "",
		backgroundColor: "",
	});
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
	const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

	// sx prop
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
			"&:hover": {
				backgroundColor: theme.palette.secondary.light,
			},
			marginLeft: matchesLG ? 0 : "2em",
			marginTop: matchesLG ? "1em" : 0,
		},
		message: {
			border: `2px solid ${theme.palette.common.blue}`,
			marginTop: "5em",
			borderRadius: "5px",
		},
		sendButton: {
			...theme.typography.estimate,
			borderRadius: "50px",
			height: 45,
			width: 245,
			fontSize: "1rem",
			backgroundColor: theme.palette.common.orange,
			"&:hover": {
				backgroundColor: theme.palette.secondary.light,
			},
		},
	};

	// event handlers
	const onChange = (event) => {
		let valid;

		switch (event.target.id) {
			case "email":
				setEmail(event.target.value);
				valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
					event.target.value
				);

				if (!valid) {
					setEmailHelper("Invalid email");
				} else {
					setEmailHelper("");
				}

				break;

			case "phone":
				setPhone(event.target.value);
				valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
					event.target.value
				);

				if (!valid) {
					setPhoneHelper("Invalid phone");
				} else {
					setPhoneHelper("");
				}

				break;

			default:
				break;
		}
	};

	const onConfirm = () => {
		setLoading(true);
		axios
			.get(
				"https://us-central1-arc-development-ecfb5.cloudfunctions.net/sendMail",
				{ params: { name, email, phone, message } }
			)
			.then((res) => {
				setLoading(false);
				setOpen(false);
				setName("");
				setEmail("");
				setPhone("");
				setMessage("");
				setAlert({
					open: true,
					message: "Message sent successfully!",
					backgroundColor: "#4bb543",
				});
			})
			.catch((err) => {
				setLoading(false);
				setAlert({
					open: true,
					message: "Something went wrong, please try again!",
					backgroundColor: "#ff3232",
				});
			});
	};

	// content jsx
	const buttonContents = (
		<Fragment>
			Send Message
			<img
				src="/assets/send.svg"
				style={{ marginLeft: "1em" }}
				alt="paper airplane"
			/>
		</Fragment>
	);

	// styled components
	const Background = styled(Grid)(() => ({
		backgroundImage: `url("/assets/background.jpg")`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		paddingBottom: "10em",
		height: "60em",
		width: "100%",
		[theme.breakpoints.down("lg")]: {
			backgroundImage: `url("/assets/mobileBackground.jpg")`,
		},
	}));

	return (
		<Grid container>
			{/* -----Contact Us Form----- */}
			<Grid
				item
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
				style={{ margin: matchesMD ? "1em 0" : matchesLG ? "5em 0" : 0 }}
				lg={4}
				xl={3}
			>
				<Grid item>
					<Grid container direction="column">
						{/* -----Contact Us----- */}
						<Grid item>
							<Typography
								variant="h2"
								align={matchesLG ? "center" : "left"}
								style={{ lineHeight: 1 }}
							>
								Contact Us
							</Typography>
							<Typography
								variant="body1"
								align={matchesLG ? "center" : "left"}
								color={theme.palette.common.blue}
							>
								We&apos;re waiting.
							</Typography>
						</Grid>
						{/* -----Phone----- */}
						<Grid
							item
							container
							style={{ marginTop: "2em" }}
							alignItems="center"
						>
							<Grid item>
								<img
									src="/assets/phone.svg"
									style={{ marginRight: "0.5em" }}
									alt="phone"
								/>
							</Grid>
							<Grid item>
								<Typography
									variant="body1"
									color={theme.palette.common.blue}
									style={{ fontSize: "1rem" }}
								>
									<a
										href="tel:5555555555"
										style={{ textDecoration: "none", color: "inherit" }}
									>
										(555) 555-5555
									</a>
								</Typography>
							</Grid>
						</Grid>
						{/* -----Email----- */}
						<Grid item container style={{ marginBottom: "2em" }}>
							<Grid item>
								<img
									src="/assets/email.svg"
									style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
									alt="envelope"
								/>
							</Grid>
							<Grid item>
								<Typography
									variant="body1"
									color={theme.palette.common.blue}
									style={{ fontSize: "1rem" }}
								>
									<a
										href="mailto:zachary@arcsoftwaredevelopment.com"
										style={{ textDecoration: "none", color: "inherit" }}
									>
										zachary@arcsoftwaredevelopment.com
									</a>
								</Typography>
							</Grid>
						</Grid>
						{/* -----TextFields (Name, Email, Phone)----- */}
						<Grid
							item
							container
							direction="column"
							style={{ maxWidth: "20em" }}
						>
							<Grid item style={{ marginBottom: "0.5em" }}>
								<TextField
									variant="standard"
									fullWidth
									value={name}
									onChange={(e) => setName(e.target.value)}
									label="Name"
									id="name"
								/>
							</Grid>
							<Grid item style={{ marginBottom: "0.5em" }}>
								<TextField
									variant="standard"
									fullWidth
									error={emailHelper.length !== 0}
									helperText={emailHelper}
									value={email}
									onChange={onChange}
									label="Email"
									id="email"
								/>
							</Grid>
							<Grid item style={{ marginBottom: "0.5em" }}>
								<TextField
									variant="standard"
									fullWidth
									error={phoneHelper.length !== 0}
									helperText={phoneHelper}
									value={phone}
									onChange={onChange}
									label="Phone"
									id="phone"
								/>
							</Grid>
						</Grid>
						{/* -----TextField (Message)----- */}
						<Grid item style={{ maxWidth: "20em" }}>
							<TextField
								variant="standard"
								sx={sx.message}
								placeholder="Tell us more about your project"
								fullWidth
								multiline
								InputProps={{ disableUnderline: true }}
								rows={10}
								value={message}
								id="message"
								onChange={(e) => setMessage(e.target.value)}
							/>
						</Grid>
						{/* -----Send Button----- */}
						<Grid
							item
							container
							style={{ marginTop: "2em" }}
							justifyContent="center"
						>
							<Button
								variant="contained"
								onClick={() => setOpen(true)}
								disabled={
									name.length === 0 ||
									message.length === 0 ||
									phoneHelper.length !== 0 ||
									emailHelper.length !== 0
								}
								sx={sx.sendButton}
							>
								{buttonContents}
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			{/* -----Dialog----- */}
			<Dialog
				style={{ zIndex: theme.zIndex.modal + 2 }}
				open={open}
				fullScreen={matchesSM}
				onClose={() => setOpen(false)}
				PaperProps={{
					style: {
						padding: matchesSM ? "2em 0" : "1em",
					},
				}}
			>
				<DialogContent>
					<Grid container direction="column" alignItems="center">
						<Grid item>
							<Typography align="center" variant="h4" gutterBottom>
								Confirm Message
							</Typography>
						</Grid>
						{/* -----TextFields (Name, Email, Phone)----- */}
						<Grid
							item
							container
							direction="column"
							style={{ maxWidth: "20em" }}
						>
							<Grid item style={{ marginBottom: "0.5em" }}>
								<TextField
									variant="standard"
									fullWidth
									value={name}
									onChange={(e) => setName(e.target.value)}
									label="Name"
									id="name"
								/>
							</Grid>
							<Grid item style={{ marginBottom: "0.5em" }}>
								<TextField
									variant="standard"
									fullWidth
									error={emailHelper.length !== 0}
									helperText={emailHelper}
									value={email}
									onChange={onChange}
									label="Email"
									id="email"
								/>
							</Grid>
							<Grid item style={{ marginBottom: "0.5em" }}>
								<TextField
									variant="standard"
									fullWidth
									error={phoneHelper.length !== 0}
									helperText={phoneHelper}
									value={phone}
									onChange={onChange}
									label="Phone"
									id="phone"
								/>
							</Grid>
						</Grid>
						{/* -----TextField (Message)----- */}
						<Grid item container style={{ maxWidth: "20em" }}>
							<TextField
								variant="standard"
								sx={sx.message}
								fullWidth
								multiline
								InputProps={{ disableUnderline: true }}
								rows={10}
								value={message}
								id="message"
								onChange={(e) => setMessage(e.target.value)}
							/>
						</Grid>
						{/* -----Buttons----- */}
						<Grid
							item
							container
							alignItems="center"
							justifyContent="center"
							style={{ marginTop: "2em" }}
						>
							<Grid item>
								<Button
									style={{ fontWeight: 300 }}
									onClick={() => setOpen(false)}
								>
									Cancel
								</Button>
							</Grid>
							<Grid item>
								<Button
									variant="contained"
									onClick={onConfirm}
									disabled={
										name.length === 0 ||
										email.length === 0 ||
										phone.length === 0 ||
										message.length === 0 ||
										phoneHelper.length !== 0 ||
										emailHelper.length !== 0
									}
									sx={sx.sendButton}
								>
									{loading ? <CircularProgress size={30} /> : buttonContents}
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</DialogContent>
			</Dialog>
			{/* -----Snackbar----- */}
			<Snackbar
				open={alert.open}
				message={alert.message}
				ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
				onClose={() => setAlert({ ...alert, open: false })}
				autoHideDuration={4000}
			/>
			{/* -----Call To Action----- */}
			<Background
				item
				container
				direction={matchesLG ? "column" : "row"}
				alignItems="center"
				justifyContent={matchesLG ? "center" : undefined}
				lg={8}
				xl={9}
			>
				<Grid
					item
					style={{
						marginLeft: matchesLG ? 0 : "3em",
						textAlign: matchesLG ? "center" : "inherit",
						paddingLeft: matchesSM ? "25px" : 0,
						paddingRight: matchesSM ? "25px" : 0,
					}}
				>
					<Grid container direction="column">
						<Grid item>
							<Typography
								variant="h2"
								align={matchesLG ? "center" : "left"}
								style={{ fontSize: matchesSM && "2rem" }}
							>
								Simple Software.
								<br />
								Revolutionary Results.
							</Typography>
							<Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
								Take advantage of the 21st century
							</Typography>
							<Button
								variant="outlined"
								component={Link}
								to="/revolution"
								sx={sx.learnButtonSmall}
							>
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
					<Button
						component={Link}
						to="/estimate"
						sx={sx.estimateButton}
						variant="contained"
					>
						Free Estimate
					</Button>
				</Grid>
			</Background>
		</Grid>
	);
}

export default Contact;
