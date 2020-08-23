import { TestBed } from '@angular/core/testing';

import { NgxIndexedDBService } from 'ngx-indexed-db';
import { NgxIndexedDBModule } from './ngx-indexed-db.module';

interface User {
  id?: number,
  name: string
};

let database : { user:User[] } = {
  user: [
    {
      id: 1,
      name: 'Olivia'
    },
    {
      id: 10,
      name: 'John'
    }
  ]
}

describe('NgxIndexedDBServiceService', () => {
  let service: NgxIndexedDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({      
      imports: [ NgxIndexedDBModule.forRoot(database) ],
    });
    service = TestBed.inject(NgxIndexedDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getByID', async () => {
    expect(service).toBeTruthy();
    let user = await service.getByID<User>('user',10);
    expect(user.id).toBe(10);
    expect(user.name).toBe('John');
  });

  it('getAll', async () => {
    expect(service).toBeTruthy();
    let users = await service.getAll<User>('user');
    expect(users.length).toBe(2);
    expect(users[1].name).toBe('John');
  });

  it('add', async () => {
    expect(service).toBeTruthy();
    let id = await service.add<User>('user',{name:'Peter'});
    let user = await service.getByID<User>('user',id);
    expect(user.name).toBe('Peter');
  });

  it('update', async () => {
    expect(service).toBeTruthy();
    await service.update<User>('user',{id:10,name:'Marta'});
    let user = await service.getByID<User>('user',10);
    expect(user.name).toBe('Marta');
  });

  it('delete', async () => {
    expect(service).toBeTruthy();
    await service.delete('user',10);
    let users = await service.getAll<User>('user');
    expect(users.length).toBe(2);
    let user = await service.getByID<User>('user',1);
    expect(user.name).toBe('Olivia');
  });
});
