export class UserApi {
  id: number;
  name: string;
  groups: GroupApi[];
  email: string;
  avatar: string;


  hasRole(role: string): boolean {
    return this.groups.filter(group => group.name === role).length > 0;
  }
}

class GroupApi {
  id: number;
  name: string;
}
