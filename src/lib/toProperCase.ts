export const toProperCase = (text: string) => {
    const firstLetter = text.slice(0, 1)
    const remainingLetters = text.slice(1)
    return firstLetter.toUpperCase() + remainingLetters.toLowerCase()
}