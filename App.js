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



  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode('date');
  };

  const showTimePicker = () => {
    showMode('time');
  };


  function isValidEndDay(newDate) {
    let start = startDate.split('.');
    let end = newDate.split('.');
    if(parseInt(end[2]) < parseInt(start[1])) {
      return false;
    }
    else if (parseInt(end[2]) === parseInt(start[2]) &&
    parseInt(end[1]) < parseInt(start[1])) {
      return false;
    }
    else if (parseInt(end[2]) === parseInt(start[2]) &&
    parseInt(end[1]) === parseInt(start[1]) &&
    parseInt(end[0]) < parseInt(start[0])) {
      return false;
    }
    else {
      return true;
    }
  }


  function isValidEndTime(newTime) {
    if (startDate === endDate) {
      let start = startTime.split('.');
      let end = newTime.split('.');
      if (parseInt(end[0]) < parseInt(start[0]) &&
      parseInt(end[1]) <= parseInt(start[1])) {
        return false;
      }
      else if (parseInt(end[0]) === parseInt(start[0]) &&
      parseInt(end[1]) <= parseInt(start[1])) {
        return false;
      }
      else {
        return true;
      }
    }
    else {
      return true;
    }
  }

  function handleDate(current){
    let newDate =
      current.getDate() + '.' +
      (current.getMonth() + 1) + '.' +
      current.getFullYear();
    if (startDate === '') {
      setStartDate(newDate);
    }
    else {
      if (isValidEndDay(newDate)) {
        setEndDate(newDate);
      }
      else {
        setStatus('Ends must be before starts');
      }
    }
  }

  function handleTime(current) {
    let hours = current.getHours().toString();
    let minutes = current.getMinutes().toString();
    if (hours.length === 1) {
      hours = '0' + hours;
    }
    if (minutes.length === 1) {
      minutes = '0' + minutes;
    }
    let newTime = hours + ':' + minutes;
    if (startTime === '') {
      setStartTime(newTime);
      setStatus('Pick end day and time');
    }
    else {
      if (isValidEndTime(newTime)) {
        setEndTime(newTime);
        setStatus('Well done!');
      }
      else {
        setStatus('Ends must be after starts!');
      }
    }
  }

  const clearAll = () => {
    setStartDate('');
    setEndDate('');
    setStartTime('');
    setEndTime('');
    setStatus('Pick start date and time');
  }

  const onChange = (event, selectedValue) => {
    const current = selectedValue || date;
    setShow(Platform.OS === 'ios');
    if (mode === 'date') {
      handleDate(current);
    }
    else {
      handleTime(current);
    }
  };




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
