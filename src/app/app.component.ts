import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Коронавирус. В Украине 6234 новых случая', text: 'Вчера, 17 сентября, в Украине выявили  6234 новых случая заболевания коронавирусной инфекцией (днем ранее – 6624), выздоровели 1763 пациента (днем ранее – 1914). Об этом сообщает пресс-служба Министерства здравоохранения.', id: 1},
    {title: 'Украинский флаг доставят на Луну', text: '"Символичной станет доставка флага нашего государства, напечатанного на 3D-принтере с украинского титана.\n' +
          '\n' +
          'Во время его изготовления было использовано специальную технологию "зеленого", или безотходного производства".', id: 2}
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }
}
