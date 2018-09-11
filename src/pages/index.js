import { createStackNavigator } from "react-navigation";
import HomePage from "./HomePage";
import CounterPage from "./CounterPage";

const StackNavigator = createStackNavigator(
  {
    Home: HomePage,
    Counter: CounterPage
  },
  { initialRouteName: "Home" }
);

export default StackNavigator;
