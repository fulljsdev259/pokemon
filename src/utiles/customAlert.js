import { Platform, ToastAndroid } from "react-native";

function customAlert(message) {
  if (Platform.OS === "ios") {
    alert(message);
  } else {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  }
}

export default customAlert;