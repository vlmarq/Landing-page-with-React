import React from "react";
import Navbar from "./navbar";
import Jumbo from "./jumbo";
import Card from "./card";
import Footer from "./footer";

// include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const menu = [
		{
			label: "Home",
			url: "#"
		},
		{
			label: "About",
			url: "/"
		},
		{
			label: "Services",
			url: "#"
		},
		{
			label: "Contact",
			url: "/"
		}
	];

	const cards = [
		{
			title: "Card Title",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta porta dui, varius maximus neque tincidunt gravida. Quisque eleifend neque nisl, vitae cursus urna facilisis a.",
			buttonUrl: "#",
			buttonLabel: "Find out more!",
			imgSrc: "https://via.placeholder.com/500x325"
		},
		{
			title: "Card Title",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta porta dui, varius maximus neque tincidunt gravida. Quisque eleifend neque nisl, vitae cursus urna facilisis a.",
			buttonUrl: "#",
			buttonLabel: "Find out more!",
			imgSrc: "https://via.placeholder.com/500x325"
		},
		{
			title: "Card Title",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta porta dui, varius maximus neque tincidunt gravida. Quisque eleifend neque nisl, vitae cursus urna facilisis a.",
			buttonUrl: "#",
			buttonLabel: "Find out more!",
			imgSrc: "https://via.placeholder.com/500x325"
		},
		{
			title: "Card Title",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta porta dui, varius maximus neque tincidunt gravida. Quisque eleifend neque nisl, vitae cursus urna facilisis a.",
			buttonUrl: "#",
			buttonLabel: "Find out more!",
			imgSrc: "https://via.placeholder.com/500x325"
		}
	];

	const getCards = cards.map((item, index) => {
		return (
			<div key={index} className="col-12 col-sm-6 col-md-3">
				<Card
					title={item.title}
					description={item.description}
					buttonUrl={item.buttonUrl}
					buttonLabel={item.buttonLabel}
					imgSrc={item.imgSrc}
				/>
			</div>
		);
	});

	return (
		<div className="">
			{/* Navbar component and passes menu var  */}
			<Navbar menu={menu} brand="Start Bootstrap" />
			<div className="container">
				<Jumbo
					headline="A Warm Welcome!"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat tempor efficitur. Aliquam vestibulum rhoncus mollis. Aenean nibh est, ultrices eget pellentesque ac, dictum ac eros. Ut justo mauris, malesuada vitae felis quis, malesuada elementum eros. Nullam ipsum ipsum, ullamcorper sed libero eget, sagittis hendrerit lectus. Sed a diam mollis, tempus velit ac, lacinia velit. Proin ex ipsum, sollicitudin eget augue at, porta consectetur magna."
					buttonUrl="#"
					buttonLabel="A Call to Action"
				/>
				<div className="row">{getCards}</div>
			</div>
			<Footer footerDescription="Copyright &#169; Your Website 2020" />
		</div>
	);
}
