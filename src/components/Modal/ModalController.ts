import type React from 'react';

type FlagState = [number, React.Dispatch<React.SetStateAction<number>>];

interface ModalItem<T = any> {
  key: string;
  Component: React.FC<any>;
  props: unknown;
  resolve: (value: T) => void;
  reject: (reason: any) => void;
}

export default class ModalController {
  private flagState: FlagState;
  private modalInfos: ModalItem[] = [];

  constructor(flagState: FlagState) {
    this.flagState = flagState;
  }

  get top() {
    return this.modalInfos[this.modalInfos.length - 1];
  }

  private handlePromise<T>(key: string, resolver: (value: T) => void, value: T) {
    resolver(value);
    this.modalInfos = this.modalInfos.filter(({ key: k }) => k !== key);
    this.flush();
  }

  push<T = any>(key: string, Component: React.FC<any>, props: unknown): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.modalInfos.push({
        key,
        Component,
        props,
        resolve: (value: T) => this.handlePromise<T>(key, resolve, value),
        reject: (reason: any) => this.handlePromise<any>(key, reject, reason),
      });
      this.flush();
    });
  }

  pop() {
    if (this.top) {
      this.top.reject(`Close Modal: ${this.top.key}`);
      this.modalInfos.pop();
      this.flush();
    }
  }

  clear() {
    while (this.top) this.pop();
  }

  private flush() {
    const [, setFlag] = this.flagState;
    setFlag((prev) => prev + 1);
  }
}
