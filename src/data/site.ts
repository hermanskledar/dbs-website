export const site = {
	name: "Die Blauwe Schuite",
	motto: "Numerus Stultorum Infinitus Est",
	mottoNl: "Het getal der dwazen is oneindig",
	kind: "Herendispuut",
	association: "T.S.C. St. Olof",
	associationUrl: "https://olof.nl",
	foundedLabel: "9 oktober 1942",
	foundedYear: "1942",
	email: "dieblauweschuite@hotmail.com",
	phoneDisplay: "+31 6 2831 6814",
	phoneHref: "tel:+31628316814",
	phoneName: "Yannick",
	instagram: "dieblauweschuite",
	instagramUrl: "https://instagram.com/dieblauweschuite",
	kvk: "68261403",
	iban: "NL95 ABNA 0251 2786 11",
	houseName: "Enugu",
	address: {
		street: "Korvelseweg 78",
		postcode: "5025 JJ",
		city: "Tilburg",
	},
	map: {
		lat: 51.5517883,
		lon: 5.0767959,
	},
} as const;

export const nav = [
	{ href: "/", label: "Home" },
	{ href: "/bestuur", label: "Bestuur" },
	{ href: "/leden", label: "Leden" },
	{ href: "/huis", label: "Huis" },
	{ href: "/contact", label: "Contact" },
] as const;

export const board = [
	{
		name: "Mats Deckers",
		office: "Vaermeester",
		role: "Voorzitter",
		since: 2024,
		photo: undefined as string | undefined,
		focus: "center 30%",
	},
	{
		name: "Yannick Kremers",
		office: "Journaelscrivère",
		role: "Secretaris",
		since: 2023,
		photo: "/images/leden/yannick.png",
		focus: "center 20%",
	},
	{
		name: "Faas Jongbloed",
		office: "Gelaghmeester",
		role: "Penningmeester",
		since: 2025,
		photo: "/images/leden/faas.jpg",
		focus: "center 18%",
	},
] as const;

export const members = [
	{ name: "Fokke Klöpping", since: 2018, photo: "/images/leden/fokke.jpg", focus: "center 35%" },
	{ name: "Danny Ester", since: 2019, photo: "/images/leden/danny.jpg", focus: "center 30%" },
	{ name: "Niek Verdegaal", since: 2020, photo: "/images/leden/niek.jpg", focus: "center 30%" },
	{ name: "Nando Pelgrom", since: 2020, photo: "/images/leden/nando.jpg", focus: "center 30%" },
	{ name: "Riley Roodenburg", since: 2021, photo: "/images/leden/riley.jpg", focus: "center 30%" },
	{ name: "Stijn Bogaert", since: 2021, photo: "/images/leden/stijn.jpg", focus: "center 30%" },
	{ name: "Ties Rollingswier", since: 2021, photo: "/images/leden/ties.jpg", focus: "center 30%" },
	{ name: "Maurits Vonhögen", since: 2022, photo: "/images/leden/maurits.jpg", focus: "center 25%" },
	{ name: "Oliver Rijsman", since: 2022, photo: "/images/leden/oliver.jpg", focus: "center 25%" },
	{ name: "Julius Broekhof", since: 2022, photo: "/images/leden/julius.jpg", focus: "center 25%" },
	{ name: "Koen Holst", since: 2023, photo: undefined, focus: "center" },
	{ name: "Machiel van Velden", since: 2023, photo: undefined, focus: "center" },
	{ name: "Yannick Kremers", since: 2023, photo: "/images/leden/yannick.png", focus: "center 20%" },
	{ name: "Gabriel te Slaa", since: 2024, photo: undefined, focus: "center" },
	{ name: "Mats Deckers", since: 2024, photo: undefined, focus: "center" },
	{ name: "Faas Jongbloed", since: 2025, photo: "/images/leden/faas.jpg", focus: "center 18%" },
	{ name: "Rein Bakker", since: 2025, photo: "/images/leden/rein.jpg", focus: "center 20%" },
] as const;

export const birthdays = [
	{ name: "Yannick Kremers", when: "7 november", datetime: "--11-07" },
	{ name: "Maurits Vonhögen", when: "27 november", datetime: "--11-27" },
	{ name: "Riley Roodenburg", when: "29 januari", datetime: "--01-29" },
	{ name: "Julius Broekhof", when: "5 maart", datetime: "--03-05" },
	{ name: "Juriaan", when: "7 maart", datetime: "--03-07" },
] as const;

export function initials(name: string) {
	return name
		.split(/\s+/)
		.filter((part) => part !== "van" && part !== "te" && part !== "de")
		.map((part) => part[0])
		.join("")
		.slice(0, 2)
		.toUpperCase();
}
