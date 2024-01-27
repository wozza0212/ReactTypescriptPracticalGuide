const get = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch data from server')
    }

    const data = await response.json() as unknown;
    //unknown is better than any, get more type safety
    // checkout zod and zod types
    return data;
}

export default get