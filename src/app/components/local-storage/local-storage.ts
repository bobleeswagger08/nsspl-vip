export class LocalStorage{
      static setValue(key:string,value: string){
          window.localStorage.setItem(key,value);
        
      }
      static getValue(key:string){
          return  window.localStorage.getItem(key);
      }
      static clear(){
            window.localStorage.clear();
      }

}