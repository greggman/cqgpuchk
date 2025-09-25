import path from 'node:path';

export const kCwd = process.cwd();

export const isMac = process.platform === 'darwin';
export const isWin = process.platform === 'win32';
export const isLinux = process.platform === 'linux';
