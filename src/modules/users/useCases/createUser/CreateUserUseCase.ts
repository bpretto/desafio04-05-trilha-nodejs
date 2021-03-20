import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
	name: string;
	email: string;
}

class CreateUserUseCase {
	// eslint-disable-next-line prettier/prettier
	constructor(private usersRepository: IUsersRepository) { }

	execute({ name, email }: IRequest): User {
		const emailAlreadyTaken = this.usersRepository.findByEmail(email);

		if (emailAlreadyTaken) {
			throw new Error("User already exists!");
		} else {
			this.usersRepository.create({ name, email });
			return this.usersRepository.findByEmail(email);
		}
	}
}

export { CreateUserUseCase };
