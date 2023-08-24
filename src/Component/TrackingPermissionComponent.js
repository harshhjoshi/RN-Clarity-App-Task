import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { requestTrackingAuthorization, getTrackingAuthorizationStatus } from '../Modules/TrackingPermissionModule';

const TrackingPermissionComponent = () => {
  const [authorizationStatus, setAuthorizationStatus] = useState('');

  useEffect(() => {
    checkAuthorizationStatus();
  }, []);

  const checkAuthorizationStatus = async () => {
    const status = await getTrackingAuthorizationStatus();
    setAuthorizationStatus(status);
  };

  const handleRequestPermission = async () => {
    const granted = await requestTrackingAuthorization();
    if (granted) {
      Alert.alert('Permission Granted', 'You can now track user data.');
    } else {
      Alert.alert('Permission Denied', 'You cannot track user data.');
    }
    checkAuthorizationStatus();
  };

  return (
    <View>
      <Text>Tracking Authorization Status: {authorizationStatus}</Text>
      <Button title="Request Permission" onPress={handleRequestPermission} />
    </View>
  );
};

export default TrackingPermissionComponent;
