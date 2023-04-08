export function generateUUID() {
    let array = new Uint8Array(16);
    crypto.getRandomValues(array);
    array[6] &= 0x0f;
    array[6] |= 0x40;
    array[8] &= 0x3f;
    array[8] |= 0x80;
    let uuid = "";
    for (let i = 0; i < 16; i++) {
        uuid += array[i].toString(16).padStart(2, "0");
    }
    return uuid;
}