import { Injectable } from '@angular/core';

declare const process: any;

const ENVIRONMENT = 'ENVIRONMENT';

@Injectable()
export class ConfigurationService {
  public static environment: string = process.env[ENVIRONMENT];
}