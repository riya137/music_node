import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fil'
})
export class FilPipe implements PipeTransform {
  
  temp:string="";
  transform(items: any[], searchText: string): any[] {
    this.temp=searchText;
    console.log(this.temp);
    if(!items) return [];
    if(!searchText) return items;
      searchText = searchText.toLowerCase();
      return items.filter( it => {
      return it.includes(searchText)
    });
   }
}
