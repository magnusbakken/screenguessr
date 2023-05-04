import { Coordinates } from "@screenguessr/api-types";

export interface GuessResult {
    guessed: Coordinates;
    actual: Coordinates;
    midpoint: Coordinates;
    distance: number;
    points: number;
}