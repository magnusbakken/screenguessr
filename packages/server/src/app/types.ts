export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface ImageData {
    url: string;
    fileName: string;
    coordinates: Coordinates;
}