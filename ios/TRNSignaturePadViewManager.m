#import "TRNSignaturePadViewManager.h"

#import <React/RCTBridgeModule.h>
#import <React/RCTBridge.h>
#import <React/RCTEventDispatcher.h>

@implementation TRNSignaturePadViewManager

@synthesize signView;

RCT_EXPORT_MODULE(TRNSignaturePad)

// Value Props
RCT_EXPORT_VIEW_PROPERTY(rotateClockwise, BOOL)
RCT_EXPORT_VIEW_PROPERTY(square, BOOL)
RCT_EXPORT_VIEW_PROPERTY(showBorder, BOOL)
RCT_EXPORT_VIEW_PROPERTY(showNativeButtons, BOOL)
RCT_EXPORT_VIEW_PROPERTY(showTitleLabel, BOOL)
RCT_EXPORT_VIEW_PROPERTY(compressionQuality, double)
RCT_EXPORT_VIEW_PROPERTY(outputFormat, NSString)
RCT_EXPORT_VIEW_PROPERTY(maxSize, CGFloat)
RCT_EXPORT_VIEW_PROPERTY(strokeColor, UIColor)
RCT_EXPORT_VIEW_PROPERTY(backgroundColor, UIColor)

// Event Props
RCT_EXPORT_VIEW_PROPERTY(onSaveEvent, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onSignStart, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onSignEnd, RCTBubblingEventBlock)

-(dispatch_queue_t) methodQueue
{
    return dispatch_get_main_queue();
}

-(UIView *) view
{
    self.signView = [[TRNSignatureView alloc] init];
    self.signView.manager = self;
    return signView;
}

// Both of these methods needs to be called from the main thread so the
// UI can clear out the signature.
RCT_EXPORT_METHOD(saveImage:(nonnull NSNumber *) reactTag)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        [self.signView saveImage];
    });
}

RCT_EXPORT_METHOD(resetImage:(nonnull NSNumber *) reactTag)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        [self.signView erase];
    });
}

-(void) emitSaved: (nonnull NSDictionary*) result
{
    if (!signView.onSaveEvent) {
        return;
    }

    signView.onSaveEvent(result);
}

-(void) emitStartSigning
{
    if (!signView.onSignStart) {
        return;
    }

    signView.onSignStart(nil);
}

-(void) emitEndSigning
{
    if (!signView.onSignEnd) {
        return;
    }

    signView.onSignEnd(nil);
}

@end

