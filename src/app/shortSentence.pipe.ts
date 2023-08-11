import { Pipe , PipeTransform } from '@angular/core'

@Pipe({
   name : 'shortsentence'
})
export class ShortSentencePipe implements PipeTransform {
  // Which represents as of now i.e. sentence......
  transform(value: any , inputParam:number) {
      console.log(value);
      if(value.length > inputParam){
          value =  value.substr(0,inputParam) + ' ...More'; // 10 charcters
      }
      return value;
  }
}