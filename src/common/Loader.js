import { View, Modal, Text } from 'react-native';
import React from 'react';
import { ActivityIndicator } from 'react-native-web';

const Loader = ({ modalVisible, setModalVisible }) => {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{
          margin: 20,
          width: 200,
          height: 200,
          backgroundColor: 'white',
          borderRadius: 20,
          padding: 35,
          alignItems: 'center',
          shadowColor: '#000',
          justifyContent: "center",
          alignItems: "center",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
        }}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
