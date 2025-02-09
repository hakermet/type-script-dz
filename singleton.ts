const instances: { [key: string]: any } = {};

export function getClassInstance<T>(classType: new (...args: any[]) => T, ...args: any[]): T {
  const className = classType.name;
  if (!instances[className]) {
    instances[className] = new classType(...args);
  }
  return instances[className];
} 