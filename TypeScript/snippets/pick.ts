interface MyInterface {
  id: number;
  name: string;
  properties: string[];
}

type MyShortType = Pick<MyInterface, 'name' | 'id'>;
