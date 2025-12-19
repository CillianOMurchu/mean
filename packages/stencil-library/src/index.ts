export * from './components';
/* Explicitly export the Components and JSX types.
  By exporting from './components', we ensure the global interfaces 
  like HTMLPeachInputElement are included in the type tree for 
  the Angular Wrapper Library.
*/
export type { Components, JSX } from './components';
