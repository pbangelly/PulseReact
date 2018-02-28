import React from "react"

export default () => (
<div id="about">
	<div id="title">
		ABOUT ALVAREZ & MARSAL TAXAND
	</div>
		<div  id="bio-info">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis libero leo, sit amet interdum urna scelerisque sed. Quisque vitae sodales turpis, quis hendrerit ex. Fusce magna ipsum, eleifend sed augue id, condimentum volutpat purus. Pellentesque vitae elit orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin in lorem dolor. Fusce interdum feugiat nisl. Suspendisse eu quam purus. Nulla vulputate sem eget ipsum consectetur, a lobortis felis iaculis.</p>
			<br/>
			<p>
				Nullam ipsum eros, volutpat vel faucibus ullamcorper, blandit nec urna. Curabitur porta nunc quis quam congue, venenatis vestibulum leo lacinia. Nunc finibus mollis eros, eget condimentum massa efficitur id. Nulla scelerisque metus sit amet tellus laoreet, ut aliquam velit auctor. Sed ultrices ante urna, condimentum placerat enim lacinia. </p>
		</div>
		<style jsx>{`
		#about{
			position: static;
			width:100%;
			padding:5% 15% 5% 15%;
			text-align:center;
			border-bottom: 2px solid darkBlue;
			box-shadow: 1px 3px light;
		}
		#title{
			padding-bottom:3%;
			width:100%;
			height:auto;
			text-align: center;
			color: #00355f;
			font-size: 50px;
			line-height: 58px;
		}
		#bio-info{
			color:#000000;
			font-size: 20px;
			line-height: 30px;
			transform: scaleX(1.011);
		}
		`}</style>
</div>
)