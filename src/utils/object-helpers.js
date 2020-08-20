export const updateObjectInArray = (items, objPropsName, newObjProps, itemId) => {
    return items.map(u => {
        if (u[objPropsName] === itemId) {
            return {...u, ...newObjProps};
        }
        return u;
    });
};