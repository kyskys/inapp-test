/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef} from 'react';
import {Alert, View} from 'react-native';
import WebView from 'react-native-webview';

function App(): JSX.Element {
  const webviewRef = useRef();

  /** 웹뷰 ref */
  const handleSetRef = (_ref: any) => {
    webviewRef.current = _ref;
  };

  //웹뷰에서 rn으로 값을 보낼때 함수
  const handleOnMessage = (e: {nativeEvent: {data: string}}) => {
    // postMessage 담겨있는 결과 값이 웹뷰에서 값을 출력
    console.log('콘솔', e.nativeEvent.data);
    Alert.alert(e.nativeEvent.data);
  };

  return (
    <View style={{flex: 1}}>
      <WebView
        onMessage={handleOnMessage}
        source={{uri: 'http://localhost:3001/originals/medi-society'}}
        ref={handleSetRef}
      />
    </View>
  );
}

export default App;
