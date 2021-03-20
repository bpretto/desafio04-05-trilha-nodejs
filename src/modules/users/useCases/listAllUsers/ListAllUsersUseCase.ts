import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
	user_id: string;
}

class ListAllUsersUseCase {
	// eslint-disable-next-line prettier/prettier
	constructor(private usersRepository: IUsersRepository) { }

	execute({ user_id }: IRequest): User[] {
		const user = this.usersRepository.findById(user_id);

		if (!user) {
			throw new Error("User doesn't exists!");
		} else if (user.admin === false) {
			throw new Error("User must be an admin!");
		}

		return this.usersRepository.list();
	}
}

export { ListAllUsersUseCase };
