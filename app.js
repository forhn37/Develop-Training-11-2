function validataId(id) {
  // 타입 검사
  if (typeof (id) !== 'string') {
    return false; // 유효성 검사 측면에서는 error를 리턴하는 것보다 false를 리턴하는 것이 좋은 선택이 될 수 있다. 
  }

  let state = { // 두개의 bloolean 값을 변수로 관리할 수 있겠지만, 객체로 관리하는 것이 편리하다. 관용적으로 이것을 '상태'라는 뜻의 state라고 한다.
    hasLowerCase: false,
    hasUpperCase: false,
  }
  //  객체 state는 마치 전구 스위치 처럼 두개가 true가 되는 듯이 작동하게끔 접근했다. 

  for (let i = 0; i < id.length; i++) {
    // 상당히 절차적이지만, 원리를 이해하기 위해 까다로운 조건식을 모두 작성했다. 
    // 메서도로 처리하면 매우 간결해진다. 
    if (id[i] === id[i].toUpperCase() && id[i] !== id[i].toLowerCase()) {
      state.hasUpperCase = true;
    }
    if(id[i] === id[i].toLowerCase() && id[i] !==  id[i].toUpperCase()) {
      state.hasLowerCase = true;
    }
    if (state.hasLowerCase || state.hasUpperCase) {
      // 둘중에 하나라도 true 면, true를 리턴한다. 
      return true;
    }
  // id[i].toUpperCase()는 JavaScript에서 문자열 내의 특정 문자를 대문자로 변환하는 메서드 호출입니다.

// id는 문자열 변수나 문자열 값이어야 합니다.
// i는 문자열 내에서 변환하려는 문자의 위치(인덱스)를 가리키는 정수여야 합니다.
// 이 메서드를 호출하면 id 문자열에서 i 위치에 있는 문자가 대문자로 변환됩니다. 원본 문자열(id)은 변경되지 않으며, 변환된 문자가 새로운 문자열로 반환됩니다
}
return false;
}

console.log(validataId("kimhyun"));
console.log(validataId("sdfa1234"));