import { UserRepository } from "../UserRepository";


export class CloseSesionUserUseCase {
    constructor(private userRepository: UserRepository) {}
  
    execute(): void {
        this.userRepository.closeSesionUser();
    }
  }