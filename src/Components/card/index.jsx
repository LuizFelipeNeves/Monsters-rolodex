import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #95dada;
	border: 1px solid grey;
	border-radius: 5px;
	padding: 25px;
	cursor: pointer;
	-moz-osx-font-smoothing: grayscale;
	backface-visibility: hidden;
	transform: translateZ(0);
	transition: transform 0.25s ease-out;

	:hover {
		transform: scale(1.05);
	}
`

export default ({ monster }) => (
	<Card>
		<img alt="monster" src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
		<h2>{monster.name}</h2>
		<p>{monster.email}</p>
	</Card>
)
