import {BiSolidDownArrow , BiSolidUpArrow} from 'react-icons/bi'
import Table from './Table';
import useSort from '../components/Hooks/use-sort';

function SortableTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort( data,config );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <BiSolidUpArrow />
        <BiSolidDownArrow />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <BiSolidUpArrow />
        <BiSolidDownArrow />
      </div>
    );
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <BiSolidUpArrow />
      </div>
    );
  } else if (sortOrder === 'desc') {
    return (
      <div>
        <BiSolidDownArrow />
      </div>
    );
  }
}

export default SortableTable;
