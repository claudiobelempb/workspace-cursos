import MeuUsuario from "../interfaces/MeuUsuario";
import Notificacao from "./Notificacao";

export class Email extends Notificacao {
    
    enviar(usuario: MeuUsuario): boolean {
        
        console.log(`Enviando e-mail para o usuario ${usuario.email} ...`);

        return true;

    }    

}

export class SMS extends Notificacao {
    
    enviar(usuario: MeuUsuario): boolean {
        
        console.log(`Enviando SMS para o usuario ${usuario.telefone} ...`);

        return true;

    }    

}

export class Android extends Notificacao {
    
    enviar(usuario: MeuUsuario): boolean {
        
        console.log(`Enviando mensagem para o usuario no Android ${usuario.idAndroid} ...`);

        return true;

    }    

}