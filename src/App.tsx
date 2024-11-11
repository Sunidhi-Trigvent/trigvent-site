import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";
// import Header from "./view/layout/header";
// import Footer from "./view/layout/footer";

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <p>HEllo!</p> */}
      {/* <Footer /> */}
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
