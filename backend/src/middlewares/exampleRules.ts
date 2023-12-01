import { ValidationChain, body, query } from 'express-validator';

export const createRules = (): ValidationChain[] => {
    return [
        body('name', 'name must be a string').exists().isString(),
        body('description', 'description must be a string').exists().isString(),
        body().custom((value, { req }) => {
            const receivedKeys = Object.keys(value);
            const extraFields = receivedKeys.filter(key => !['name','description'].includes(key));
            if (extraFields.length > 0) {
                throw new Error(`Invalid fields: ${extraFields.join(', ')}`);
            }
            return true;
        })
    ];
};

export const updateRules = (): ValidationChain[] => {
    return [
        body('dbId', 'Id must be a string').exists().isString(),
        body('name', 'name must be a string').optional().isString(),
        body('description', 'description must be a string').optional().isString(),
        body().custom((value, { req }) => {
            const receivedKeys = Object.keys(value);
            const extraFields = receivedKeys.filter(key => !['name','description','dbId'].includes(key));
            if (extraFields.length > 0) {
                throw new Error(`Invalid fields: ${extraFields.join(', ')}`);
            }
            return true;
        })
    ];
};

export const getRules = (): ValidationChain[] => {
    return [query('id', 'id must be a string').exists().isString()];
};

export const deleteRules = (): ValidationChain[] => {
    return [query('id', 'id must be a string').exists().isString()];
};
