import { Fragment } from "react"
import MealsSummery from "./MealsSummery.js"
import AvailableMeals from "./AvailableMeals.js"

const Meals = () => {
    return (
        <Fragment>
            <MealsSummery />
            <AvailableMeals />
        </Fragment>
    )
}
export default Meals;