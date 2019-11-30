import React from 'react'
import styled from 'styled-components'
import Card from '../card'

const Div = styled.div`
	width: 85vw;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 20px;
`

export default ({ monsters }) => (
	<Div>
		{monsters.map((monster) => (
			<Card key={monster.id} monster={monster} />
		))}
	</Div>
)
