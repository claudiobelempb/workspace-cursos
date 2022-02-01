package estrurura_repetitiva;

import java.util.Scanner;

public class While {
  public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);
    System.out.println("Digíte um numero");
    int num = scanner.nextInt();
    int soma = 0;

    while(num != 0){
      soma += num;
      num = scanner.nextInt();
    }

    System.out.println(soma);

    scanner.close();

  }
}
