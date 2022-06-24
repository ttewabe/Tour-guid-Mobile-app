import { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, Switch, Button, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

function ReservationScreen(){
    const [visitors, setVisitors] = useState(1);
    const [tourIn, setTourIn] = useState(false);
    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowCalendar(Platform.OS === 'ios');
        setDate(currentDate);
    }

    const handleReservation = () => {
        console.log('visitors:', visitors);
        console.log('tourIn:', tourIn) ;
        console.log('date:', date);
        setVisitors(1);
        setTourIn(false);
        setDate(new Date());
        setShowCalendar(false);
        setShowModal(!showModal);
    }

    const resetForm = () => {
        setVisitors(1);
        setTourIn(false);
        setDate(new Date());
        setShowCalendar(false);

    }
    return (
        <ScrollView>
            <View style={styles.formRow}>
                <Text style={styles.formLabel}>Number of Vistors:</Text>
                <Picker
                    style={styles.formItem}
                    selectedValue={visitors}
                    onValueChange={(itemValue) => setVisitors(itemValue)}> 

                    <Picker.Item label='1' value={1} />
                    <Picker.Item label='2' value={2} />
                    <Picker.Item label='3' value={3} />
                    <Picker.Item label='4' value={4} />
                    <Picker.Item label='5' value={5} />
                    <Picker.Item label='6' value={6} />
                </Picker>
            </View>
            <View style={styles.formRow}>
                <Text style={styles.formLabel}>Tour In?</Text>
                <Switch
                    style={styles.formItem}
                    value={tourIn}
                    trackColor={{ true: '#5637DD', false: null }}
                    onValueChange={(value) => setTourIn(value)}
                />
            </View>
            <View style={styles.formRow}>
                <Text style={styles.formLabel}>Tour In?</Text>
                <Button
                    onPress={() => setShowCalendar(!showCalendar)}
                    title={date.toLocaleDateString('en-US')}
                    color='#5637DD'
                    accessibilityLabel='Tap me to select a reservation date'
                />
                </View>
                {showCalendar && (
                    <DateTimePicker
                        style={styles.formItem}
                        value={date}
                        mode='date'
                        display='default'
                        onChange={onDateChange}
                    />
                )}
                <View style={styles.formRow}>
                <Button
                    onPress={() => handleReservation()}
                    title='Search Availability'
                    color='#5637DD'
                    accessibilityLabel='Tap me to search for available sites to reserve'
                />
                </View>
                <Modal
                    animationType='slide'
                    transparent={false}
                    visible={showModal}
                    onRequestClose={() => setShowModal(!showModal)}>
                
                <View style={styles.modal}>
                    <Text style={styles.modalTitle}>
                        Search Tour Site Reservations
                    </Text>
                    <Text style={styles.modalText}>
                        Number of Visitors: {visitors}
                    </Text>
                    <Text style={styles.modalText}>
                        Tour-In?: {tourIn ? 'Yes' : 'No'}
                    </Text>
                    <Text style={styles.modalText}>
                        Date: {date.toLocaleDateString('en-US')}
                    </Text>

                    <Button
                        onPress={() => {
                            setShowModal(!showModal);
                            resetForm();
                        }}
                        color='#5637DD'
                        title='Close'
                    />
                </View>
            </Modal>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },

    modal: {
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#5637DD',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }
});

export default ReservationScreen;