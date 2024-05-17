export class UserModel{
    constructor(
      public UserId: string,
      public AccessTocken: string,
      public StoreId: string,
      public UserEmail: string,
      public UserFullName: string,
      public ListRoles: any[]
    ){}
  }
  