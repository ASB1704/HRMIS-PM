import './App.css';
// import { PR_Landing_page } from './PR_Landing_page';
// import APAR_Form from './APAR_Form';
import Dashboard from '../src/emp_dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App">
      {/* <PR_Landing_page/> */}
      {/* <APAR_Form/> */}

      <div class="container-fluid" id="main">
        <div class="row row-offcanvas row-offcanvas-left">

          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
