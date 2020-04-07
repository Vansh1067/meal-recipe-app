import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from '@react-navigation/native';
import categories from '../screens/categoriesScreen';
import categoriesMeal from '../screens/categoryMealScreen';
import melaDetails from '../screens/mealDetailScreen';


const mealNavigator=createStackNavigator({
    Categories:categories,
    MealCategory:categoriesMeal,
    MelaDetails:melaDetails
})

export default createAppContainer(mealNavigator);