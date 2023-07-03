'use client';

export enum SortType {
  NAME = 'name',
  ID = 'id',
}

import { Dispatch, SetStateAction } from 'react';

interface SortProps {
  sort: string;
  setSort: Dispatch<SetStateAction<SortType>>;
}

export const Sort = ({ sort, setSort }: SortProps) => {
  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSort(e.target.value as SortType);
    console.log(e.target.value);
  };

  return (
    <div className="flex">
      <label className="mr-2">
        <input
          className="mr-2"
          type="radio"
          value={SortType.NAME}
          checked={sort === SortType.NAME}
          onChange={handleSelect}
        />
        Sort Name
      </label>
      <label>
        <input
          className="mr-2"
          type="radio"
          value={SortType.ID}
          checked={sort === SortType.ID}
          onChange={handleSelect}
        />
        Sort ID
      </label>
    </div>
  );
};
