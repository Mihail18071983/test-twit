import { useState } from 'react';
import { FilterBox } from './Filter.styled';

const Filter = ({ setFilters, setUsers, setPage }) => {
  const [Checked, setChecked] = useState('all');

  const handleFilter = e => {
    setFilters(e.currentTarget.name);
    setChecked(e.currentTarget.name);
    setUsers([]);
    setPage(1);
  };

  return (
    <FilterBox>
      <div>
        <input
          name="all"
          type="radio"
          id="all"
          onChange={handleFilter}
          checked={Checked === 'all'}
        />
        <label htmlFor="all">Show all</label>
      </div>

      <div>
        <input
          name="follow"
          type="radio"
          id="follow"
          onChange={handleFilter}
          checked={Checked === 'follow'}
        />
        <label htmlFor="follow">Follow</label>
      </div>

      <div>
        <input
          name="followings"
          type="radio"
          id="followings"
          onChange={handleFilter}
          checked={Checked === 'followings'}
        />
        <label htmlFor="followings">Followings</label>
      </div>
    </FilterBox>
  );
};

export default Filter;
