import { SelectItem } from "primeng/api";
import { Role } from "./role.enum";

export const ROLE_OPTIONS: SelectItem<Role>[] = [
    { value: Role.Administrator, label: 'Администратор' },
    { value: Role.Author, label: 'Автор' },
    { value: Role.Manager, label: 'Руководитель' },
    { value: Role.User, label: 'Пользователь' },
];