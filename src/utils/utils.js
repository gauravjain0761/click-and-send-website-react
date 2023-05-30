export const getNumberWithComma = (number) => {
    return `₹${number?.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }) ?? number}`
}

export const getOS = () => {
    var uA = navigator?.userAgent || navigator?.vendor || window?.opera;
    if ((/iPad|iPhone|iPod/.test(uA) && !window?.MSStream) || (uA?.includes('Mac') && 'ontouchend' in document)) return 'iOS';

    var i, os = ['Windows', 'Android', 'Unix', 'Mac', 'Linux', 'BlackBerry'];
    for (i = 0; i < os.length; i++) if (new RegExp(os[i], 'i').test(uA)) return os[i];
}
