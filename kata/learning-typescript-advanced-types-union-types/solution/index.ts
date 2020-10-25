export function join(tokens: string | string[], glue?: string): string {
    if (typeof tokens === 'string') {
        return `${tokens}${glue || ''}`;
    }
    if (Array.isArray(tokens)) {
        return `${tokens.join(glue || '')}`;
    }
    throw new Error(`Expected string or string[], got '${tokens}'.`);
}