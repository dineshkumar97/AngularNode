import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private messageService: MessageService) {}

  public showSuccess(message:any):void {
      this.messageService.add({ severity: 'success',key: "main", summary: 'Success', detail: message });
  }

  public showInfo(message:any):void {
      this.messageService.add({ severity: 'info', key: "main",summary: 'Info', detail: message });
  }

  public showWarn(message:any):void {
      this.messageService.add({ severity: 'warn',key: "main", summary: 'Warn', detail: message });
  }

  public  showError(message:any):void {
      this.messageService.add({ severity: 'error',key: "main", summary: 'Error', detail: message });
  }

}
