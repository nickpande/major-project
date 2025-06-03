import React from 'react';

function DropDown({ title, options, func }) {
  return (
    <div className="select">
      <select defaultValue="" onChange={func} name="format" id="format">
        <option value="" disabled>{title}</option>
        {options.map((o, i) => (
          <option key={i} value={o}>
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
