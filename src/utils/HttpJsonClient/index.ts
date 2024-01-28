import { IHttpJsonClient } from './types';

export class HttpJsonClient implements IHttpJsonClient {
  requestOptions?: IHttpJsonClient['requestOptions'];

  constructor(requestOptions?: IHttpJsonClient['requestOptions']) {
    this.requestOptions = requestOptions;
  }

  get<T>(url: string): Promise<T> {
    return this.send(url, 'GET');
  }

  post<TData, TRes = TData>(url: string, data: Partial<TData>): Promise<TRes> {
    return this.send(url, 'POST', data);
  }

  patch<T>(url: string, data: Partial<T>): Promise<T> {
    return this.send(url, 'PATCH', data);
  }

  delete(url: string): Promise<{}> {
    return this.send(url, 'DELETE');
  }

  private send<T>(url: string, method: string, data?: T) {
    return fetch(url, {
      ...this.requestOptions,
      method,
      headers: {
        ...this.requestOptions?.headers,
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  }
}
