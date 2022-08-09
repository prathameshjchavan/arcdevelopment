// Module Imports
import React, { Fragment, useState } from "react";
import Lottie from "react-lottie";
import {
	Grid,
	Typography,
	Button,
	IconButton,
	Dialog,
	DialogContent,
	TextField,
	Snackbar,
	CircularProgress,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { cloneDeep } from "lodash";
import axios from "axios";

// Animations Data
import estimateAnimation from "../animations/estimateAnimation/data";

// Questions
const defaultQuestions = [
	{
		id: 1,
		title: "Which service are you interested in?",
		active: true,
		options: [
			{
				id: 1,
				title: "Custom Software Development",
				subtitle: null,
				icon: "/assets/software.svg",
				iconAlt: "three floating screens",
				selected: false,
				cost: 0,
			},
			{
				id: 2,
				title: "iOS/Android App Development",
				subtitle: null,
				icon: "/assets/mobile.svg",
				iconAlt: "phones and tablet outline",
				selected: false,
				cost: 0,
			},
			{
				id: 3,
				title: "Website Development",
				subtitle: null,
				icon: "/assets/website.svg",
				iconAlt: "computer outline",
				selected: false,
				cost: 0,
			},
		],
	},
];

const softwareQuestions = [
	{ ...defaultQuestions[0], active: false },
	{
		id: 2,
		title: "Which platforms do you need supported?",
		subtitle: "Select all that apply.",
		options: [
			{
				id: 1,
				title: "Web Application",
				subtitle: null,
				icon: "/assets/website.svg",
				iconAlt: "computer outline",
				selected: false,
				cost: 100,
			},
			{
				id: 2,
				title: "iOS Application",
				subtitle: null,
				icon: "/assets/iphone.svg",
				iconAlt: "outline of iphone",
				selected: false,
				cost: 100,
			},
			{
				id: 3,
				title: "Android Application",
				subtitle: null,
				icon: "/assets/android.svg",
				iconAlt: "outlines of android phone",
				selected: false,
				cost: 100,
			},
		],
		active: true,
	},
	{
		id: 3,
		title: "Which features do you expect to use?",
		subtitle: "Select all that apply.",
		options: [
			{
				id: 1,
				title: "Photo/Video",
				subtitle: null,
				icon: "/assets/camera.svg",
				iconAlt: "camera outline",
				selected: false,
				cost: 25,
			},
			{
				id: 2,
				title: "GPS",
				subtitle: null,
				icon: "/assets/gps.svg",
				iconAlt: "gps pin",
				selected: false,
				cost: 25,
			},
			{
				id: 3,
				title: "File Transfer",
				subtitle: null,
				icon: "/assets/upload.svg",
				iconAlt: "outline of cloud with arrow pointing up",
				selected: false,
				cost: 25,
			},
		],
		active: false,
	},
	{
		id: 4,
		title: "Which features do you expect to use?",
		subtitle: "Select all that apply.",
		options: [
			{
				id: 1,
				title: "Users/Authentication",
				subtitle: null,
				icon: "/assets/users.svg",
				iconAlt: "outline of a person with a plus sign",
				selected: false,
				cost: 25,
			},
			{
				id: 2,
				title: "Biometrics",
				subtitle: null,
				icon: "/assets/biometrics.svg",
				iconAlt: "fingerprint",
				selected: false,
				cost: 25,
			},
			{
				id: 3,
				title: "Push Notifications",
				subtitle: null,
				icon: "/assets/bell.svg",
				iconAlt: "outline of a bell",
				selected: false,
				cost: 25,
			},
		],
		active: false,
	},
	{
		id: 5,
		title: "What type of custom features do you expect to need?",
		subtitle: "Select one.",
		options: [
			{
				id: 1,
				title: "Low Complexity",
				subtitle: "(Informational)",
				icon: "/assets/info.svg",
				iconAlt: "'i' inside a circle",
				selected: false,
				cost: 25,
			},
			{
				id: 2,
				title: "Medium Complexity",
				subtitle: "(Interactive, Customizable, Realtime)",
				icon: "/assets/customized.svg",
				iconAlt: "two toggle switches",
				selected: false,
				cost: 50,
			},
			{
				id: 3,
				title: "High Complexity",
				subtitle: "(Data Modeling and Computation)",
				icon: "/assets/data.svg",
				iconAlt: "outline of line graph",
				selected: false,
				cost: 100,
			},
		],
		active: false,
	},
	{
		id: 6,
		title: "How many users do you expect?",
		subtitle: "Select one.",
		options: [
			{
				id: 1,
				title: "0-10",
				subtitle: null,
				icon: "/assets/person.svg",
				iconAlt: "person outline",
				selected: false,
				cost: 1,
			},
			{
				id: 2,
				title: "10-100",
				subtitle: null,
				icon: "/assets/persons.svg",
				iconAlt: "outline of two people",
				selected: false,
				cost: 1.25,
			},
			{
				id: 3,
				title: "100+",
				subtitle: null,
				icon: "/assets/people.svg",
				iconAlt: "outline of three people",
				selected: false,
				cost: 1.5,
			},
		],
		active: false,
	},
];

const websiteQuestions = [
	{ ...defaultQuestions[0], active: false },
	{
		id: 2,
		title: "Which type of website are you wanting?",
		subtitle: "Select one.",
		options: [
			{
				id: 1,
				title: "Basic",
				subtitle: "(Informational)",
				icon: "/assets/info.svg",
				iconAlt: "person outline",
				selected: false,
				cost: 100,
			},
			{
				id: 2,
				title: "Interactive",
				subtitle: "(Users, API's, Messaging)",
				icon: "/assets/customized.svg",
				iconAlt: "outline of two people",
				selected: false,
				cost: 200,
			},
			{
				id: 3,
				title: "E-Commerce",
				subtitle: "(Sales)",
				icon: "/assets/globe.svg",
				iconAlt: "outline of three people",
				selected: false,
				cost: 250,
			},
		],
		active: true,
	},
];

function Estimate() {
	const theme = useTheme();
	const [dialogOpen, setDialogOpen] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [emailHelper, setEmailHelper] = useState("");
	const [phone, setPhone] = useState("");
	const [phoneHelper, setPhoneHelper] = useState("");
	const [message, setMessage] = useState("");
	const [total, setTotal] = useState(0);
	const [service, setService] = useState([]);
	const [platforms, setPlatforms] = useState([]);
	const [features, setFeatures] = useState([]);
	const [customFeature, setCustomFeature] = useState("");
	const [category, setCategory] = useState("");
	const [users, setUsers] = useState("");
	const [questions, setQuestions] = useState(defaultQuestions);
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
		estimateButton: {
			...theme.typography.estimate,
			borderRadius: 50,
			backgroundColor: theme.palette.common.orange,
			height: 50,
			width: 225,
			marginTop: "5em",
			fontSize: "1.25rem",
			"&:hover": {
				backgroundColor: theme.palette.secondary.light,
			},
		},
		message: {
			border: `2px solid ${theme.palette.common.blue}`,
			marginTop: "3em",
			marginBottom: "2em",
			borderRadius: "5px",
		},
		paragraph: {
			textAlign: "justify",
			textJustify: "inter-word",
		},
	};

	// functions
	const nextQuestion = () => {
		const newQuestions = cloneDeep(questions);
		const currentlyActive = newQuestions.filter((question) => question.active);
		const activeIndex = currentlyActive[0].id - 1;
		const nextIndex = activeIndex + 1;

		newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
		newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

		setQuestions(newQuestions);
	};

	const previousQuestion = () => {
		const newQuestions = cloneDeep(questions);
		const currentlyActive = newQuestions.filter((question) => question.active);
		const activeIndex = currentlyActive[0].id - 1;
		const previousIndex = activeIndex - 1;

		newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
		newQuestions[previousIndex] = {
			...newQuestions[previousIndex],
			active: true,
		};

		setQuestions(newQuestions);
	};

	const navigationPreviousDisabled = () => {
		const currentlyActive = questions.filter((question) => question.active);

		if (currentlyActive[0].id === 1) {
			return true;
		} else {
			return false;
		}
	};

	const navigationNextDisabled = () => {
		const currentlyActive = questions.filter((question) => question.active);

		if (currentlyActive[0].id === questions[questions.length - 1].id) {
			return true;
		} else {
			return false;
		}
	};

	const handleSelect = (id) => {
		const newQuestions = cloneDeep(questions);
		const currentlyActive = newQuestions.filter((question) => question.active);
		const activeIndex = currentlyActive[0].id - 1;
		const newSelected = newQuestions[activeIndex].options[id - 1];
		const previousSelected = currentlyActive[0].options.filter(
			(option) => option.selected
		);

		switch (currentlyActive[0].subtitle) {
			case "Select one.":
				if (previousSelected[0]) {
					previousSelected[0].selected = !previousSelected[0].selected;
				}
				newSelected.selected = !newSelected.selected;
				break;
			default:
				newSelected.selected = !newSelected.selected;
				break;
		}

		switch (newSelected.title) {
			case "Custom Software Development":
				setQuestions(softwareQuestions);
				setService(newSelected.title);
				setPlatforms([]);
				setFeatures([]);
				setCustomFeature("");
				setCategory("");
				setUsers("");
				break;
			case "iOS/Android App Development":
				setQuestions(softwareQuestions);
				setService(newSelected.title);
				setPlatforms([]);
				setFeatures([]);
				setCustomFeature("");
				setCategory("");
				setUsers("");
				break;
			case "Website Development":
				setQuestions(websiteQuestions);
				setService(newSelected.title);
				setPlatforms([]);
				setFeatures([]);
				setCustomFeature("");
				setCategory("");
				setUsers("");
				break;
			default:
				setQuestions(newQuestions);
				break;
		}
	};

	const getTotal = () => {
		let cost = 0;

		const selections = questions
			.map(({ options }) => options.filter((option) => option.selected))
			.filter((question) => question.length > 0);

		selections.map((options) => options.map((option) => (cost += option.cost)));

		if (questions.length > 2) {
			const userCost = questions
				.filter(
					(question) => question.title === "How many users do you expect?"
				)
				.map((question) =>
					question.options.filter((option) => option.selected)
				)[0][0];

			setUsers(userCost.title);

			cost -= userCost.cost;
			cost *= userCost.cost;
		}

		setTotal(cost);
	};

	const getPlatforms = () => {
		let newPlatforms = [];

		if (questions.length > 2) {
			questions
				.filter(
					(question) =>
						question.title === "Which platforms do you need supported?"
				)
				.map((question) =>
					question.options.filter((option) => option.selected)
				)[0]
				.map((option) => newPlatforms.push(option.title));

			setPlatforms(newPlatforms);
		}
	};

	const getFeatures = () => {
		let newFeatures = [];

		if (questions.length > 2) {
			questions
				.filter(
					(question) =>
						question.title === "Which features do you expect to use?"
				)
				.map((question) => question.options.filter((option) => option.selected))
				.map((option) =>
					option.map((newFeature) => newFeatures.push(newFeature.title))
				);
		}

		setFeatures(newFeatures);
	};

	const getCustomFeature = () => {
		if (questions.length > 2) {
			const newCustomFeature = questions
				.filter(
					(question) =>
						question.title ===
						"What type of custom features do you expect to need?"
				)
				.map((question) =>
					question.options.filter((option) => option.selected)
				)[0][0].title;

			setCustomFeature(newCustomFeature);
		}
	};

	const getCategory = () => {
		if (questions.length === 2) {
			const newCategory = questions
				.filter(
					(question) =>
						question.title === "Which type of website are you wanting?"
				)[0]
				.options.filter((option) => option.selected)[0].title;

			setCategory(newCategory);
		}
	};

	const sendEstimate = () => {
		setLoading(true);

		axios
			.get(
				"https://us-central1-arc-development-ecfb5.cloudfunctions.net/sendMail",
				{
					params: {
						name,
						email,
						phone,
						message,
						total,
						category,
						service,
						platforms,
						features,
						customFeature,
						users,
					},
				}
			)
			.then((res) => {
				setLoading(false);
				setAlert({
					open: true,
					message: "Estimate placed successfully!",
					backgroundColor: "#4bb543",
				});
				setDialogOpen(false);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
				setAlert({
					open: true,
					message: "Something went wrong, please try again!",
					backgroundColor: "#ff3232",
				});
			});
	};

	const estimateDisabled = () => {
		let disabled = true;

		const emptySelections = questions
			.map((question) => question.options.filter((option) => option.selected))
			.filter((question) => question.length === 0);

		// Condition for websites selection
		if (questions.length === 2) {
			if (emptySelections.length === 1) {
				disabled = false;
			}
		}
		// Condition for first question selection
		else if (questions.length === 1) {
			disabled = true;
		}
		// Condition for software/mobile apps selection
		else {
			const featuresLength = questions
				.slice(2, 4)
				.map((question) => question.options.filter((option) => option.selected))
				.filter((options) => options.length > 0).length;
			if (
				questions.length > 2 &&
				((featuresLength === 2 && emptySelections.length === 1) ||
					(featuresLength === 1 && emptySelections.length === 2))
			) {
				disabled = false;
			}
		}

		return disabled;
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

	// styled components
	const Icon = styled("img")(() => ({
		width: "12em",
		height: "10em",
	}));

	const SpecialText = styled("span")(() => ({
		fontFamily: "Raleway",
		fontWeight: 700,
		fontSize: "1.5rem",
		color: theme.palette.common.orange,
	}));

	// selection jsx
	const softwareSelection = (
		<Grid container direction="column">
			{/* -----First Option Check----- */}
			<Grid
				item
				container
				alignItems="center"
				style={{ marginBottom: "1.25em" }}
			>
				<Grid item sm={2}>
					<img src="/assets/check.svg" alt="checkmark" />
				</Grid>
				<Grid item sm={10} sx={sx.paragraph}>
					<Typography variant="body1">
						You want {service}
						{platforms.length > 0
							? ` for ${
									//if only web application is selected...
									platforms.indexOf("Web Application") > -1 &&
									platforms.length === 1
										? //then finish sentence here
										  "a Web Application."
										: //otherwise, if web application and another platform is selected...
										platforms.indexOf("Web Application") > -1 &&
										  platforms.length === 2
										? //then finish the sentence here
										  `a Web Application and an ${platforms[1]}.`
										: //otherwise, if only one platform is selected which isn't web application...
										platforms.length === 1
										? //then finish the sentence here
										  `an ${platforms[0]}`
										: //otherwise, if other two options are selected...
										platforms.length === 2
										? //then finish the sentence here
										  "an iOS Application and an Android Application."
										: //otherwise if all three are selected...
										platforms.length === 3
										? //then finish the sentence here
										  "a Web Application, an iOS Application, and an Android Application."
										: null
							  }`
							: null}
					</Typography>
				</Grid>
			</Grid>
			{/* -----Second Option Check----- */}
			<Grid
				item
				container
				alignItems="center"
				style={{ marginBottom: "1.25em" }}
			>
				<Grid item sm={2}>
					<img src="/assets/check.svg" alt="checkmark" />
				</Grid>
				<Grid item sm={10} sx={sx.paragraph}>
					<Typography variant="body1">
						{"with "}
						{/* if we have features... */}
						{features.length > 0
							? //...and there's only 1...
							  features.length === 1
								? //then end the sentence here
								  `${features[0]}.`
								: //otherwise, if there are two features...
								features.length === 2
								? //...then end the sentence here
								  `${features[0]} and ${features[1]}.`
								: //otherwise, if there are three or more features...
								  features
										//filter out the very last feature...
										.filter((feature, index) => index !== features.length - 1)
										//and for those features return their name...
										.map((feature, index) => (
											<span key={index}>{`${feature}, `}</span>
										))
							: null}
						{features.length > 2
							? //...and then finally add the last feature with 'and' in front of it
							  ` and ${features[features.length - 1]}.`
							: null}
					</Typography>
				</Grid>
			</Grid>
			{/* -----Third Option Check----- */}
			<Grid item container alignItems="center">
				<Grid item sm={2}>
					<img src="/assets/check.svg" alt="checkmark" />
				</Grid>
				<Grid item sm={10} sx={sx.paragraph}>
					<Typography variant="body1">
						The custom features will be of&nbsp;
						{customFeature.toLowerCase()}
						{`, and the project will be used by about ${users} users.`}
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);

	const websiteSelection = (
		<Grid container direction="column" style={{ marginTop: "14em" }}>
			{/* -----First Option Check----- */}
			<Grid item container alignItems="center">
				<Grid item sm={2}>
					<img src="/assets/check.svg" alt="checkmark" />
				</Grid>
				<Grid item sm={10}>
					<Typography variant="body1">
						You want
						{category === "Basic"
							? " a Basic Website."
							: ` an ${category} Website.`}
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);

	// animation options
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
			<Grid
				item
				container
				direction="column"
				alignItems={matchesLG ? "center" : undefined}
				lg
			>
				<Grid
					item
					style={{
						marginTop: "2em",
						marginLeft: matchesLG ? 0 : "5em",
					}}
				>
					<Typography variant="h2" align={matchesLG ? "center" : "left"}>
						Estimate
					</Typography>
				</Grid>
				<Grid
					item
					style={{
						marginRight: matchesLG ? 0 : "10em",
						maxWidth: "50em",
						marginTop: "7.5em",
					}}
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
				style={{ marginRight: matchesLG ? 0 : "2em", marginBottom: "25em" }}
			>
				{/* -----Question----- */}
				{questions
					.filter((question) => question.active)
					.map(({ title, subtitle, options }, index) => (
						<Fragment key={index}>
							{/* -----Title----- */}
							<Grid item>
								<Typography
									variant="h2"
									align="center"
									style={{
										fontWeight: 500,
										fontSize: "2.25rem",
										marginTop: "5em",
										lineHeight: 1.25,
										marginLeft: matchesMD ? "1em" : 0,
										marginRight: matchesMD ? "1em" : 0,
									}}
								>
									{title}
								</Typography>
								<Typography
									variant="body1"
									align="center"
									style={{ marginBottom: "2.5em" }}
									gutterBottom
								>
									{subtitle}
								</Typography>
							</Grid>
							{/* -----Options----- */}
							<Grid item container>
								{options.map(
									({ id, title, subtitle, selected, icon, iconAlt }, index) => (
										<Grid
											key={index}
											item
											container
											direction="column"
											md
											onClick={() => handleSelect(id)}
											component={Button}
											style={{
												display: "grid",
												textTransform: "none",
												backgroundColor: selected
													? theme.palette.common.orange
													: null,
												borderRadius: 0,
												marginBottom: matchesMD ? "1.5em" : 0,
											}}
										>
											<Grid item style={{ maxWidth: "14em" }}>
												<Typography
													variant="h6"
													align="center"
													style={{ marginBottom: "1em" }}
												>
													{title}
												</Typography>
												<Typography variant="caption" align="center">
													{subtitle}
												</Typography>
											</Grid>
											<Grid item>
												<Icon src={icon} alt={iconAlt} />
											</Grid>
										</Grid>
									)
								)}
							</Grid>
						</Fragment>
					))}
				{/* -----Arrows----- */}
				<Grid
					item
					container
					justifyContent="space-between"
					style={{ width: "18em", marginTop: "3em" }}
				>
					<Grid item>
						<IconButton
							disabled={navigationPreviousDisabled()}
							onClick={previousQuestion}
						>
							<img
								src={
									navigationPreviousDisabled()
										? "/assets/backArrowDisabled.svg"
										: "/assets/backArrow.svg"
								}
								alt="previous question"
							/>
						</IconButton>
					</Grid>
					<Grid item>
						<IconButton
							disabled={navigationNextDisabled()}
							onClick={nextQuestion}
						>
							<img
								src={
									navigationNextDisabled()
										? "/assets/forwardArrowDisabled.svg"
										: "/assets/forwardArrow.svg"
								}
								alt="next question"
							/>
						</IconButton>
					</Grid>
				</Grid>
				{/* -----Get Estimate Button----- */}
				<Grid item>
					<Button
						variant="contained"
						disabled={estimateDisabled()}
						onClick={() => {
							setDialogOpen(true);
							getTotal();
							getPlatforms();
							getFeatures();
							getCustomFeature();
							getCategory();
						}}
						sx={sx.estimateButton}
					>
						Get Estimate
					</Button>
				</Grid>
			</Grid>
			{/* -----Dialog----- */}
			<Dialog
				open={dialogOpen}
				PaperProps={{ style: { padding: "1em" } }}
				fullWidth
				maxWidth="lg"
				fullScreen={matchesSM}
				style={{ zIndex: theme.zIndex.modal + 2 }}
				onClose={() => setDialogOpen(false)}
			>
				{/* -----Heading----- */}
				<Grid container justifyContent="center">
					<Grid item style={{ margin: "1em 0" }}>
						<Typography variant="h2" align="center">
							Estimate
						</Typography>
					</Grid>
				</Grid>
				<DialogContent>
					<Grid
						container
						justifyContent="space-around"
						direction={matchesMD ? "column" : "row"}
						alignItems={matchesMD ? "center" : undefined}
					>
						{/* -----Left----- */}
						<Grid
							item
							container
							direction="column"
							md={7}
							style={{ maxWidth: "20em" }}
						>
							{/* -----Name----- */}
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
							{/* -----Email----- */}
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
							{/* -----Phone Number----- */}
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
							{/* -----Message----- */}
							<Grid item>
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
							{/* -----Estimate----- */}
							<Grid item sx={sx.paragraph}>
								<Typography
									variant="body1"
									paragraph
									style={{ lineHeight: 1.25 }}
								>
									We can create this digital solution for an estimated&nbsp;
									<SpecialText>${total.toFixed(2)}</SpecialText>
								</Typography>
								<Typography variant="body1" paragraph>
									Fill out your name, phone number and email, place your
									request, and we'll get back to you with details moving forward
									and a final price.
								</Typography>
							</Grid>
						</Grid>
						{/* -----Right----- */}
						<Grid
							item
							container
							direction="column"
							alignItems={matchesMD ? "center" : undefined}
							md={5}
							style={{ maxWidth: "30em" }}
						>
							{/* -----Checkmarks----- */}
							<Grid item sx={{ display: { xs: "none", md: "block" } }}>
								{questions.length > 2 ? softwareSelection : websiteSelection}
							</Grid>
							{/* -----Buttons----- */}
							<Grid
								item
								container
								direction={matchesMD ? "column" : "row"}
								alignItems="center"
								style={{ marginTop: "5em" }}
							>
								{/* -----Place Request Button----- */}
								<Grid item>
									<Button
										variant="contained"
										disabled={
											name.length === 0 ||
											email.length === 0 ||
											phone.length === 0 ||
											message.length === 0 ||
											phoneHelper.length !== 0 ||
											emailHelper.length !== 0
										}
										onClick={sendEstimate}
										sx={sx.estimateButton}
										style={{ marginTop: 0 }}
									>
										{loading ? (
											<CircularProgress />
										) : (
											<Fragment>
												Place Request
												<img
													src="/assets/send.svg"
													alt="paper airplane"
													style={{ marginLeft: "0.5em" }}
												/>
											</Fragment>
										)}
									</Button>
								</Grid>
								{/* -----Cancel Button----- */}
								<Grid
									item
									style={{
										margin: matchesMD ? "1em 0" : "0 0 0 0.5em",
									}}
								>
									<Button
										style={{ fontWeight: 300 }}
										onClick={() => setDialogOpen(false)}
									>
										Cancel
									</Button>
								</Grid>
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
		</Grid>
	);
}

export default Estimate;
