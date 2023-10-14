import { UserRepository } from "@repository/user/UserRepository";


export class CloseSesionUserUseCase {
    constructor(private userRepository: UserRepository) {}
  
    execute(): void {
        this.userRepository.closeSesionUser();
    }
  }