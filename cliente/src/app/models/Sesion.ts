export class Usuario{
    _id?: string;
   token: string;
   usuario: string;
   inicio: Date;
   fin: Date;

   constructor(token: string, usuario: string, inicio: Date, fin: Date){
       this.token = token;
       this.usuario = usuario;
       this.inicio = inicio;
       this.fin= fin;
   }
}



export class Componentes{
   token: string;
   componente: string;
   usuario: string;
   inicio: Date;
   fin: Date;

   constructor(componente: string, usuario:string, token: string, inicio: Date, fin: Date){
       this.componente = componente;
       this.usuario= usuario;
       this.token = token;
       this.inicio = inicio;
       this.fin = fin;
   }
}