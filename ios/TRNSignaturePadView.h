#import "TRNSignaturePadCanvasView.h"

#import <UIKit/UIKit.h>
#import <React/RCTView.h>

@class TRNSignaturePadViewManager;

@interface TRNSignatureView : RCTView

@property (nonatomic, strong) TRNSignaturePadCanvasView *sign;
@property (nonatomic, strong) TRNSignaturePadViewManager *manager;

// Event props
@property (nonatomic, copy) RCTBubblingEventBlock onSaveEvent;
@property (nonatomic, copy) RCTBubblingEventBlock onSignStart;
@property (nonatomic, copy) RCTBubblingEventBlock onSignEnd;

-(void) onSaveButtonPressed;
-(void) onClearButtonPressed;
-(void) saveImage;
-(void) erase;
@end
