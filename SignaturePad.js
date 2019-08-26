import React from 'react'
import {
  UIManager,
  View,
  findNodeHandle,
  requireNativeComponent,
} from 'react-native'
import PropTypes from 'prop-types'

const nativeComponentName = "TRNSignaturePad"

const TRNSignaturePad = requireNativeComponent(nativeComponentName, SignaturePad, {
  nativeOnly: { onChange: true }
});

const eventTypes = {
  onSave: "onSave",
  onDragStart: "onDragStart",
  onDragEnd: "onDragEnd",
}

const commandNames = {
  save: "saveImage",
  reset: "resetImage",
}

class SignaturePad extends React.Component {
  dispatchCommand = (commandName) => {
    const viewManagerConfig = "getViewManagerConfig" in UIManager
      ? UIManager.getViewManagerConfig(nativeComponentName)
      : UIManager[nativeComponentName]

    UIManager.dispatchViewManagerCommand(
      findNodeHandle(this),
      viewManagerConfig.Commands[commandName],
      [],
    )
  }

  saveImage() {
    this.dispatchCommand(commandNames.save)
  }

  resetImage() {
    this.dispatchCommand(commandNames.reset)
  }

  handleChange = (event) => {
    const { onSave, onDragEnd, onDragStart } = this.props
    const { nativeEvent: { eventType, ...eventArgs } } = event

    switch (eventType) {
      case eventTypes.onSave:
        onSave(eventArgs)
        break
      case eventTypes.onDragStart:
        onDragStart()
        break
      case eventTypes.onDragEnd:
        onDragEnd()
        break
      default:
        return
    }
  }

  handleSaveEvent = (event) => {
    const { nativeEvent } = event
    const { onSave } = this.props

    onSave(nativeEvent)
  }

  render() {
    return (
      <TRNSignaturePad
        {...this.props}
        onSaveEvent={this.handleSaveEvent}
        onChange={this.handleChange}
      />
    )
  }
}

SignaturePad.propTypes = {
  ...View.propTypes,
  rotateClockwise: PropTypes.bool,
  square: PropTypes.bool,
  saveImageFileInExtStorage: PropTypes.bool,
  viewMode: PropTypes.oneOf(["portrait", "landscape"]),
  showBorder: PropTypes.bool,
  showNativeButtons: PropTypes.bool,
  showTitleLabel: PropTypes.bool,
  maxSize: PropTypes.number,
  minStrokeWidth: PropTypes.number,
  maxStrokeWidth: PropTypes.number,
  strokeColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  compressionQuality: PropTypes.number,
  outputFormat: PropTypes.oneOf(['png', 'jpg']),
  onSave: PropTypes.func,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
}

SignaturePad.defaultProps = {
  rotateClockwise: false,
  square: false,
  saveImageFileInExtStorage: false,
  viewMode: "portrait",
  showBorder: false,
  showNativeButtons: false,
  showTitleLabel: false,
  strokeColor: "#000000",
  backgroundColor: "#FFFFFF",
  compressionQuality: 1,
  outputFormat: "png",
  onSave: () => null,
  onDragStart: () => null,
  onDragEnd: () => null,
}

export default SignaturePad;
