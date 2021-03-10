import {Pipe, PipeTransform} from '@angular/core';
import {CommentSh, Post} from '../models/interfaces'

@Pipe({
  name: 'commentpipe'
})
export class FilterCommentPipe implements PipeTransform{
  transform(comments: CommentSh[], postId): CommentSh[] {
    return comments.filter(comment =>{
      if( postId == comment.postId) return comment.text ;
    });
  }
}