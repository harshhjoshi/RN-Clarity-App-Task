import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TrackingPermissionComponent from './src/Component/TrackingPermissionComponent';
import PermissionGrantedScreen from './src/Component/PermissionGrantedScreen';
import PermissionDeniedScreen from './src/Component/PermissionDeniedScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TrackingPermission">
        <Stack.Screen name="TrackingPermission" component={TrackingPermissionComponent} options={{ title: 'Tracking Permission' }} />
        <Stack.Screen name="PermissionGranted" component={PermissionGrantedScreen} options={{ title: 'Permission Granted' }} />
        <Stack.Screen name="PermissionDenied" component={PermissionDeniedScreen} options={{ title: 'Permission Denied' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Some Notes:-
// The Application left the Functionality for Handling That Functions but The code is Completed in 3 Hours.
// I Can Implement This But i need some time to Complete this Code.
// Added Modules Inn IOS FIles and Implement in Modules Folder.
// Modules Used Via Screens & Components
// App.js Having all the Screens Imported
// I Can use Typescript also.
// Not Implemented Proper Design because Focusing on Logical Part.
// Need to improve Native Modules Part.

export default App;
