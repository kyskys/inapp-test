/**
 * Sample React Native App/images/dody_/post/51b9838e-2664-4550-8d79-03186decbcc1/Screen Shot 2020-07-22 at 12.44.17 PM.png
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

  //웹뷰에서 RN으로 메시지를 보냈을 떄 실행되는 함수
  const handleOnMessage = (e: {nativeEvent: {data: string}}) => {
    // postMessage 담겨있는 결과 값이 웹뷰에서 값을 출력
    console.log('콘솔', e.nativeEvent.data);
    Alert.alert(e.nativeEvent.data);
  };

  return (
    <View style={{flex: 1}}>
      <WebView
        onMessage={handleOnMessage}
        source={{
          uri: 'http://localhost:3000/originals/buwoo-buwoo/checkout?ordNo=01GZE599943ATN6Q1KHBP0R2TA&metadataKey=euy3aiSh',
        }}
        ref={handleSetRef}
      />
    </View>
  );
}

export default App;
