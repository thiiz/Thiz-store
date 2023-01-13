import FancyStyles from "./styleButton"
export default function FancyButton({ text }) {
	return (
		<FancyStyles className="fancy" href="#">
			<span className="top-key"></span>
			<span className="text">{text}</span>
			<span className="bottom-key-1"></span>
			<span className="bottom-key-2"></span>
		</FancyStyles>
	)
}