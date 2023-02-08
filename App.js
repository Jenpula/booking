import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Col, Grid } from 'react-native-easy-grid';
import { useState } from 'react';



export default function App() {

 const [date, setDate] = useState(new Date());
 const [startDate, setStartDate] = useState('');
 const [endDate, setEndDate] = useState('');
 const [startTime, setStartTime] = useState('');
 const [endTime, setEndTime] = useState('');
 const [status, setStatus] = useState('Pick start date and time');
 const [mode, setMode] = useState('date');
 const [show, setShow] = useState(false);







  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
