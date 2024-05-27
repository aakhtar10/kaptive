import  { useState } from 'react';
import {data as SalesData} from '../db'; // Assuming db.js is located in the same directory
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
// ..
AOS.init();

const SalesTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate the index of the first and last item to be displayed on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = SalesData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div >
      <table>
        <thead>
          <tr>
            <th>Overhead</th>
            <th>Jan</th>
            <th>Feb</th>
            <th>March</th>
            <th>April</th>
            <th>May</th>
            <th>June</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td className='font-bold'>{item.Overhead}</td>
              <td>{item.Jan.toFixed(0)}</td>
              <td>{item.Feb.toFixed(0)}</td>
              <td>{item.March.toFixed(0)}</td>
              <td>{item.April.toFixed(0)}</td>
              <td>{item.May.toFixed(0)}</td>
              <td>{item.June.toFixed(0)}</td>
             
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className='button-container'>
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          <ArrowLeftIcon margin={"0 5px 0 0"}/>  Previous
        </button>
        <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastItem >= SalesData.length}>
          Next< ArrowRightIcon margin={"0 0 0 5px"}/>
        </button>
      </div>
    </div>
  );
};

export default SalesTable;
