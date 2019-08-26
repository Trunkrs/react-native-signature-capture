#import "TRNSignaturePadCanvasView.h"

#import <UIKit/UIKit.h>
#import <React/RCTView.h>

@class TRNSignaturePadViewManager;

@interface TRNSignatureView : RCTView

@property (nonatomic, strong) TRNSignaturePadCanvasView *sign;
@property (nonatomic, strong) TRNSignaturePadViewManager *manager;

// Event props
@property (nonatomic, copy) RCTBubblingEventBlock onSave;
@property (nonatomic, copy) RCTBubblingEventBlock onDragStart;
@property (nonatomic, copy) RCTBubblingEventBlock onDragEnd;

-(void) onSaveButtonPressed;
-(void) onClearButtonPressed;
-(void) saveImage;
-(void) erase;
@end
