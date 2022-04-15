interface MyInterface {
  id: number;
  name: string;
  properties: string[];
}

type MyShortType = Omit<MyInterface, 'name' | 'id'>;
