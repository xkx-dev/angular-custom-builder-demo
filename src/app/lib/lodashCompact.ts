
export const compactedVALUE = (async () => {
    const {
        default: { compact },
    } = await import('lodash');
    return compact([0, 1, false, 2, '', 3]);
})();