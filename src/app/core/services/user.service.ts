import {Injectable} from '@angular/core';
import {ApiService} from "../http/api.service";
import { LoginData, LoginRequest, LoginResponse} from "../modals/user.modal";
import { map, Observable} from "rxjs";
import {HttpResponse} from "../modals/HttpResponses.modal";
import {CommonService} from "../helpers/common.service";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private apiService: ApiService, private commonService: CommonService) {
    }

    public Login(loginData: LoginRequest): Observable<LoginData> {
        let formatedData: FormData = this.commonService.FormCreator(loginData);
        return this.apiService.post<HttpResponse<LoginResponse>>("/api/User/login", formatedData).pipe(
            map((res: HttpResponse<LoginResponse>): LoginData => {
                    sessionStorage.setItem("UserType", loginData.userType.toString());
                    return {
                        status: true,
                        data: res.data.profileId
                    } as LoginData;

                }
            )
        );
    }
}
