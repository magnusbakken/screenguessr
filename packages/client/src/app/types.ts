import { Coordinates } from "@screenguessr/api-types";

export interface GuessResult {
    guessed: Coordinates;
    actual: Coordinates;
    points: number;
}