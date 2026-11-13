export type Piece = {
	slug: string;
	title: string;
	text: string;
	image?: string;
	alt?: string;
	width?: number;
	height?: number;
};

export type Swatch = {
	name: string;
	image: string;
	width: number;
	height: number;
};

export type StoneFamily = {
	slug: string;
	name: string;
	text: string;
	samples: Swatch[];
	also: string[];
};

export const interior: Piece[] = [
	{
		slug: "vloertegels",
		title: "Vloertegels",
		text: "In de showroom liggen natuursteen vloertegels in veel kleuren en maten. We adviseren u aan de hand van de platen zelf, zodat de tekening klopt met de ruimte.",
		image: "/images/vloer.webp",
		alt: "Hal met een zwart-witte natuurstenen tegelvloer in dambordpatroon.",
		width: 1415,
		height: 2000,
	},
	{
		slug: "keukenbladen",
		title: "Keukenbladen",
		text: "Keukenbladen maken we in eigen werkplaats, ook in een afwijkende breedte of lengte. Een achterwand of spoelbak kan uit hetzelfde blok worden gezaagd.",
		image: "/images/keukenblad.webp",
		alt: "Keukenblad van donkere natuursteen met een massieve spoelbak en gefrijnde voorzijde.",
		width: 2000,
		height: 1339,
	},
	{
		slug: "wastafelbladen",
		title: "Wastafelbladen",
		text: "Een wastafelblad maken we naar tekening of naar mal. In graniet, marmer, composiet, of in een van de bewerkingen van Belgisch hardsteen.",
		image: "/images/spoelbak.webp",
		alt: "Wastafelblad van donkere natuursteen met een uit het blad gezaagde bak en een gefrijnde voorkant.",
		width: 1400,
		height: 937,
	},
	{
		slug: "schouwen",
		title: "Schouwen",
		text: "Een schouw op maat wordt een vast punt in de kamer. Met de CNC-machine profileren we de lijsten naar uw tekening.",
		image: "/images/schouw.webp",
		alt: "Donkere natuurstenen schouw met een geprofileerde lijst.",
		width: 960,
		height: 720,
	},
	{
		slug: "spoelbakken",
		title: "Spoelbakken",
		text: "Massief of in delen verlijmd, van marmer, kalksteen, graniet of Belgisch hardsteen. De bak kan in het blad worden meegenomen.",
		image: "/images/wastafel.webp",
		alt: "Natuurstenen blad met een ingewerkte spoelbak.",
		width: 960,
		height: 720,
	},
	{
		slug: "badomrandingen",
		title: "Badomrandingen",
		text: "Een badomranding in natuursteen, in de soort en de maat die bij de badkamer past. De mogelijkheden bespreken we vrijblijvend in de showroom.",
		image: "/images/bad.webp",
		alt: "Inbouwbad met een omranding van gestapelde natuursteen en een donker blad.",
		width: 960,
		height: 720,
	},
	{
		slug: "vensterbanken",
		title: "Vensterbanken",
		text: "Vensterbanken in de dikte en breedte die het kozijn vraagt, met of zonder oren, en desgewenst met een profiel.",
	},
	{
		slug: "trappen",
		title: "Trappen",
		text: "Voor een binnentrap werken we in Belgisch hardsteen, marmer of graniet. Gepolijst, gezoet of gebrand, met of zonder antislipstrook.",
	},
	{
		slug: "sokkels",
		title: "Sokkels",
		text: "Sokkels voor beelden en objecten, op maat uit Belgisch hardsteen, kalksteen of graniet. Massief of verlijmd.",
	},
	{
		slug: "sierblokjes",
		title: "Sierblokjes",
		text: "Sierblokjes tussen het metselwerk, of onderaan een kolom of toog.",
		image: "/images/sierblok.webp",
		alt: "Geprofileerd sierblok van donkere natuursteen op een binnenhoek.",
		width: 1400,
		height: 937,
	},
	{
		slug: "overig",
		title: "Overig maatwerk",
		text: "Wat hier niet tussen staat, maken we vaak alsnog. Neem een tekening of een maat mee naar de Energieweg.",
	},
];

export const exterior: Piece[] = [
	{
		slug: "terrastegels",
		title: "Terrastegels",
		text: "Terrastegels in Belgisch hardsteen of graniet: gezoet, gevlamd of in een andere bewerking. In de showroom vergelijkt u de soorten naast elkaar.",
		image: "/images/terras.webp",
		alt: "Terras van Belgisch hardsteen in verschillende tegelmaten.",
		width: 900,
		height: 1200,
	},
	{
		slug: "deurdorpels",
		title: "Deurdorpels",
		text: "Deurdorpels maken we meestal van Belgisch hardsteen. Met plakneuten of hoge neuten, gecontramald, geschuurd of gefrijnd. De voorbeelden staan in de werkplaats.",
		image: "/images/dorpel.webp",
		alt: "Dorpel van Belgisch hardsteen onder een buitendeur.",
		width: 1400,
		height: 937,
	},
	{
		slug: "trappen",
		title: "Trappen, stoepen en bordessen",
		text: "Een stoep, trap of bordes van hardsteen geeft de entree een rustig, zwaar aanzicht. Stootborden kunnen worden gefrijnd.",
		image: "/images/stoep.webp",
		alt: "Buitentrap van hardsteen met gefrijnde stootborden.",
		width: 1400,
		height: 937,
	},
	{
		slug: "sluitstenen",
		title: "Sluitstenen",
		text: "Een sluitsteen van Belgisch hardsteen boven het raam. Geprofileerd, of met een frijnrand langs de zijkanten.",
		image: "/images/sluitsteen.webp",
		alt: "Sluitsteen van Belgisch hardsteen met een frijnrand, gemetseld in een boog boven een raam.",
		width: 1400,
		height: 937,
	},
	{
		slug: "spekbanden",
		title: "Spekbanden",
		text: "Spekbanden van Belgisch hardsteen als lijn in het metselwerk.",
		image: "/images/spekband.webp",
		alt: "Gefrijnde spekband van Belgisch hardsteen.",
		width: 1400,
		height: 937,
	},
	{
		slug: "plinten",
		title: "Plinten",
		text: "Een plint van Belgisch hardsteen of graniet langs de gevel.",
		image: "/images/plint.webp",
		alt: "Plint van Belgisch hardsteen langs een gevel.",
		width: 1400,
		height: 937,
	},
	{
		slug: "afdekkers",
		title: "Muurafdekkers en schoorsteenplaten",
		text: "Muurafdekkers, paalafdekkers en schoorsteenplaten, in meerdere modellen. We stemmen de maat af op het metselwerk.",
		image: "/images/muur.webp",
		alt: "Muurafdekkers en paalafdekkers van Belgisch hardsteen bij een toegangshek.",
		width: 1400,
		height: 935,
	},
	{
		slug: "brievenbussen",
		title: "Brievenbussen en huisnummers",
		text: "Een brievenbus losstaand of ingemetseld, op uw maat. Met een cijfer of een naam erin gegraveerd. Ook losse natuurstenen huisnummers.",
		image: "/images/brievenbus.webp",
		alt: "Brievenbus uit één plaat Belgisch hardsteen, met een klep en een gleuf.",
		width: 1400,
		height: 938,
	},
	{
		slug: "bloembakken",
		title: "Bloembakken",
		text: "Bloembakken van Belgisch hardsteen of graniet, voor binnen en voor buiten.",
		image: "/images/bloembak.webp",
		alt: "Bloembak van graniet.",
		width: 960,
		height: 720,
	},
	{
		slug: "vijverranden",
		title: "Vijverranden",
		text: "Een vijverrand op de maat die u nodig heeft, in graniet, kalksteen of Belgisch hardsteen.",
	},
	{
		slug: "tuintafels",
		title: "Tuintafels",
		text: "Een tafelblad van natuursteen, op maat gezaagd in de werkplaats.",
		image: "/images/tafel.webp",
		alt: "Tuintafel met een blad van natuursteen op een terras.",
		width: 1400,
		height: 1050,
	},
	{
		slug: "basementen",
		title: "Sokkels en basementen",
		text: "Een basement onder een overkapping of tuinhuis, of een sokkel voor buiten.",
		image: "/images/basement.webp",
		alt: "Basement van hardsteen met een gefrijnde band.",
		width: 936,
		height: 1400,
	},
	{
		slug: "raamdorpels",
		title: "Raamdorpels",
		text: "Raamdorpels van Belgisch hardsteen. De waterhol of drupgroef laten we niet doorlopen, zodat die aan de zijkant van de dorpel niet zichtbaar is.",
	},
	{
		slug: "deuromlijstingen",
		title: "Deuromlijstingen",
		text: "Een deuromlijsting in natuursteen als omkadering van de voordeur.",
	},
	{
		slug: "spuwers",
		title: "Spuwers",
		text: "Spuwers in meerdere modellen. In de showroom ligt een greep uit het aanbod.",
		image: "/images/spuwer.webp",
		alt: "Spuwer van licht natuursteen, met een holle goot.",
		width: 1400,
		height: 937,
	},
];

const swatch = (name: string, file: string): Swatch => ({
	name,
	image: `/images/stenen/${file}.webp`,
	width: 300,
	height: 200,
});

export const families: StoneFamily[] = [
	{
		slug: "marmer",
		name: "Marmer",
		text: "Marmer zagen we voor vloeren, bladen en schouwen. Elke plaat heeft een eigen tekening. In de showroom legt u de stukken naast elkaar.",
		samples: [
			swatch("Bianco Carrara C", "bianco-carrara-c"),
			swatch("Calacatta", "calacatta"),
			swatch("Nero Marquina", "nero-marquina"),
		],
		also: [
			"Crema Marfil",
			"Emperador Dark",
			"Forest Brown",
			"Giallo Atlantide",
			"Jura Graublau",
			"Moca Creme",
			"Moleanos",
			"Noir de Mazy",
			"Rosso Verona",
		],
	},
	{
		slug: "graniet",
		name: "Graniet",
		text: "Graniet is de harde steen voor aanrechten, druk belopen vloeren en werk dat buiten komt. De kleur zit in de korrel van de steen.",
		samples: [
			swatch("Kashmir White", "kashmir-white"),
			swatch("Baltic Brown", "baltic-brown"),
			swatch("Star Galaxy", "star-galaxy"),
		],
		also: [
			"African Red",
			"Angola Black",
			"Balmoral",
			"Black Pearl",
			"Imperial Red",
			"Jasberg",
			"Labrador Blue",
			"Labrador Vert",
			"Marinace Black",
			"Nero Zimbabwe",
			"Paradiso",
			"Rosa Sardo",
			"Sivakashi",
			"Tan Brown",
			"Tarn",
		],
	},
	{
		slug: "kalksteen",
		name: "Kalksteen",
		text: "Kalksteen is zachter van tekening. We adviseren over de plek: niet elke kalksteen hoort op een terras of in een keuken.",
		samples: [swatch("Massangis Clair", "massangis-clair")],
		also: ["Boisvillon", "Massangis Jaune", "Pierre de Lens"],
	},
	{
		slug: "leisteen",
		name: "Leisteen",
		text: "Leisteen houdt zijn gelaagde structuur, ook na het zagen. Geschikt voor vloeren en andere vlakken waar die tekening mag blijven zien.",
		samples: [{ ...swatch("Montauk Black", "montauk-black"), height: 201 }],
		also: ["Italian Black", "Montauk Blau"],
	},
];

export const finishes = [
	{
		title: "Bijzondere afwerkingen",
		names: [
			"Enofrost",
			"Gebikt",
			"Gebouchardeerd",
			"Gefrijnd",
			"Gegradineerd",
			"Gepunt",
			"Gesclypeerd",
			"IJsbloemen",
			"Oude frijnslag",
		],
	},
	{
		title: "Klassieke afwerkingen",
		names: [
			"Blauw gevlamd",
			"Blinkend gepolijst",
			"Donkerblauw gezoet",
			"Enodesign",
			"Enopasso",
			"Enoskin",
			"Enotouch",
			"Geschuurd",
			"Gezaagd",
			"Lichtblauw gezoet",
		],
	},
	{
		title: "Decoratieve afwerkingen",
		names: ["Enocranto", "Enoscala", "Enowave", "Enowood"],
	},
] as const;

export const careGroups = [
	{
		title: "Reinigen",
		intro: "Voor een gebruikte vloer, bouwvuil na het leggen, of het blad na het koken.",
		items: [
			{
				name: "Lithofin MN Vuiloplosser",
				text: "Grondige reiniging van natuursteen, ook bij vet en resten van verzorgingsmiddelen.",
			},
			{
				name: "Lithofin MN Cementsluierverwijderaar",
				text: "Cementsluier, roestverkleuring en aangekoekt vuil op graniet, gneis en kwartsiet. Niet op gepolijst marmer of kalksteen.",
			},
			{
				name: "Lithofin Buitenhuisreiniger",
				text: "Donkere aanslag op terrassen, paden, trappen en muren.",
			},
			{
				name: "Lithofin MN Wash & Clean",
				text: "Voor het gewone dweilen van stenen vloeren.",
			},
			{
				name: "Lithofin MN Easy-Clean",
				text: "Snel reinigen van een werkblad, voor en na het koken.",
			},
			{
				name: "Lithofin Lösefix",
				text: "Waslagen, olie, verf- en lijmresten.",
			},
			{
				name: "Lithofin Rost-Ex",
				text: "Roestvlekken. Het middel is zuurvrij.",
			},
		],
	},
	{
		title: "Beschermen",
		intro: "Impregneren maakt steen minder gevoelig voor vlekken. Het blijft onderhoud vragen.",
		items: [
			{
				name: "Lithofin MN Vlekstop",
				text: "Impregneermiddel tegen olie, vet en water. Voor keuken en badkamer.",
			},
			{
				name: "Lithofin MN Vlekstop eco",
				text: "Voor kalksteen en andere natuursteen, binnen en buiten, zonder een glanslaag.",
			},
			{
				name: "Lithofin Vlekstop W",
				text: "Op waterbasis. Prettig binnen, en geschikt voor donkere steen.",
			},
			{
				name: "Lithofin Vlekstop plus",
				text: "Impregnering die de kleur van poreuze steen ook verdiept.",
			},
			{
				name: "Lithofin Anti-Slip",
				text: "Behandeling voor gladde keramiek en natuursteen op trappen, terrassen en in hallen.",
			},
		],
	},
	{
		title: "Verzorgen",
		intro: "Een middel dat glans of kleur bijhoudt, afgestemd op de afwerking van de steen.",
		items: [
			{
				name: "Lithofin MN Polish",
				text: "Verzorging van gepolijste oppervlakken. Maakt het vlak waterafstotend.",
			},
			{
				name: "Lithofin MN Glans en Schoon",
				text: "Haalt de glans van gepolijst marmer en andere glanzende vloeren op.",
			},
			{
				name: "Lithofin Leisteenolie",
				text: "Beschermt gekleurde lei en haalt de structuur naar voren.",
			},
			{
				name: "Lithofin MN Betoncoating",
				text: "Beschermlaag voor ruwe betonoppervlakken.",
			},
		],
	},
	{
		title: "Blauwe steen",
		intro: "Belgisch hardsteen heeft een eigen bescherming en een eigen dweilmiddel.",
		items: [
			{
				name: "Lithofin MN Protector voor blauwe steen",
				text: "Eerste behandeling en periodieke bescherming, ook voor aanrechten en badkamers.",
			},
			{
				name: "Lithofin MN Onderhoudsproduct voor blauwe steen",
				text: "Voor het regelmatig dweilen. Reinigt en onderhoudt in één beurt.",
			},
		],
	},
] as const;
