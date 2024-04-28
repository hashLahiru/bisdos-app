import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    constructor() {
    }

    public FormCreator(data: any): FormData {
        const formData = new FormData();
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, (value as string).toString());
        }
        return formData;
    }
}
