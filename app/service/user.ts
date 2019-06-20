import { Service } from "nbomb";


export default class UserService extends Service{

  async getUser(options: any){
    return {
      id: options.id,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };

  }
}
