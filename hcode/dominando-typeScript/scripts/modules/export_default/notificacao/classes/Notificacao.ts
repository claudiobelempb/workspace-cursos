import MeuUsuario from "../interfaces/MeuUsuario";

export default abstract class Notificacao {

    abstract enviar(usuario: MeuUsuario): boolean;

}