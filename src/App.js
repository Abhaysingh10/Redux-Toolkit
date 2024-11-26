import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
// import Login from './component/React Hook Form/Login';
// import UserDetails from './component/UserDetails';
import LoginComponent from "./component/login/LoginComponent";
import Customer from "./Customer/index.js";
import { QueryClient, QueryClientProvider } from "react-query";
import Sidebar from "./component/Sidebar";
import ProductCategory from "./component/ProductCategory";
import Dashboard from "./component/Dashboard";
import { LoginWithAuth } from "./component/login/LoginWithAuth";
import { Route } from "react-router-dom";
import PublicRoute from "./Authentication/PublicRoute";
import PrivateRoute from "./Authentication/PrivateRoute";
import CookieConsentBanner from "./component/Cookies/CookieConsentBanner";
import { EditableTable } from "./EditableTable/index.js";
import EDSecondWay from "./ETSecondWay/index.js";
function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <CookieConsentBanner />
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <div className="App">
            <main>
                {/* <EditableTable/> */}
                <EDSecondWay/>
              <div className="container">
                {/* <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td><i className="bi bi-pencil"></i></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td><i className="bi bi-pencil"></i></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                      <td><i className="bi bi-pencil"></i></td>
                    </tr>
                  </tbody>
                </table> */}
              </div>
              <div className="row">
                <div
                  className="col"
                  style={{ width: "70%", margin: "auto" }}
                ></div>
              </div>
            </main>
          </div>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
