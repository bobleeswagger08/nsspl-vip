import { ApplicationSettings } from "@nativescript/core";
export class LocalStorage{
      static setValue(key:string,value: string){
         ApplicationSettings.setString(key,value);
        }
      static getValue(key:string){
          return ApplicationSettings.getString(key);
      }
      static clear(){
           ApplicationSettings.clear();
      }

}