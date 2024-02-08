
import { faker } from "@faker-js/faker";
export default (count,profileIds,profileEmailIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
profile: profileIds[i % profileIds.length],
profileEmail: profileEmailIds[i % profileEmailIds.length],

        };
        data = [...data, fake];
    }
    return data;
};
