import React from 'react';
import { ViewProps } from 'react-native'

export interface SignatureResult {
  encoded: string
  pathName: string
}

export interface SignaturePadProps extends ViewProps{
  rotateClockwise?: boolean
  square?: boolean
  saveImageFileInExtStorage?: boolean
  viewMode?: "portrait" | "landscape"
  showBorder?: boolean
  showNativeButtons?: boolean
  showTitleLabel?: boolean
  maxSize?: number
  minStrokeWidth?: number
  maxStrokeWidth?: number
  strokeColor?: string
  backgroundColor?: string
  compressionQuality?: number
  outputFormat?: "png" | "jpg"
  onSave?: (event: SignatureResult) => void | Promise<void>
  onDragStart?: () => void | Promise<void>
  onDragEnd?: () => void | Promise<void>
}

declare class SignaturePad extends React.Component<SignaturePadProps> {
  /**
   * Initiates saving of the signature image.
   */
  public saveImage: () => void

  /**
   * Resets the signature canvas to the initial state.
   */
  public resetImage: () => void
}

export default SignaturePad
