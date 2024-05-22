import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daterange',
  standalone: true
})
export class DaterangePipe implements PipeTransform {

  transform(transaction: any[], startDate: Date | null, endDate: Date | null): any[] {
    if(!transaction || !startDate || !endDate){
      return transaction;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    end.setHours(23, 59, 59, 999)


    return transaction.filter(transaction=>{
      const transacDate = new Date(transaction.Date);

      if(isNaN(transacDate.getTime())){
        return false;
      }

      return transacDate >= start && transacDate <= end;
    });
  }

}
