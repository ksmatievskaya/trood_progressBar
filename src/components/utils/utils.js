
export const getRndColor = () => {
    let rndColor = Math.floor(Math.random() * 16777215).toString(16);
    let result = `#${rndColor}`;

    return result;
}
