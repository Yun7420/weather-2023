# 날씨 프로젝트 만들기 🧐

JavaScript, React, Redux, Sass(SCSS)를 활용하여 만든 날씨 프로젝트입니다.
사용자는 위치 엑세스를 허용할 경우 현재 위치 기반으로 오늘의 날씨를 확인할 수 있으며, 온도, 습도, 풍속을 그래프로 한눈에 확인하고 5일치 예보를 받아볼수 있습니다. 또한 도시이름을 입력할 경우 해당도시의 날씨 정보를 받아볼 수 있습니다.

1. Figma(디자인 툴) 활용

- 레이아웃 및 디자인을 제작

2. JavaScript 활용

- 현재 날짜를 표시할 수 있는 코드를 작성
- 사용자의 현재 위도와 경도를 받아 올 수 있는 코드를 작성
- fetch를 활용하여 조건에 따라 Weather API를 받아오고 try에서 데이터 처리 catch에서는 error를 처리하는 코드를 작성
- fetch에서 처리한 error는 에러발생 화면으로 이동하며 window.location.reload()를 통해서 새로고침할 수 있는 코드를 작성
- 5일치 기상예보를 보여주기 위해 40개의 데이터를 slice와 map을 활용하여 5개만 추출할 수 있는 코드를 작성
- 라이브서치에서 toLowerCase를 활용하여 입력된 값을 소문자로 바꿔주고 include를 활용하여 단어를 포함하고 있는 목록을 filter를 통해 선별할 수 있음

3. React 활용

- 디자인한 내용을 Component로 구성함으로써 Component의 관리, 재사용성에 대해서 생각하기
- Array.map을 활용하여 Component를 반복하여 목록을 보여주고 slice를 통해 map의 갯수를 제어함
- useEffect를 활용하여 State값에 따라 불러올 API의 종류가 달라짐
- onFocus, onBlur를 통해 포커싱에 따른 State값이 변동됨
- 삼항 연산자를 활용하여 className 속성에 CSS효과 적용

4. Redux 활용

- Provider와 store를 통해 State가 필요한 Component에 보내줄 수 있음
- useDispatch를 활용하여 type, payload값을 reducer의 action인자에 제공할 수 있음
- type과 payload 활용하여 switch문으로 받아온 type에 따라 state값을 변경할 수 있음
- fetch와같은 비동기적 작업을 처리하기 위해 applyMiddleware을 활용하여 thunk를 제공
- 비동기적 작업을 처리하기 위해서는 useDispatch로 Middleware에 도달한 후 받아온 데이터를 다시한번 useDispatch로 reducer에 제공
- combineReducers를 통해 State를 관리하는 reducer을 통합하고 객체형태로 제공
- useSelector를 통해서 저장된 State값을 모든 컴포넌트에서 사용할 수 있음

5. Sass(SCSS) 활용

- Sass(SCSS)를 활용하여 변수에 필요한 CSS형태를 미리 저장하고 사용할 수 있으며 부모 CSS와 자식 CSS를 한번에 작성함으로써 CSS관리를 편하게 할 수 있음

6. 로딩 스켈레톤과 에러처리

- NPM 로딩 스켈레톤을 활용하여 로딩중에는 스켈레톤 이미지 처리, 에러발생시 에러 발생화면으로 전환 할 수 있음

## 완성작 미리보기

미리보기 : https://yun7420.github.io/weather-2023/

## 사용스택

- JavaScript, React를 사용하여 사이트를 완성합니다.
- Redux를 활용하여 State상태를 관리합니다.
- Redux Middleware을 활용하여 Action을 통해 비동기 작업을 처리합니다.
- Sass(SCSS)를 사용하여 CSS를 관리합니다.
- Git, GitHub을 사용하여 파일을 관리합니다.
- build를 통해 코드와 파일, 이미지, CSS파일등을 패키징 합니다.

## 프로젝트 실행과 마무리

- React를 설치합니다. `npx create-react-app 타이틀` || `create-react-app .(현재폴더)`
- Redux를 설치합니다. `npm install redux` || `npm install react-redux`
- Redux Middleware thunk를 설치합니다. `npm install redux-thunk`
- Sass(SCSS)를 설치합니다. `npm i sass --save-dev`
- 배포 환경에서 사용할 파일을 생성합니다. `npm run build`
- static 파일 서빙 프로그램 생성합니다. `npm install -g(현재 컴퓨터 모든 경로 사용가능) serve`
- build폴더 기반으로 웹 애플리케이션 서빙합니다. `serve -s build`

## 프로젝트 참고 사이트

1. Redux공식 홈페이지 (https://ko.redux.js.org/introduction/getting-started/)
2. Redux combineReducers공식 홈페이지 (https://ko.redux.js.org/api/combinereducers/)
3. Redux Middlware thunk 제공 (https://github.com/reduxjs/redux-thunk)
4. Sass(SCSS) 설치오류 해결 (https://xionwcfm.tistory.com/261) || (https://oddcode.tistory.com/197)
5. 로딩 스켈레톤 제공 (https://www.npmjs.com/package/react-loading-skeleton)
6. 라이브서치 코드 (https://no-yagun-yes-kaltae.tistory.com/m/3)
7. 깃허브 사이트에 build 하기 (https://velog.io/@nemo/github-page-deploy-%EB%B0%B0%ED%8F%AC)

## 프로젝트를 통해 배운 내용

### JavaScript

1. 사용자의 현재 위치 정보를 제공

```
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let { latitude, longitude } = position.coords;
    });
  };
```

2. fetch를 활용하여 API를 받아오기

```
  const getWeatherByCurrentLocation = (latitude, longitude) => {
    dispatch(getWeatherByCurrentLocationAction.weatherByCurrentLocation(latitude, longitude));
  };

  function forecastByCurrentLocation(latitude, longitude) {
    return async (dispatch, getState) => {
      try {
        dispatch({ type: "LOADING" });

        let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=f497d00bd8c5301f301474a97dfbfba3&units=metric`;
        let response = await fetch(url);
        let data = await response.json();

        if (response.status !== 200 || response.ok === false) {
          throw new Error("error");
        }

        dispatch({ type: "FORECAST_WEATHER", payload: { data } });
        dispatch({ type: "UNLOADING" });
      } catch (error) {
        dispatch({ type: "ERROR", payload: { error } });
        dispatch({ type: "UNLOADING" });
      }
    };
  }
```

3. 라이브서치 입력한 단어를 선별

```
  const [liveSearch, setLiveSearch] = useState(false);

  const filterLiveSearchList = liveSearchList.filter((city) => {
    return city.toLowerCase().includes(searchCity.toLowerCase());
  });
```

### React

1. useEffect를 활용하여 State값에 따라 API호출

```
  useEffect(() => {
    if (city === null) {
      getCurrentLocation();
    } else {
      getWeatherByCity();
      getForecastByCity();
    }
  }, [city]);
```

2. onFocus와 onBlur에 따른 State값 변경

```
  <input
    type="search"
    value={searchCity}
    onChange={(e) => setSearchCity(e.target.value)}
    onFocus={() => setLiveSearch(true)}
    onBlur={() => setLiveSearch(false)}
    placeholder="원하는 도시를 영어로 검색하세요"
  />
```

3. slice를 통해 map의 개수를 제한

```
  {forecastWeather && forecastWeather.slice(0,5).map((forecast, index) => (
    <li key={index}></li>
  ))}
```

4. API호출 후 로딩 스켈레톤 에러 처리

```
  if (loading) {
    <Skeleton width={"200px"} height={"40px"} baseColor="#222" highlightColor="#fff" />
  }

  if (error) {
    return <Error />;
  }
```

### Redux

## 프로젝트를 하면서 느낀점

처음으로 API를 호출해보면서 API를 로딩하는동안 사용자에게 어떤 UI를 제공할 것이며, API를 받아오는데 실패했을 경우 Error환경은 어떤식으로 처리할지 고민하게된 프로젝트였습니다. 또한 Redux를 처음으로 적용해봄으로써 Reducer관리 Middleware을 통해 비동기적인 State관리를 경험할 수 있었습니다.

