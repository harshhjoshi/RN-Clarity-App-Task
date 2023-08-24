#import "TrackingPermissionModule.h"
#import <AppTrackingTransparency/AppTrackingTransparency.h>

@implementation TrackingPermissionModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(requestTrackingAuthorization:(RCTPromiseResolveBlock)resolve
                                        rejecter:(RCTPromiseRejectBlock)reject) {
  if (@available(iOS 14, *)) {
    [ATTrackingManager requestTrackingAuthorizationWithCompletionHandler:^(ATTrackingManagerAuthorizationStatus status) {
      if (status == ATTrackingManagerAuthorizationStatusAuthorized) {
        resolve(@"authorized");
      } else {
        reject(@"permission_denied", @"Permission denied", nil);
      }
    }];
  } else {
    resolve(@"authorized");
  }
}

RCT_EXPORT_METHOD(getTrackingAuthorizationStatus:(RCTPromiseResolveBlock)resolve
                                           rejecter:(RCTPromiseRejectBlock)reject) {
  if (@available(iOS 14, *)) {
    ATTrackingManagerAuthorizationStatus status = [ATTrackingManager trackingAuthorizationStatus];
    switch (status) {
      case ATTrackingManagerAuthorizationStatusAuthorized:
        resolve(@"authorized");
        break;
      case ATTrackingManagerAuthorizationStatusDenied:
        resolve(@"denied");
        break;
      case ATTrackingManagerAuthorizationStatusNotDetermined:
        resolve(@"not_determined");
        break;
      case ATTrackingManagerAuthorizationStatusRestricted:
        resolve(@"restricted");
        break;
      default:
        resolve(@"unknown");
        break;
    }
  } else {
    resolve(@"authorized");
  }
}

@end
