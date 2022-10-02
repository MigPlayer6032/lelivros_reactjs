import "./index.css";

type Props = {
	iconUrl: string;
	iconTitle: string | undefined;
	iconHeight: number;
	iconWidth: number;
	title: JSX.Element;
	description: JSX.Element;
    iconSide: string;
};

export default function Motivo(props: Props) {
	return (
		<div className="motivo" style={{flexDirection: `${props.iconSide == "right" ? "row-reverse" : "row"}`}} >
			<div className="icon">
				<img
					src={props.iconUrl}
					alt={props.iconTitle}
					title={props.iconTitle}
					height={props.iconHeight}
					width={props.iconWidth}
				/>
			</div>
			<div className="text">
				<h1 className="title">{props.title}</h1>
				<p className="description">{props.description}</p>
			</div>
		</div>
	);
}
