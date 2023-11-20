import { COLORS } from './constants/colors';
import { Feather } from '@expo/vector-icons';

/* React Navigation */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

/* Screens */
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoruteScreen from './screens/FavoruteScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

/* Nested Drawer Navigation */
const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
        screenOptions={{
            headerStyle: {backgroundColor: COLORS.titleBackground},
            headerTintColor: 'white',
            sceneContainerStyle: {backgroundColor: COLORS.background},
            drawerContentStyle: {backgroundColor: COLORS.titleBackground},
            drawerInactiveTintColor: 'white',
            drawerActiveTintColor: COLORS.success
        }}
        >
            <Drawer.Screen 
            name='Categories' 
            component={CategoriesScreen}
            options={{
                title: 'All Categories',
                drawerIcon: ({color, size}) => (
                <Feather name="list" size={size} color={color} />
                ),
            }}
            />
            <Drawer.Screen 
            name='Favorutes' 
            component={FavoruteScreen}
            options={{
                title: 'Favorites',
                drawerIcon: ({color, size}) => (
                <Feather name="star" size={size} color={color} />
                ),
            }}
            />
        </Drawer.Navigator>
        )
    }

export const Navigation = () => {

    return (
        <>
        {/* Stack Navigation  */}
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName='MealCategories'
            screenOptions={{
                headerStyle: {backgroundColor: COLORS.titleBackground},
                headerTintColor: 'white',
                contentStyle: {backgroundColor: COLORS.background},
            }}
            >
            <Stack.Screen 
                name="MealCategories" 
                component={DrawerNavigation} 
                options={{
                title: 'All Categories',
                headerShown: false,
                }}
            />
            <Stack.Screen 
                name="MealsOverview" 
                component={MealsOverviewScreen} 
                // options={({route, navigation}: any) => {
                //   const catId = route.params?.categoryId;
                //   return {
                //     title: catId
                //   };
                // }}
                />
                <Stack.Screen 
                name="MealDetail" 
                component={MealDetailScreen} 
                options={{
                title: 'About the Meal'
                }}
            />
            </Stack.Navigator>
        </NavigationContainer>
        </>
    )
}