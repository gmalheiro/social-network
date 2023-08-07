export class UserModel{
  public name: string;
  public email: string;
  public imagePath: string;

  constructor(name: string, email: string, imagePath: string) {
    this.name = name;
    this.email = email;
    this.imagePath = imagePath;
  }
}