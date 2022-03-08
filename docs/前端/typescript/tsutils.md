# ts-utils

```typescript
interface ArrayLike<T> {
  readonly length: number;
  readonly [n: number]: T;
}
```

## Partial

- Make all properties in T optional
- 将 T 中的所有属性设置为可选

```typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

例子

```typescript
type obj = {
  name: string;
  age: number;
};

const o1: Partial<obj> = {
  name: "YZJ",
};
```

## Required

- Make all properties in T required
- 使 T 中的所有属性都是必需的

```typescript
type Required<T> = {
  [P in keyof T]-?: T[P];
};
```

例子

```typescript
const o2: Required<obj> = {
  name: "YZJ",
  age: 26,
};
```

## Readonly

- Make all properties in T readonly
- 使 T 中所有的属性都是可读

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

例子

```
const o3: Readonly<obj> = {
  name: "YZJ",
  age: 26,
};

// 修改 报错  o3 内的属性只读 无法进行修改
o3.age = 111;
```

**错误信息**
<img src={require('@site/static/img/ts/c24e834f79ffae885927be0b6f10351.png').default} />

## Pick

- From T, pick a set of properties whose keys are in the union K
- 从 T 中，选择一组键位于并集 K 中的属性

```typescript
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

## Record

- Construct a type with a set of properties K of type T
- 构造一个具有一组类型为 T 的属性 K 的类型

```typescript
type Record<K extends keyof any, T> = {
  [P in K]: T;
};
```

例子

```typescript
type keys = "a" | "b" | "c";
const a: Record<keys, number> = {
  a: 2,
  b: 3,
  c: 2,
};
```

## Exclude

- Exclude from T those types that are assignable to U
- 从 T 中排除那些可分配给 U 的类型

```typescript
type Exclude<T, U> = T extends U ? never : T;
```

## Extract

- Extract from T those types that are assignable to U
- 从 T 中提取可分配给 U 的类型

```typescript
type Extract<T, U> = T extends U ? T : never;
```

## Omit

- Construct a type with the properties of T except for those in type K.
- 构造一个属性为 T 的类型，但类型 K 中的属性除外

```typescript
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```

## NonNullable

- Exclude null and undefined from T
- 从 T 中排除 null 和未定义

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
```

## Parameters

- Obtain the parameters of a function type in a tuple
- 获取元组中函数类型的参数

```typescript
type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
```

## ConstructorParameters

- Obtain the parameters of a constructor function type in a tuple
- 获取元组中构造函数类型的参数

```typescript
  type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;
```

## ReturnType

- Obtain the return type of a function type
- 获取函数类型的返回类型

```typescript
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
```

## InstanceType

- Obtain the return type of a constructor function type
- 获取构造函数类型的返回类型

```typescript
  type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;
```

## Uppercase

- Convert string literal type to uppercase
- 将字符串文字类型转换为大写

```typescript
type Uppercase<S extends string> = intrinsic;
```

## Lowercase

- Convert string literal type to lowercase
- 将字符串文字类型转换为小写

```typescript
type Lowercase<S extends string> = intrinsic;
```

## Capitalize

- Convert first character of string literal type to uppercase
- 将字符串文字类型的第一个字符转换为大写

```typescript
type Capitalize<S extends string> = intrinsic;
```

## Uncapitalize

- Convert first character of string literal type to lowercase
- 将字符串文字类型的第一个字符转换为小写

```typescript
type Uncapitalize<S extends string> = intrinsic;
```
