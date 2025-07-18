import { Form } from "./components/Form";
import { ShowFrom } from "./components/showForm";
import { Provider } from "./context/UserContext";

export default function Home() {
  return (
  <Provider>
    <div className="justify-center align-center mt-10">      
       <Form />
       <ShowFrom/>
    </div>
  </Provider>
  );
}
