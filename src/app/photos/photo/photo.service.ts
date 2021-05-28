import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class PhotoService{

    private BASE_URL ;string = 'http://localhost:3000';

    constructor (private httpClient : HttpClient){}

    listFromUser(userName:string){
        return this.httpClient.get<Object[]>(this.BASE_URL+"/flavio/photos");
    }
}