export interface CliIo { stdout: {write(value: string): unknown}; stderr: {write(value: string): unknown} }
