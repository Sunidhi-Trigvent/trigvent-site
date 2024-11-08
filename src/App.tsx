import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";

function App() {
  return (
    <>
      <p>HEllo!</p>
      <RouterProvider router={routers} />;
    </>
  );
}

export default App;
