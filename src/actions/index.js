export const travel = (payload) => {
    return {
        type: 'TRAVEL',
        payload
    }
};

export const gather = () => {
    return {
        type: 'GATHER'
    }
};

export const tippedWagon = () => {
    return {
        type: 'TIPPED_WAGON'
    }
};

export const sell = () => {
    return {
        type: 'SELL'
    }
};

export const buy = () => {
    return {
        type: 'BUY'
    }
};

export const theft = () => {
    return {
        type: 'THEFT'
    }
};