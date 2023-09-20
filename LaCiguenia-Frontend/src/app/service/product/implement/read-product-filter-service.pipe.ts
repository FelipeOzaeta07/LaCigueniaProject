import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readProductFilterService'
})
export class ReadProductFilterServicePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultPosts = [];
    for (const post of value) {
      if (post.productName.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      };
    };
    console.log("Prueba Retorno" + resultPosts[0].productName)
    return resultPosts;
  }
}
