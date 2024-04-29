import {Injectable} from '@angular/core';
import {ApiService} from "../http/api.service";
import {map, Observable} from "rxjs";
import {ProfileResponse} from "../modals/profile.modal";
import {HttpParams} from "@angular/common/http";
import {HttpResponse} from "../modals/HttpResponses.modal";
import {SERVER_FILE_PATHS} from "../../data/constants/common.constants";

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor(private apiService: ApiService) {
    }

    public getActiveUserProfileById(id: number): Observable<ProfileResponse> {
        let params: HttpParams = new HttpParams().append('id', id)
        return this.apiService.get<HttpResponse<ProfileResponse>>("/api/Profile/active-profile", params).pipe(
            map((res: HttpResponse<ProfileResponse>): ProfileResponse => {
                    return {
                        id: res.data.id,
                        website: res.data.website,
                        address: res.data.address,
                        email: res.data.email,
                        mobile: res.data.mobile,
                        description: res.data.description,
                        title: res.data.title,
                        name: res.data.name,
                        facebook: res.data.facebook,
                        instagram: res.data.instagram,
                        linkedin: res.data.linkedin,
                        profilePicture: `${SERVER_FILE_PATHS.IMAGE_BASE_URL}/${res.data.profilePicture}`,
                        office: res.data.office,
                        snapchat: res.data.snapchat,
                        twitter: res.data.twitter,
                        whatsapp: res.data.whatsapp
                    } as ProfileResponse
                }
            )
        );
    }
}
