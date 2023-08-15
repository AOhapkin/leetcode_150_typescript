function longestCommonPrefix(strs: string[]): string {
    let pref: string = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(pref) !== 0) {
            pref = pref.slice(0, pref.length - 1);
            if (pref.length === 0) return "";
        }
    }

    return pref;
};