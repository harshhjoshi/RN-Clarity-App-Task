import { NativeModules } from 'react-native';

const TrackingPermissionModule = {
  requestTrackingAuthorization: () => {
    return new Promise((resolve, reject) => {
      NativeModules.TrackingPermissionModule.requestTrackingAuthorization(
        (status) => {
          if (status === 'authorized') {
            resolve(true);
          } else {
            reject(new Error('Permission denied.'));
          }
        }
      );
    });
  },
  getTrackingAuthorizationStatus: () => {
    return new Promise((resolve, reject) => {
      NativeModules.TrackingPermissionModule.getTrackingAuthorizationStatus(
        (status) => {
          resolve(status);
        }
      );
    });
  },
};

export default TrackingPermissionModule;
