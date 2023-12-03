
export interface Lokalizacja {
    x: number;
    y: number;
    z: number;
    czas: number
}

export type MapaCzasoprzestrzenna = (x: Lokalizacja['x'], y: Lokalizacja['y'], z: Lokalizacja['z'], czas: Lokalizacja['czas']) => number | null

export function znajdzWorek(lokalizacje: Lokalizacja[], mapa: MapaCzasoprzestrzenna): Lokalizacja | null {
    if(!lokalizacje.length) {
        return null
    }

    return lokalizacje.reduce((previousValue: Lokalizacja | null, currentValue) => {
        const mappedPreviousLocation = previousValue ? mapa(previousValue.x, previousValue.y, previousValue.z, previousValue.czas) : null
        const mappedCurrentLocation = mapa(currentValue.x, currentValue.y, currentValue.z, currentValue.czas)

        const isPreviousValueCorrect = mappedPreviousLocation !== null && !isNaN(mappedPreviousLocation);
        const isCurrentValueCorrect = mappedCurrentLocation !== null && !isNaN(mappedCurrentLocation);

        if(isPreviousValueCorrect && isCurrentValueCorrect) {
            return mappedCurrentLocation > mappedPreviousLocation ? currentValue : previousValue
        }

        if(isCurrentValueCorrect && !isPreviousValueCorrect) {
            return currentValue
        }

        if(!isCurrentValueCorrect && isPreviousValueCorrect) {
            return previousValue
        }


        return null;

    }, lokalizacje[0])
}