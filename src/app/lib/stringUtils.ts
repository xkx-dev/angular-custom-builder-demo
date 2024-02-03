
import path from 'path';
export function normalizePath(filePath: string): string {
    //@ts-ignore
    if (process && process.platform === 'win32') {
        return path.normalize(filePath.replace(/\//g, '\\'));
    }
    return path.normalize(filePath.replace(/\\/g, '/'));
}