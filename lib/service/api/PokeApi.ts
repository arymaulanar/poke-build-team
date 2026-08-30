
export async function fetchHandler<T>(
    url: string
): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(
            `Error: ${response.status} ${response.statusText}`,
        );
    }
    
    return await response.json();
}
