#import <UIKit/UIKit.h>
#import <GLKit/GLKit.h>

@class TRNSignaturePadViewManager;

@interface TRNSignaturePadCanvasView : GLKView

@property (assign, nonatomic) UIColor *strokeColor;
@property (assign, nonatomic) BOOL hasSignature;
@property (strong, nonatomic) UIImage *signatureImage;
@property (nonatomic, strong) TRNSignaturePadViewManager *manager;

- (void)erase;

- (UIImage *) signatureImage;
- (UIImage *) signatureImage: (BOOL) rotatedImage;
- (UIImage *) signatureImage: (BOOL) rotatedImage withSquare:(BOOL)square;
- (UIImage *) signatureImage: (BOOL) rotatedImage withSquare:(BOOL)square withMaxSize:(CGFloat) maxSize;
@end
