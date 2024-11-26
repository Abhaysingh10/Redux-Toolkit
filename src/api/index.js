import Chance from "chance";

const chance = Chance()

export const fakeData = () => {
    return chance.name({ middle: true })
}