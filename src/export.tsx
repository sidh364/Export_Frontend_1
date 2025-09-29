import { useState } from "react";
import "./export.css";
import Popup from "./popup";

const ExportButton = () => {
	const [showPopup, setShowPopup] = useState(false);

	return (
		<div className="centered-container">
					<button
						className="centered-button"
						onClick={() => setShowPopup(true)}
					>
						<span className="centered-button-text">EXPORT CODE</span>
					</button>
			{showPopup && (
				<Popup
					onClose={() => setShowPopup(false)}
				/>
			)}
		</div>
	);
};

export default ExportButton;