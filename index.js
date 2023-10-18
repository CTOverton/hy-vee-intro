/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry, LogBox} from 'react-native';
import App from '@/App';
import {name as appName} from './app.json';

LogBox.ignoreLogs([
    // See: https://github.com/react-navigation/react-navigation/issues/7839
    'Sending \`onAnimatedValueUpdate\` with no listeners registered.',
]);

AppRegistry.registerComponent(appName, () => App);
