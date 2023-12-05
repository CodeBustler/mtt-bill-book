import React, { useRef } from "react";
import Logo from "../assets/mtt-logo.png";

function Reciept() {
	const a4DivRef = useRef(null);

	const printA4Div = () => {
		const printWindow = window.open("", "_blank");

		if (printWindow) {
			printWindow.document.write(
				"<html><head><title>Print</title></head><body>",
			);
			printWindow.document.write(a4DivRef.current.innerHTML);
			printWindow.document.write("</body></html>");

			printWindow.document.close();
			printWindow.print();
		} else {
			console.error("Unable to open print window");
		}
	};
	return (
		<div className="reciept-page">
			{/*BUTTONS*/}
			<div className="left-btns">
				<button className="btn btn-primary">Bill Template</button>
				<button className="btn btn-primary">Driver Allowance</button>
				<button className="btn btn-primary">Toll & Parking</button>
				<button className="btn btn-warning">State Tax</button>
				<button className="btn btn-warning">Other</button>
			</div>
			{/*RECIEPT*/}
			<div className="reciept" ref={a4DivRef}>
				<div className="logo-contact">
					<img src={Logo} alt="logo" />
					<div className="contacts">
						<p>9866215527</p>
						<p>9866249212</p>
						<p>9866249212</p>
					</div>
				</div>
			</div>
			<div className="right-btns">
				<button onClick={printA4Div} className="btn btn-success">
					Download PDF
				</button>
			</div>
		</div>
	);
}

export default Reciept;
