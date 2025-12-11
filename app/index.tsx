import { Button } from "@/components/Button";
import { Text, View } from "react-native";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Edit app/index.tsx to edit this screen.</Text>
            <Button
                title="Aggiungi Workout"
                onPress={() => { }}
                variant="primary"
            />
        </View>
    );
}
