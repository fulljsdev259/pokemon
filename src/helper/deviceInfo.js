import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const deviceInfo = {
    width,
    height,
}

export default deviceInfo;