import { Injectable } from '@nestjs/common';

@Injectable()
export class NestarBatchService {
  getHello(): string {
    return 'Welcome to NESTAR batch serve!';
  }
}
