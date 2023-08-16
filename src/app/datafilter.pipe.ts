import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datafilter'
})
export class DatafilterPipe implements PipeTransform {

  //employees | datafilter
  transform(value: any, ...args: any[]): any {
    console.log("Data filter has started");
    console.log(value);  // employees
    console.log(args);   // textbox value
    console.log("Data filter has ended");

    /* i am going to write the code */
    let searchFilterValue = args[0];
    let propertyName       = args[1]; 


     
    if(value.length == 0  || searchFilterValue == "" ){
      return value;
    }


    // items = [1,2,3,4];   // objects of the Array
    // for(let item of items){
    //   console.log(item);
    // }

    // employees = [
    //   {
    //     name: 'John',
    //     skill: '.net',
    //     started: new Date(),
    //     information: 'He is in london working as a senior software engineer',
    //   },  ]
    let dataArray = [];
    for(let item of value){
      if(item['information'].indexOf(searchFilterValue) > -1){
            dataArray.push(item);
      }
    }
    return dataArray;
  }
}
