function LangComponent({ lang }: { lang: string }) {
	const country = lang.split("-")[1].toLowerCase();

	return (
		<>
			<img
				src={`https://flagcdn.com/${country}.svg`}
				alt={country}
				style={{
					width: 45,
					height: 30,
					objectFit: "cover",
					borderRadius: 5,
					margin: "0 10px 0 0",
				}}
			/>
			{lang}
		</>
	);
}


const themeOptionsObject = [
	{ nameKey: "pt-BR", call: "pt-BR", content: <LangComponent lang="pt-BR"/> },
	{ nameKey: "en-US", call: "en-US", content: <LangComponent lang="en-US"/> },
];

export default themeOptionsObject;
