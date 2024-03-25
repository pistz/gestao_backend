export enum Role {
    ADMIN,
    DESK,
    PROFESSOR,
}

export type typeRole = keyof typeof Role;