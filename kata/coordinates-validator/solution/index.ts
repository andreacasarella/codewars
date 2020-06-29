export function isValidCoordinates(coordinates: string): boolean {
    const validator = coordinates.match(/^(-?[\d]*(?:\.[\d]+)?)(?:,\s)(-?[\d]*(?:\.[\d]+)?)$/)?.slice(1).map(
        (value, index) => value &&
            !isNaN(parseFloat(value)) &&
            ((index == 0 && parseFloat(value) >= -90 && parseFloat(value) <= 90) ||
                (index == 1 && parseFloat(value) >= -180 && parseFloat(value) <= 180))
    )
    return validator != undefined ? !validator.some(p => !p) : false;
}