import './App.css';
// import { PR_Landing_page } from './PR_Landing_page';
// import APAR_Form from './APAR_Form';
import Dashboard from '../src/emp_dashboard/Dashboard';
import Navbar from '../src/emp_dashboard/Navbar';
import Sidebar from '../src/emp_dashboard/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App">
      {/* <PR_Landing_page/> */}
      {/* <APAR_Form/> */}
      <Navbar />
      <div class="container-fluid" id="main">
        <div class="row row-offcanvas row-offcanvas-left">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
