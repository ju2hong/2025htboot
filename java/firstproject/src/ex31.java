// 상속관계에서의 생성자 함수
class Robot{
    String color = "빨강";
    int price = 1000;
    //생성자함수 - 매개변수 없음
    public Robot() {
        System.out.println("기본생성자 호출");
    }
    public Robot(String color) {
        this.color = color;
        System.out.println("매개변수가 1개 있는 생성자함수");
    }
    //생성자함수 - 매개변수가 있음
    public Robot(String color,int price) {
        this.color = color;
        this.price = price;
        System.out.println("매개변수 있는 생성자 함수");
    }
}
public class ex31 {
    public static void main(String[] args) {
        Robot robot = new Robot();
        Robot robot2 = new Robot("파랑");
        Robot robot3 = new Robot("노랑",2000);
    }
}
