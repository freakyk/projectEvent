    /*
        1. 생성자 함수는 두 가지 매개변수를 전달 받을 수 있으며 전달되는 매개변수에 따라 소시지의 맛이 결정됩니다.

        2. 소시지 객체는 taste 라는 메서드가 존재합니다. 생성자함수에서 전달받은 재료에 따라 맛을 나타내는 콘솔로그를 출력하는 역할을 합니다. (예시 : ‘소고기’ 와 ‘파’ 를 매개변수로 전달하였을 경우, ‘소고기와 파 맛이 난다!’ 는 콘솔 메세지를 출력합니다.)

        3. 소시지 클래스를 상속받는 FiresSausage 파생클래스를 생성해봅니다. 파생클래스의 taste 메서드를 실행하면 콘솔 메세지에 불맛이 나기 시작합니다.
    */

    // 소세지객체
    class Sausage{
        constructor(material1,material2){
            this.material1 = material1;
            this.material2 = material2;

        }
        taste(){
            console.log(`${this.material1}와(과) ${this.material2} 맛이 난다!`);
        }
    }
    const sausage = new Sausage("소고기","파");
    console.log(sausage.taste());

    // 파생클래스
    class FiresSausage extends Sausage{
        constructor(material1,material2){
            // this.material1 = material1;
            // this.material2 = material2;
            super(material1,material2);
        }
        taste(){
            console.log(`불맛이 나기 시작합니다`);
        }
    }
    const firesSausage = new FiresSausage("돼지고기","양파");
    console.log(firesSausage.taste());
