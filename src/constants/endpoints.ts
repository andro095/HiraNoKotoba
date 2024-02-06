

const auth : string = 'auth';

const vocabulary : string = 'vocabulary';

export const endpoints : Endpoint = {
    auth: {
        LOGIN: `${auth}`,
        REGISTER: `${auth}/register`,
    },
    vocabulary: {
        GET_CLASSES: `${vocabulary}/classes`,
        GET_FOLDERS: `${vocabulary}/folders`,
        GET_SETS: `${vocabulary}/sets`,
        GET: `${vocabulary}`,
    },
}

interface Endpoint {
    [key: string]: string | Endpoint;
}