import {ProfileResponse} from "./profile.modal";

export interface LoginRequest {
    userName: string;
    password: string;
    userType: number;
}

export interface LoginResponse{
    profileId:number;
    token: string;
}

export interface LoginData{
    status:boolean;
    data: ProfileResponse|AdminData;
}

export interface AdminData{

}