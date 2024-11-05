import { ResponseAPI } from './../models/api.models';
import { User } from "../models/users.models";
import { client } from "./client"

/**
 * Funcion para obtener la lista de todos los usuarios
 * @returns listado de usuarios
 */
export const getUserslist = async (): Promise<ResponseAPI> => {

    const response = await (await client.get('/v1/users')).data
    
    return response;
    
}

/**
 * Funcion para obtener el detalle de unusuarios
 * @param id id del usuario del que se quiere obtener el detalle
 * @returns Detalle de usuario
 */
export const getUserDetail = async (id: string): Promise<ResponseAPI> => {

    const response = (await client.get(`/v1/users/${id}`)).data

    return response;
    
}

/**
 * Funcion para agregar un nuevo usuario
 * @param userData [User] Informacion del nuevo usuario
 */
export const postNewUser = async (userData: User): Promise<ResponseAPI> => {

    const response = (await client.post('/v1/users', userData)).data

    return response;
    
}

/**
 * Funcion para editar un usuario
 * @param userData [User] Informacion del nuevo usuario
 */
export const updateUser = async (userData: User): Promise<ResponseAPI> => {

    const response = (await client.put(`/v1/users/${userData?.id}`, userData)).data

    return response;
    
}

/**
 * Funcion para elimnar un usuario
 * @param id id del usuario del que se quiere obtener el detalle
 */
export const deleteUser = async (id: string): Promise<ResponseAPI> => {

    const response = (await client.delete(`/v1/users/${id}`)).data

    return response;
    
}


