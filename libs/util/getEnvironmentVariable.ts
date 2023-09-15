export function getEnvironmentVariable(
  variableName: string
): string | undefined {
  try {
    return typeof process !== "undefined"
      ? process.env?.[variableName]
      : undefined;
  } catch (e) {
    return undefined;
  }
}
