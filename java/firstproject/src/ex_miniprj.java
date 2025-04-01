import java.util.ArrayList;
import java.util.Scanner;

class Student {
    String name;
    int kor;
    int eng;
    int math;
    public Student(String name, int kor, int eng, int math) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
}
public class ex_miniprj {
    static ArrayList<Student> scoreList = new ArrayList<>();
    static void printInfo(Student student){
        System.out.print(" 이름: " + student.name );
        System.out.print(" 국어: " + student.kor );
        System.out.print(" 영어: " + student.eng );
        System.out.print(" 수학 : " + student.math );
        int sum = student.kor + student.eng + student.math;
        double avr = sum/3.0;
        System.out.print(" 총점 : " + sum );
        System.out.print(" 평균 : " + avr );
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while(true){
            System.out.println();
            System.out.println("-----------성적 관리 프로그램-------------");
            System.out.print("1.입력 2.전체출력 3.검색 4.수정 5.삭제 6.종료 : ");
            int menu = scanner.nextInt();

            if(menu==1){
                System.out.print("이름 입력 : ");
                String name = scanner.next();
                System.out.print("국어점수 : ");
                int kor = scanner.nextInt();
                System.out.print("영어점수 : ");
                int eng = scanner.nextInt();
                System.out.print("수학점수 : ");
                int math = scanner.nextInt();
                scoreList.add(new Student(name,kor,eng,math));
            }
            else if(menu==2){
                for(Student student:scoreList){
                    printInfo(student);
                    System.out.println();
                }
            }
            else if(menu==3){
                System.out.print("검색할 사람의 이름 : ");
                String searchWord = scanner.next();
                for(Student student:scoreList){
                    if(searchWord.equals(student.name)){
                        printInfo(student);
                    }
                }
            }
            else if(menu==4){
                System.out.print("검색할 사람의 이름 : ");
                String name = scanner.next();
                System.out.println();
                System.out.print("수정할 내용은? 1.국어 2.영어 3.수학 : ");
                int no = scanner.nextInt();
                System.out.println();
                System.out.print("수정할 점수 : ");
                int score = scanner.nextInt();
                String searchWord = name;
                int index = 0;
                for(Student student:scoreList){
                    if(searchWord.equals(student.name)){
                        if(no==1){
                            student.kor=score;
                        } else if (no == 2) {
                            student.eng=score;
                        } else {
                            student.math=score;
                        }
                        scoreList.set(index,student);
                        break;
                    }
                    index++;;
                }
            }
            else if(menu==5){
                System.out.print("삭제할 사람의 이름 : ");
                String name = scanner.next();
                String searchWord = name;
                int index=0;
                for(Student student:scoreList){
                    if(searchWord.equals(student.name)){
                        scoreList.remove(index);
                        break;
                    }
                    index++;
                }
            }
            else if(menu==6){
                System.out.println("종료!");
                break;
            }
        }
        scanner.close();
    }
}
