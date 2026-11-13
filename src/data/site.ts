export const site = {
	name: "Skledar Natuursteen",
	legalName: "Skledar Natuursteen bv",
	tagline: "Natuursteenbedrijf in Waalwijk",
	description:
		"Skledar Natuursteen is de steenhouwerij en showroom aan de Energieweg in Waalwijk. Maatwerk in marmer, graniet, kalksteen, leisteen, Belgisch hardsteen en composiet.",
	email: "info@skledarnatuursteen.nl",
	phoneDisplay: "0416 316 620",
	phoneHref: "tel:+31416316620",
	phoneE164: "+31416316620",
	kvk: "18063823",
	btw: "NL816129678B01",
	address: {
		street: "Energieweg 1",
		postcode: "5145 NW",
		city: "Waalwijk",
	},
	geo: {
		lat: 51.694115,
		lon: 5.06501,
	},
	mapsUrl:
		"https://www.google.com/maps/search/?api=1&query=Energieweg+1%2C+5145+NW+Waalwijk",
	hours: [
		{ days: "Maandag tot en met vrijdag", short: "Ma–vr", time: "7.30–17.30" },
		{ days: "Zaterdag", short: "Zaterdag", time: "9.00–13.00" },
		{ days: "Zondag", short: "Zondag", time: "gesloten" },
	],
} as const;

export const nav = [
	{ href: "/over-ons", label: "Over ons" },
	{ href: "/binnen", label: "Binnen" },
	{ href: "/buiten", label: "Buiten" },
	{ href: "/materialen", label: "Materialen" },
	{ href: "/onderhoud", label: "Onderhoud" },
	{ href: "/contact", label: "Contact" },
] as const;

export const addressLine = `${site.address.street}, ${site.address.postcode} ${site.address.city}`;
