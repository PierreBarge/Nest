import { Injectable } from '@nestjs/common';
import User from '../entities/user.model';

@Injectable()
export class FilterService {
  /**
   *Return a list of users filtered by name
   * @param users users to filter
   * @param name name to filter by
   * @returns filtered users
   */
  filterUsers(users: User[], name: string): User[] {
    return users.filter((item: User) => item.name === name);
  }
}
