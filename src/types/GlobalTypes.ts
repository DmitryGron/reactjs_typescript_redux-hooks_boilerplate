import { AnyAction } from 'redux';

type SetTypeAsConstant<T extends AnyAction, LiteralType> = { [Key in keyof Pick<T, 'type'>]: LiteralType };
type Intersection<T extends AnyAction, LiteralType> = LiteralType extends unknown
  ? T
  : SetTypeAsConstant<T, LiteralType> & Omit<T, 'type'>;
type Fn = (...arg: any[]) => any;

export type ReduxActionType<T extends Fn, LiteralType = unknown> = ReturnType<T> extends AnyAction
  ? { [Key in keyof Intersection<ReturnType<T>, LiteralType>]: Intersection<ReturnType<T>, LiteralType>[Key] }
  : never;
