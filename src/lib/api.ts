import { Builder } from 'builder-pattern';

type Method = 'get' | 'post' | 'put' | 'delete';

interface ApiRequest {
  headers: Headers;
  method: Method;
  url: URL;
  data: FormData | URLSearchParams | null;
}

export class Api<T> {

  constructor(method: Method) {
    this.request.method = method;
    this.request.data = (method == 'get') ? new URLSearchParams() : new FormData();
  }

  request: ApiRequest = { headers: new Headers(), method: 'get', url: new URL('http://localhost:8080/api'), data: null }

  path = (_path: string) => {
    this.request.url = new URL(_path, this.request.url);
    return this;
  }

  data = (key: string, value: string) => {
    this.request.data?.append(key, value);
    return this;
  }

  //record 
  set = () => { }

  res = (): Promise<Response> => fetch(this.request.url.toString(), { method: this.request.method, headers: this.request.headers, body: this.request.data });

  one = (): Promise<T> => this.res().then(res => res.json());

  all = (): Promise<T[]> => this.res().then(res => res.json());

}

export default {
  get: <T>(url: string) => new Api<T>('get').path(url),
  post: <T>(url: string) => new Api<T>('post').path(url),
  put: <T>(url: string) => new Api<T>('put').path(url),
  delete: <T>(url: string) => new Api<T>('delete').path(url),
};

//const a = new Get<Category>('').ok();
//a.then(c=>c.name);

//api.get<Category>('').ok().then(c=>c.name);

