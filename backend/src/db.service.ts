import { Injectable } from '@nestjs/common';

@Injectable()
export class DbService {
  private readonly data = {};

  get(key: string) {
    return this.data[key];
  }

  insert(key: string, value: any) {
    this.data[key] = value;
  }

  remove(key: string) {
    delete this.data[key];
  }

  exists(key: string) {
    return !!this.data[key];
  }

  update(key: string, value: any) {
    this.data[key] = value;
  }
}
