import { View, Text } from 'react-native';
import { toECDSASigner } from "@zerodev/permissions/signers";
import { LATEST_KERNEL_VERSION } from "@zerodev/sdk/constants";
import { toPermissionValidator } from '@zerodev/permissions';
const App = () => {
  return (
    <View style={{ height: '100%', paddingTop: 300 }}>
      <Text style={{ color: 'red' }}>Memecaster</Text>
    </View>
  );
};

export default App;
