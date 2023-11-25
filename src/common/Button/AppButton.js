import { View, Text } from "react-native";
import { Button } from 'react-native-paper';

function AppButton({title='Click me',clr='red',clickEvent}) {
    return(
        <View style={{margin:10}}>
            <Button icon="" mode="contained" onPress={() =>{clickEvent()} }>
                {title}
            </Button>
        </View>
    );
}

export default AppButton;