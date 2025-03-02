/* eslint-disable */
/// <reference types="vite/client" />

type ClientEnvironment = import('./env').ClientEnvironment;

interface ImportMetaEnv extends ClientEnvironment {}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
