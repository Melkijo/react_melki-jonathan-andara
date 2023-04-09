import "./App.css";
import Form from "./pages/Form";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Form />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
