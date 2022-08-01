import React from "react";
export function Filter({
  filter,
  handleOnChangeFilter
}) {
  return <div>
          Filter :<input value={filter} onChange={handleOnChangeFilter} type="text" />
        </div>;
}
  