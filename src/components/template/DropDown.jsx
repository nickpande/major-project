import React from 'react';

function DropDown() {
  return (
    <div className="select">
      <select defaultValue="0" name="format" id="format">
        <option value="0" disabled>
          Disabled Option
        </option>
        
      </select>
    </div>
  );
}

export default DropDown;
