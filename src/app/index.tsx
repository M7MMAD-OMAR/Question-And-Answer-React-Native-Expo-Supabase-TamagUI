import {ListItem, Text} from "tamagui";
import {FlatList} from "react-native";
import {useState} from "react";

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


    return (
        <FlatList
            data={data}
            contentContainerStyle={{padding: 20}}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item, index}: { item: Question, index: number }) => {
                return (
                    <ListItem my="$2" key={item.id}>
                        <Text>{index + 1}. {item.title}</Text>
                    </ListItem>
                );
            }}/>
    );
};

export default HomePage;
