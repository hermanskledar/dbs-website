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

// One line per lid. Leave photo out to show initials. Put the file in public/images/leden/.
export const members = [
	{ name: "Maurits Vonhögen", since: 2022, photo: "/images/leden/maurits.jpg", focus: "center 25%" },
	{ name: "Oliver Rijsman", since: 2022, photo: "/images/leden/oliver.jpg", focus: "center 25%" },
	{ name: "Julius Broekhof", since: 2022, photo: "/images/leden/julius.jpg", focus: "center 25%" },
	{ name: "Koen Holst", since: 2023, photo: undefined, focus: "center" },
	{ name: "Machiel van Velden", since: 2023, photo: undefined, focus: "center" },
	{ name: "Yannick Kremers", since: 2023, photo: "/images/leden/yannick.png", focus: "center 20%" },
	{ name: "Gabriel te Slaa", since: 2024, photo: undefined, focus: "center" },
	{ name: "Mats Deckers", since: 2024, photo: undefined, focus: "center" },
	{ name: "Rein Bakker", since: 2025, photo: "/images/leden/rein.jpg", focus: "center 20%" },
	{ name: "Herman Skledar", since: 2025, photo: undefined, focus: "center 18%" },
	{ name: "Sam Waals", since: 2026, photo: undefined, focus: "center 18%" },
	{ name: "Floris van Diepen", since: 2026, photo: undefined, focus: "center 18%" },
	{ name: "Bastiaan Houben", since: 2026, photo: undefined, focus: "center 18%" },
] as const;

const months = [
	"januari",
	"februari",
	"maart",
	"april",
	"mei",
	"juni",
	"juli",
	"augustus",
	"september",
	"oktober",
	"november",
	"december",
] as const;

// Day and month only, no year. The homepage orders these by the next occurrence.
export const visibleBirthdays = 5;
export const birthdays = [
	{ name: "Maurits Vonhogen", month: 11, day: 27 },
	{ name: "Julius Broekhof", month: 3, day: 5 },
	{ name: "Olivier Rijsman", month: 7, day: 9 },
	{ name: "Mats Deckers", month: 5, day: 27 },
	{ name: "Yannick Kremers", month: 11, day: 7 },
	{ name: "Gabriel Te Slaa", month: 10, day: 24 },
	{ name: "Rein Bakker", month: 10, day: 29 },
	{ name: "Herman Skledar", month: 12, day: 12 },
	{ name: "Machiel van Velden", month: 5, day: 18 },
	{ name: "Koen Holst", month: 9, day: 14 },
	{ name: "FLoris van Diepen", month: 3, day: 12 },
	{ name: "Sam Waals", month: 7, day: 22 },
	{ name: "Bastiaan Houben", month: 8, day: 21 },
] as const;

export type Birthday = (typeof birthdays)[number];

/** Sort key that wraps past dates into next year, so the soonest birthday comes first. */
export function nextBirthdayKey(month: number, day: number, now = new Date()) {
	const today = (now.getMonth() + 1) * 100 + now.getDate();
	const key = month * 100 + day;
	return key < today ? key + 1300 : key;
}

export function upcomingBirthdays(now = new Date()) {
	return [...birthdays]
		.map((item) => ({
			...item,
			when: `${item.day} ${months[item.month - 1]}`,
			datetime: `--${String(item.month).padStart(2, "0")}-${String(item.day).padStart(2, "0")}`,
		}))
		.sort((a, b) => nextBirthdayKey(a.month, a.day, now) - nextBirthdayKey(b.month, b.day, now));
}

export function initials(name: string) {
	return name
		.split(/\s+/)
		.filter((part) => part !== "van" && part !== "te" && part !== "de")
		.map((part) => part[0])
		.join("")
		.slice(0, 2)
		.toUpperCase();
}
