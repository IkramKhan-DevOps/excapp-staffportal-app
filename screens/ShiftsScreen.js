import {FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import colors from "../config/colors";
import {Ionicons} from "@expo/vector-icons";

function ShiftsScreen() {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
            startDate: '2022-22-22',
            endDate: '2022-22-22',
            startTime: '00:00',
            endTime: '12:12',
            client: 'Pepsi Corporation',
            site: 'London Street 927',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
            startDate: '2022-22-22',
            endDate: '2022-22-22',
            startTime: '00:00',
            endTime: '12:12',
            client: 'Advance Equipments',
            site: 'Islamabad F8',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
            startDate: '2022-22-22',
            endDate: '2022-22-22',
            startTime: '00:00',
            endTime: '12:12',
            client: 'Alienware Products',
            site: 'New Work Times',
        },
    ];

    const Item = ({id, startDate, endDate, startTime, endTime, client, site, onPress}) => (
        <TouchableHighlight onPress={onPress} underlayColor={colors.lightBlue}>
            <View style={styles.itemContainer}>
                <View style={styles.itemRow}>

                    <View style={{flex: 1}}>

                        <Text style={{fontWeight: "bold", fontSize: 24, color:colors.lightDark}}>{client}</Text>
                        <Text style={{fontSize: 16, color: colors.lightGrey}}>{site}</Text>

                    </View>

                    <View style={{justifyContent: "center"}}>
                        <Text><Ionicons name={"checkmark-circle"} size={40} color={"green"}/></Text>
                    </View>

                </View>

                <View style={{flexDirection: "row", marginTop:10, borderTopWidth:0,paddingTop:10, padding:10,
                    borderTopColor:colors.lightGrey}}>

                    <View style={{flex:1, flexDirection:"row"}}>
                        <Ionicons name={"timer"} size={15} color={colors.darkGrey} />
                        <Text style={{padding:0, color:colors.darkGrey}}>
                            <Text style={{fontWeight: "bold"}}>{startDate}</Text> ({startTime})
                        </Text>
                    </View>

                    <View style={{flexDirection:"row"}}>
                        <Ionicons name={"timer"} size={15} color={colors.darkGrey} />
                        <Text style={{padding:0, color:colors.darkGrey}}>
                            <Text style={{fontWeight: "bold"}}>{endDate} </Text> ({endTime})
                        </Text>
                    </View>

                </View>
            </View>
        </TouchableHighlight>
    );

    const renderItem = ({item}) => (
        <Item
            site={item.site} client={item.client}
            startDate={item.startDate} endDate={item.endDate}
            startTime={item.startTime} endTime={item.endTime}
            onPress={() => console.log("Press: ", item)}
        />
    );

    return (
        <View style={styles.container}>

            <Text style={styles.heading}>Your shifts</Text>
            <Text style={styles.subHead}>your active and completed shifts</Text>

            <View style={styles.shiftContainer}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,
        marginHorizontal: 20
    },
    shiftContainer: {
        marginTop: 20,
    },

    itemContainer: {
        padding: 10,
        backgroundColor: colors.white,
        marginVertical: 2,
        borderRadius:10,
    },
    itemRow: {
        flexDirection: "row",
        padding:10,
    },

    heading: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 0,
    },
    subHead: {
        fontSize: 16,
        fontStyle: "italic",
        color: colors.lightGrey
    },
})

export default ShiftsScreen;

