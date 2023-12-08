import { PillsInput, Pill, Combobox, CheckIcon, Group, useCombobox } from '@mantine/core';
import { useContext, useState } from 'react';
import { FilterContext } from '../context';
import { useGet } from '../hooks';


const SearchableSelect = () => {
  let groceries:string[] = []
  const {data} = useGet('tags', {sort: '-created', requestKey: null})
  if(data){
    groceries = []
    data.map((val:any) => {
      groceries = [...groceries, val.tag]
    })
  }
  
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [search, setSearch] = useState('');
  const {value, setValue} = useContext(FilterContext)


  const handleValueSelect = (val: string) => {
    setValue((current:any) =>
      current.includes(val) ? current.filter((v:any) => v !== val) : [...current, val]
    );
  }

  const handleValueRemove = (val: string) =>
    setValue((current:any) => current.filter((v:any) => v !== val));

  const values = value?.map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  const options = groceries
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value?.includes(item)}>
        <Group gap="sm">
          {value?.includes(item) ? <CheckIcon size={12} /> : null}
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
      <Combobox.DropdownTarget>
        <PillsInput onClick={() => combobox.openDropdown()}>
          <Pill.Group>
            {values}
            <Combobox.EventsTarget>
              <PillsInput.Field
                onFocus={() => combobox.openDropdown()}
                onBlur={() => combobox.closeDropdown()}
                value={search}
                placeholder="Search values"
                onChange={(event) => {
                  combobox.updateSelectedOptionIndex();
                  setSearch(event.currentTarget.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Backspace' && search.length === 0) {
                    event.preventDefault();
                    handleValueRemove(value!==undefined?value[value.length - 1]:"");
                  }
                }}
              />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length > 0 ? options : <Combobox.Empty>Nothing found...</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}

export default SearchableSelect