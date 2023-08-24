
#import "TrackingPermissionModule.h"
#import <AppTrackingTransparency/AppTrackingTransparency.h>

@implementation TrackingPermissionModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(requestTrackingAuthorization:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
  if (@available(iOS 14, *)) {
    [ATTrackingManager requestTrackingAuthorizationWithCompletionHandler:^(ATTrackingManagerAuthorizationStatus status) {
      if (status == ATTrackingManagerAuthorizationStatusAuthorized) {
        resolve(@(YES));
      } else {
        resolve(@(NO));
      }
    }];
  } else {
    resolve(@(YES)); 
  }
}

RCT_EXPORT_METHOD(getTrackingAuthorizationStatus:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
  if (@available(iOS 14, *)) {
    ATTrackingManagerAuthorizationStatus status = [ATTrackingManager trackingAuthorizationStatus];
    resolve(@(status));
  } else {
    resolve(@(ATTrackingManagerAuthorizationStatusAuthorized)); 
  }
}

@end