import EntityList from "../components/EntityList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateEntityForm from "../components/CreateEntityForm";
import EditEntityForm from "../components/EditEntityForm";
import Header from "../components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<EntityList />} />
        <Route path="/create-entity" element={<CreateEntityForm />} />
        <Route path="/edit-entity/:name" element={<EditEntityForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
