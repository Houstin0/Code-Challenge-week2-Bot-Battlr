import React from "react";
import { Dropdown, DropdownButton } from 'react-bootstrap';

function SortBar({handleSort}) {
    function handleSortBy(sortBy){
        handleSort(sortBy)
    }

 return(
    <div className="sort-bar">
      <DropdownButton variant="secondary" title="Sort by">
        <Dropdown.Item eventKey="health" onClick={() => handleSortBy('health')}>
          Health
        </Dropdown.Item>
        <Dropdown.Item eventKey="damage" onClick={() => handleSortBy('damage')}>
          Damage
        </Dropdown.Item>
        <Dropdown.Item eventKey="armor" onClick={() => handleSortBy('armor')}>
          Armor
        </Dropdown.Item>
      </DropdownButton>
    </div>
 )   
}
export default SortBar