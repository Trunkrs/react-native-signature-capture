/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Dimensions,
} from 'react-native';

import { Header, Colors } from 'react-native/Libraries/NewAppScreen';

import SignaturePad from '@trunkrs/react-native-signature-capture'

const createDumpHandler = (name) =>
  (...args) => console.log(name, ...args)

const App = () => {
  const signatureRef = React.useRef()

  React.useEffect(() => {
    setInterval(() => {
      signatureRef.current.saveImage();
      setTimeout(() => signatureRef.current.resetImage(), 1000);
    }, 6000)
  }, [])

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <SignaturePad
                style={{ height: Dimensions.get('screen').height * 0.6 }}
                strokeColor="#201047"
                backgroundColor="#00d763"
                ref={signatureRef}
                onSave={createDumpHandler("onSave")}
                onDragEnd={createDumpHandler("onDragEnd")}
                onDragStart={createDumpHandler("onDragStart")}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
