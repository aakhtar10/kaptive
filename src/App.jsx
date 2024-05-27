
import BarChart from "./pages/BarChart";
import SalesTable from "./pages/SalesTable";
import SimpleSidebar from "./pages/SideBar";

import { ChakraProvider } from '@chakra-ui/react'


const App = () => {
  
  
  return (
    <ChakraProvider> 
    <div>
     <SimpleSidebar/>
    </div>
    </ChakraProvider>
  );
};

export default App;
