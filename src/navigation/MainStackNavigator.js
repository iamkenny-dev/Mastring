// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PaymentScreen from "../screens/PaymentScreen";
import ContactScreen from "../screens/ContactUsScreen";
import HomeScreen from "../screens/HomeScreen";
import IntroScreen from "../screens/IntroScreen";
import { createStackNavigator } from "@react-navigation/stack";

const stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <stack.Navigator screenOptions={{ headerShown: false }}>
            <stack.Screen name="IntroScreen" component={IntroScreen} />
            <stack.Screen name="ContactScreen" component={ContactScreen} />
            <stack.Screen name="HomeScreen" component={HomeScreen} />
            <stack.Screen name="PaymentScreen" component={PaymentScreen} />
        </stack.Navigator>
    );
}

export default MainStackNavigator;