import '@/tamagui-web.css'

import {useEffect} from 'react'
import {useColorScheme} from 'react-native'
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native'
import {useFonts} from 'expo-font'
import {Link, SplashScreen, Stack} from 'expo-router'
import {Provider} from '@/app/Provider'
import {PlusSquare, Save} from "@tamagui/lucide-icons";
import {isWeb} from "tamagui";

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from 'expo-router'

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: '(tabs)',
// }

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const [interLoaded, interError] = useFonts({
        Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
        InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    })

    useEffect(() => {
        if (interLoaded || interError) {
            // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
            SplashScreen.hideAsync()
        }
    }, [interLoaded, interError])

    if (!interLoaded && !interError) {
        return null
    }

    return <RootLayoutNav/>
}

function RootLayoutNav() {
    const colorScheme = useColorScheme()

    return (
        <Provider>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <Stack>
                    <Stack.Screen
                        name="index"
                        options={{
                            title: "Home Page",
                            headerRight: () => (
                                <Link href={'/question/create'}>
                                    <PlusSquare mr={isWeb && '$5'} size="$2" cur="pointer"/>
                                </Link>
                            )
                        }}
                    />

                    <Stack.Screen
                        name="question/[id]"
                        options={{
                            title: "Question Details",
                            animation: "flip",
                        }}
                    />

                    <Stack.Screen
                        name="question/create"
                        options={{
                            title: "Create Question",
                            animation: "slide_from_right",
                            headerRight: () => (
                                <Link href={''}>
                                    <Save mr={isWeb && '$5'} size="$2" cur="pointer"/>
                                </Link>
                            )
                        }}
                    />
                </Stack>
            </ThemeProvider>
        </Provider>
    )
}
