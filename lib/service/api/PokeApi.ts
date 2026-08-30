
export async function fetchHandler<T>(
    url: string
): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(
            `Error: ${response.status} ${response.statusText}`,
        );
    }
    const data: unknown = await response.json();
    return data as T
}
