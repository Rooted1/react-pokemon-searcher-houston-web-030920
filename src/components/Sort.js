import React from 'react'
import {  Dropdown, Menu  } from 'semantic-ui-react'


const options = [
  { key: 1, text: 'Name', value: 'name' },
  { key: 2, text: 'Hit Points', value: 'hp' },
]

const Sort = (props) => (
    <Menu compact>
      <Dropdown text='Sort Pokemon By' options={options} simple item onChange={props.sortPokemon}/>
    </Menu>
)

export default Sort
