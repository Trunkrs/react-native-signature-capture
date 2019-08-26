#import "TRNSignaturePadView.h"
#import <React/RCTViewManager.h>

@interface TRNSignaturePadViewManager : RCTViewManager
@property (nonatomic, nullable, strong) TRNSignatureView *signView;

-(void) saveImage:(nonnull NSNumber *) reactTag;
-(void) resetImage:(nonnull NSNumber *) reactTag;

-(void) emitSaved:(nonnull NSDictionary*) result;
-(void) emitStartSigning;
-(void) emitEndSigning;
@end
