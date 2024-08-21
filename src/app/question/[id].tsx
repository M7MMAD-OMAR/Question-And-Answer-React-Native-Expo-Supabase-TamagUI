import {Button, ListItem, Text, YStack} from "tamagui";
import {useLocalSearchParams} from "expo-router";
import {useState} from "react";
import {CheckCircle2} from "@tamagui/lucide-icons";

const Answers = [
    {'id': 1, 'title': 'First Answer'},
    {'id': 2, 'title': 'Second Answer'},
    {'id': 3, 'title': 'Third Answer'}
]

const QuestionDetails = () => {
    const {id} = useLocalSearchParams();
    const [answers, setAnswers] = useState(Answers)
    const [selected, setSelected] = useState<number | null>(null);

    const handelAnswer = () => console.warn("Answered")

    return (
        <YStack gap="$4" p="$4" theme="purple">
            <Text>{id}. Title</Text>

            {answers.map((answer) => (
                <ListItem
                    br='$3' cur="pointer"
                    key={answer.id}
                    onPress={() => setSelected(answer.id)}
                    bg={selected === answer.id ? '$purple10' : '$background'}>
                    <Text>{answer.title}</Text>
                    {selected === answer.id && <CheckCircle2 fill='black' size="$1"/>}
                </ListItem>
            ))}

            <Button mt="$5" alignSelf="center" w="$20" onPress={handelAnswer}>
                Answer</Button>
        </YStack>
    );
};

export default QuestionDetails;
