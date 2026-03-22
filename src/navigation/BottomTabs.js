// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PaymentScreen from '../screens/PaymentScreen';
import ContactScreen from '../screens/ContactUsScreen';
import HomeScreen from '../screens/HomeScreen';
import IntroScreen from '../screens/IntroScreen';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={{ headerShown: true, headerTintColor: '#000000' }}
    >
      <Tabs.Screen name="ContactScreen" component={ContactScreen} />
      <Tabs.Screen
        name="IntroScreen"
        component={IntroScreen}
        options={{ headerBackVisible: true }}
      />

      <Tabs.Screen name="HomeScreen" component={HomeScreen} />
      <Tabs.Screen name="PaymentScreen" component={PaymentScreen} />
    </Tabs.Navigator>
  );
};

export default BottomTabs;
