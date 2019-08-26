package com.trunkrs.signaturepad;

import android.app.Activity;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class TRNReactNativeContextModule extends ReactContextBaseJavaModule {

    public TRNReactNativeContextModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "RSSignatureContextModule";
    }

    public Activity getActivity() {
        return this.getCurrentActivity();
    }
}
