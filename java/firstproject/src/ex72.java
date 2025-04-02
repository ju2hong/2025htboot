public class ex72 {
    public static void main(String[] args) {
        //재귀함수로 팩토리얼(Factorial)을 구현해보자.
        //int n = 5;
        //5! = 5*4*3*2*1
        //형식 : int result = factorial( n )
//        int n = 5;
//        int result = factorial( n );
//        System.out.println("result = " + result);

        //연습문제 1
        //1부터 N까지의 합계를 출력하시오.
        // int n = 5;
        // sum( n )을 호출하면, 5+4+3+2+1 까지의 합이 반환된다.
        int n =5;
        int result = factorial(n);
        System.out.print("1~5까지 합 = " + result);

        //연습문제 2
        // 십진정수를 2진수로 변환하여 출력하시오.
        // printBin( int n )
        // printBin( 10 ) 호출시, 1010으로 출력됨.
        //   2 )  10
        //         5 - 0
        //         2 - 1
        //         1 - 0
        int decimal = 10;
        System.out.print(" 십진수 " + decimal + "의 2진수: ");
        printBin(decimal);

        //연습문제 3
        // 문자열을 역으로 출력하기
        // 예) "abcde" => "edcba"
        String str = "abcde";
        System.out.print(" 역순 문자열: " + reverseString(str));
    }
    static int factorial(int n ){
        //탈출조건
//        if( n == 1 ){
//            System.out.println("n:1");
//            return 1;
//        }
//        System.out.println("n:"+n);
//        System.out.println("n-1:"+(n-1));
//        return n * factorial(n - 1);

        if(n==0){
            return 0;
        }
        return n + factorial(n-1);
    }
    // 연습문제 2: 십진수를 2진수로 변환하는 함수
    static void printBin(int n) {
        if (n == 0) {
            return;
        }
        printBin(n / 2);  // 재귀 호출로 나누기
        System.out.print(n % 2 );  // 나머지 출력
    }
    // 연습문제 3: 문자열을 역으로 출력하는 함수
    static String reverseString(String str) {
        if (str.isEmpty()) {
            return str;
        }
        return reverseString(str.substring(1)) + str.charAt(0);
    }
}