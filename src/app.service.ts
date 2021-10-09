import { Injectable } from '@nestjs/common';

export interface Item {
  id: number;
  title: string;
  body: string;
  deletePassword: string;
}

export type PublicItem = Omit<Item, 'deletePassword'>;

const items: Item[] = [
  {
    id: 1,
    title: 'Item title',
    body: 'Hello, World',
    deletePassword: '1234',
  },
  {
    id: 2,
    title: 'Item title 2',
    body: 'Good bye!',
    deletePassword: '2345',
  },
];

@Injectable()
export class AppService {
  getAllItems(): Item[] {
    return [...items];
  }

  getPublicItems(): PublicItem[] {
    return this.getAllItems().map((item) => {
      const publicItem = { ...item };
      delete publicItem.deletePassword;
      return publicItem;
    });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
