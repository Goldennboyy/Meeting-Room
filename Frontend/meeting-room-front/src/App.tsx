import AvailableRooms from "./components/AvailableRooms";
import Bookroom from "./components/Book-room";
import Layout from "./components/Layout";
import { UserSelection } from "./components/UserSelection";

function App() {
  return (
    <Layout pageTitle="Meeting Room App">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
        <div className=" mb-20 flex flex-col space-y-4">
          <h1 className="text-2xl font-bold">Pick a user to book a room</h1>
          <UserSelection />
        </div>
        <div className="">
          <AvailableRooms />
        </div>
      </div>

      <Bookroom />
    </Layout>
  );
}

export default App;
