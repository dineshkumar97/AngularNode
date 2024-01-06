import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor( private toast: NgToastService) { }

  public showSuccess(message: any): void {
    this.toast.success({ detail: "SUCCESS", summary: message, duration: 5000 });
  }

  public showError(message: any): void {
    this.toast.error({ detail: "ERROR", summary: message, duration: 5000 });
  }

  public showInfo(message: any): void {
    this.toast.info({ detail: "INFO", summary: message, duration: 5000 });
  }

  public showWarn(message: any): void {
    this.toast.warning({ detail: "WARN", summary: message, duration: 5000 });
  }
}
