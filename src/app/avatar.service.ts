import { Injectable } from '@angular/core';

import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class AvatarService {

  constructor() { }

  generate(email: string) {
    return "https://2.gravatar.com/avatar/" + Md5.hashStr(email);
  }

}