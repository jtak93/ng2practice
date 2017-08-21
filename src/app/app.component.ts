import { Component } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  posts = [];
  newPost = {
    title: '',
    body: '',
    id: null,
  };
  constructor(private http: Http) {}

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(data => {
      // Read the result field from the JSON response.
      this.posts = data.json();
      this.newPost.id = this.posts[this.posts.length - 1].id + 1
    });
  }
  onKey(event): void {
    this.newPost.title = event.target.value;
  }
  onBodyChange(event) {
    this.newPost.body = event.target.value;
  }

  onClick(): void {
    this.http.post('http://jsonplaceholder.typicode.com/posts', this.newPost).subscribe(data => {
      this.posts.push(data.json())
      this.newPost.id++
    })
  }

  onPostClick(event, i): void {
    this.posts[i].isActive = !this.posts[i].isActive;
  }
}
