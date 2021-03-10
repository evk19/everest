import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByAlert'
})
export class FilterByAlertPipe implements PipeTransform {
dop :any;
  transform(posts: any, select?: any): any {
    if(select !== "All"){
      if(select == "Attention"){
        this.dop = true
        return select
      ? posts.filter((post) => post.attention === this.dop)
      :posts;
      }
      else{
      if (select == "Regular"){
        console.log(select);
        this.dop = false
        return select
      ? posts.filter((post) => post.attention == false)
      :posts;
      }
    }
      // console.log(this.dop, select)
      // return select
      // ? posts.filter((post) => post.attention === this.dop)
      // :posts;
      
    }
    else {
      return posts;
    }
  }
}
