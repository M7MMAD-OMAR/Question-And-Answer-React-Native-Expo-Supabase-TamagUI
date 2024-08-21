import {ListItem, Text, View} from "tamagui";
import {FlatList} from "react-native";
import {useState} from "react";
import {router} from "expo-router";

interface Question {
    id: number
    title: string
}

const questions = [
    {'id': 1, 'title': 'How are you?'},
    {'id': 2, 'title': 'How older?'},
    {'id': 3, 'title': 'Am i on the right path?'},
]

const HomePage = () => {
    const [data, setData] = useState(questions)

    const navigationToQuestion = (id: number) => router.push(`/question/${id}`)


    return (
        <View theme="purple">
            <FlatList
                data={data}
                contentContainerStyle={{padding: 20}}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item, index}: { item: Question, index: number }) => {
                    return (
                        <ListItem
                            onPress={() => navigationToQuestion(item.id)}
                            my="$2" cur="pointer"
                            key={item.id}>
                            <Text>{index + 1}. {item.title}</Text>
                        </ListItem>
                    );
                }}/>
        </View>
    );
};

export default HomePage;
