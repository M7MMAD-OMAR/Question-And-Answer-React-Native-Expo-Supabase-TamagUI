import {Button, H6, Input, ScrollView, Text, XStack, YStack} from "tamagui";
import {useState} from "react";

const CreateQuestion = () => {
    const [title, setTitle] = useState('');
    const [answers, setAnswers] = useState(['', '']);

    const handleAddAnswer = () => {
        setAnswers([...answers, '']);
    };

    const handleAnswerChange = (text: string, index: number) => {
        const newAnswers = [...answers];
        newAnswers[index] = text;
        setAnswers(newAnswers);
    };

    const handleRemoveAnswer = (index: number) => {
        answers.length <= 2 ? alert("يجب كتابة إجابتين على الأقل") :
            setAnswers(answers.filter((_, i) => i !== index));
    };

    return (
        <ScrollView theme="green" padding="$4"
                    contentContainerStyle={{paddingBottom: 50}}>
            <H6 mb="$4">Create Question</H6>
            <Input
                placeholder="Enter question title"
                value={title}
                onChangeText={setTitle}
                mb="$8"
            />
            <YStack gap="$4">
                {answers.map((answer, index) => (
                    <XStack key={index} gap="$3" alignItems="center">
                        <Input
                            placeholder={`Answer ${index + 1}`}
                            value={answer}
                            onChangeText={(text) => handleAnswerChange(text, index)}
                            flex={1}
                        />
                        <Button
                            onPress={() => handleRemoveAnswer(index)}
                            cur={(answers.length <= 2 ? 'not-allowed' : 'pointer')}
                        >
                            <Text>Remove</Text>
                        </Button>
                    </XStack>
                ))}
                <Button w="$20" alignSelf="center" onPress={handleAddAnswer}><Text>Add Answer</Text></Button>
            </YStack>
        </ScrollView>
    );
};

export default CreateQuestion;