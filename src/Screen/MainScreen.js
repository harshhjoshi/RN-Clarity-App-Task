import React from 'react';
import { View, Button } from 'react-native';
import TrackingPermissionModule from '../Modules/TrackingPermissionModule'; // Adjust the import path

const MainScreen = ({ navigation }) => {
  const handleRequestPermission = async () => {
    try {
      const status = await TrackingPermissionModule.requestTrackingAuthorization();
      if (status === 'authorized') {
        navigation.navigate('PermissionGrantedScreen');
      } else {
        navigation.navigate('CustomPermissionScreen');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Button title="Request Tracking Permission" onPress={handleRequestPermission} />
    </View>
  );
};

export default MainScreen;
