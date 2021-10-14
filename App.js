import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tab1Screen from "./Tab1"
import tab3Screen from "./Tab3"
import tab2Screen from "./Tab2"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="tab1" component={tab1Screen} />
        <Tab.Screen name="tab2" component={tab2Screen} />
        <Tab.Screen name="tab3" component={tab3Screen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
 
