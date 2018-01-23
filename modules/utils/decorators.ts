/*tslint:disable:no-invalid-this */
export function OnChange(): any {
  const sufix = 'Change';
  return function OnChangeHandler(target: any, propertyKey: string): void {
    const _key = ` __${propertyKey}Value`;
    Object.defineProperty(target, propertyKey, {
      get(): any {
        return (this as any)[_key];
      },
      set(value: any): void {
        const prevValue = (this as any)[_key];
        (this as any)[_key] = value;
        if (prevValue !== value && (this as any)[propertyKey + sufix]) {
          (this as any)[propertyKey + sufix].emit(value);
        }
      }
    });
  };
}
/* tslint:enable */
