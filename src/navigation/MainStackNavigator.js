import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PaymentScreen from "../screens/PaymentScreen";
import ContactScreen from "../screens/ContactUsScreen";
import HomeScreen from "../screens/HomeScreen";
import IntroScreen from "../screens/IntroScreen";

const stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <stack.Navigator screenOptions={{ headerShown: false }}>
            <stack.Screen name="Intro" component={IntroScreen} />
            <stack.Screen name="Contact" component={ContactScreen} />
            <stack.Screen name="Home" component={HomeScreen} />
            <stack.Screen name="Payment" component={PaymentScreen} />
        </stack.Navigator>
    );
}

export default MainStackNavigator;