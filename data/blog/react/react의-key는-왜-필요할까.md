---
title: 리액트의 key 속성은 왜 필요할까?
date: '2021-08-15'
tags: ['React']
draft: false
summary: '리액트의 재렌더링 원리와 key 속성을 알아봅니다.'
image: ['/static/images/logos/react.png']
---

### 목차

<TOCInline toc={props.toc} exclude="Overview" toHeading={3} />

리액트 개발을 해보신 분들이라면 `map` 등을 사용해 컴포넌트를 반복적으로 생성할 때 <span style = {{color: "red", fontSize: "0.9rem"}}>'Warning: Each child in a list should have a unique "key" prop.'</span> 이라는 경고를 보신 적이 있을 것입니다.

과연 `key` 속성이 왜 필요한 것인지 리액트의 렌더링 원리와 함께 알아보도록 하겠습니다.

## 요소 트리

리액트는 컴포넌트의 상태나 속성(prop)이 변할 때마다 `render()` 함수를 호출하는데요, `render()` 함수는 새로운 리액트 요소 트리를 반환하고 이를 기존의 요소 트리와 비교해 새로운 변경점에 대해서만 재렌더링을 수행합니다.

잠깐 트리를 비교하는 부분을 더 소개하자면 리액트는 $O(N)$ _(N = 노드의 개수)_ 의 시간 복잡도로 두 트리를 비교하기 위해 `key` 속성을 사용하고, 자식 요소들을 반복적으로 렌더링하는 상황에서 명시적으로 `key`를 사용합니다. [공식 문서 설명](https://reactjs-kr.firebaseapp.com/docs/reconciliation.html#%EB%8F%99%EA%B8%B0)

## 자식 요소의 렌더링 반복하기

이름의 배열을 렌더링하고, 새로운 이름을 추가하는 예시를 만들어 보겠습니다.

### 1. 기존 요소들 뒤에 추가하기

리액트는 기존의 요소 트리와 새로운 요소 트리의 차이를 위에서 아래로 검사합니다.

```jsx
// 기존 요소 형태
<ul>
  <li>first</li>
  <li>second</li>
</ul>

// 새로운 요소 형태
<ul>
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ul>
```

따라서 위와 같은 상황에서는 `<li>first</li>` 와 `<li>second</li>` 는 다시 렌더링하지 않고, 새로운 변경점인 `<li>third</li>` 에 대해서만 재렌더링을 수행합니다.

코드로 예로 들어 보겠습니다.

```jsx
// 가상의 이름 데이터를 위한 라이브러리
import faker from 'faker'
import { useState } from 'react'

faker.locale = 'ko'

export default function Home() {
  const [nameList, setNameList] = useState([])

  const generateElement = () => {
    setNameList([...nameList, faker.name.firstName()])
  }

  return (
    <ul>
      {nameList.map((name) => (
        <div>{name}</div>
      ))}
      <button onClick={generateElement}>이름 추가</button>
    <ul>
  )
}
```

![rendering-sequentially](/static/images/react/key를-왜-사용할까/rendering-sequentially.gif)

버튼을 누르면 `<div>{새로운 이름}</div>` 요소가 **리스트의 끝에** 새로 추가되고, 새롭게 추가된 요소만 재렌더링하고 있는 모습입니다.
이처럼 기존 요소들의 끝에 요소를 추가할 때는 별로 문제가 되지 않습니다.

### 2. 기존 요소들 앞에 추가하기

문제가 되는 상황은 바로 렌더링 순서가 달라질 때입니다.

```jsx
// 기존 요소 형태
<ul>
  <li>first</li>
  <li>second</li>
</ul>

// 새로운 요소 형태
<ul>
  <li>third</li>
  <li>first</li>
  <li>second</li>
</ul>
```

만약 요소 트리의 형태가 위와 같이 변경된다면, 리액트는 "아, `<li>first</li>` 앞에 `<li>third<li>` 를 삽입하면 되겠구나!" 가 아닌, "에라 모르겠다" 하고 그냥 세 요소를 모두 재렌더링합니다.

코드로 예를 들어 보겠습니다.

```jsx
import faker from 'faker'
import { useState } from 'react'

faker.locale = 'ko'

export default function Home() {
  const [nameList, setNameList] = useState([])

  const generateElement = () => {
    const temp = [...nameList]
    // 새로운 이름들을 배열의 "앞에" 추가합니다.
    temp.unshift(faker.name.firstName())
    setNameList(temp)
  }

  return (
    <ul>
      {nameList.map((name) => (
        <li style={{ listStyle: 'none' }}>{name}</li>
      ))}
      <button onClick={generateElement}>이름 추가</button>
    </ul>
  )
}
```

![rendering-unshift](/static/images/react/key를-왜-사용할까/rendering-unshift.gif)

버튼을 누르면 리스트의 앞에 요소가 추가되고, 모든 `<li>` 요소들이 깜빡이면서 재렌더링이 수행됨을 알 수 있습니다.  
바로 이런 상황을 최적화하기 위해 `key` 속성을 사용하는 것입니다.

### 3. key 속성과 함께 기존 요소들 앞에 추가하기

이제 `key` 속성을 사용해 보겠습니다.

```jsx
// 기존 요소 형태
<ul>
  <li key = "1">first</li>
  <li key = "2">second</li>
</ul>

// 새로운 요소 형태
<ul>
  <li key = "3">third</li>
  <li key = "1">first</li>
  <li key = "2">second</li>
</ul>
```

`key` 속성을 부여하면 리액트는 더이상 세 요소들을 모두 다시 렌더링하지 않고, "아, `<li>third</li>` 는 키가 1인 `<li>first</li>` 위에 렌더링하면 되겠구나!" 라고 키를 토대로 효율적인 렌더링을 시도합니다.

위에서 보았던 비효율적인 코드에 `key`를 추가해 보겠습니다.

```jsx
import faker from 'faker'
import { useState } from 'react'

faker.locale = 'ko'

export default function Home() {
  const [nameList, setNameList] = useState([])

  const generateElement = () => {
    const temp = [...nameList]
    // 새로운 이름들을 배열의 "앞에" 추가합니다.
    temp.unshift(faker.name.firstName())
    setNameList(temp)
  }

  return (
    <ul>
      {nameList.map((name) => (
        <li style={{ listStyle: 'none' }} key={name}>
          {name}
        </li>
      ))}
      <button onClick={generateElement}>이름 추가</button>
    </ul>
  )
}
```

![rendering-with-key](/static/images/react/key를-왜-사용할까/rendering-with-key.gif)

어떤가요? 이제 모든 `<li>` 요소들을 재렌더링하는 대신, 새로 추가된 요소만을 재렌더링할 수 있게 되었습니다.

## key를 사용할 때 주의할 점

`key`를 사용할 때 주의해야 할 점이 하나 있습니다.

```jsx
todos.map((todo, index) => (
    <Todo {...todo} key={index} />
  ));
}
```

아마 위와 같이 `map()` 함수를 사용할 때 인자로 주어지는 인덱스를 `key`로 사용하는 경우가 많았을 텐데요, 이는 리액트 공식 문서에도 명시된 안티패턴입니다.

요소에는 반드시 고유한 `key` 값이 필요하며, 요소가 갖는 `key` 값이 달라질 경우에는 성능 하락이나 예상치 못한 문제가 생길 수도 있기 때문입니다.

코드로 예를 들어 보겠습니다.

```jsx
import faker from 'faker'
import { useState } from 'react'

faker.locale = 'ko'

export default function Home() {
  const [nameList, setNameList] = useState([])

  const generateElement = () => {
    const temp = [...nameList]
    temp.unshift(faker.name.firstName())
    setNameList(temp)
  }

  return (
    <ul>
      {nameList.map((name, idx) => (
        // 이전 코드에서는 고유한 이름을 key로 사용했지만, 이번에는 인덱스를 사용했습니다.
        <li style={{ listStyle: 'none' }} key={idx}>
          {name}
        </li>
      ))}
      <button onClick={generateElement}>이름 추가</button>
    </ul>
  )
}
```

![key-with-index.gif](/static/images/react/key를-왜-사용할까/key-with-index.gif)

보시는 것처럼 `key`를 **<u>사용하지 않았을 때와 똑같이</u>** 모든 형제 요소가 재렌더링되는 모습입니다.

이처럼 요소의 순서가 변할 수도 있는 상황이라면 `key`를 인덱스로 설정해서는 안되며, 대신 해당 데이터가 갖는 ID값이나 별도의 고유 ID 라이브러리 등을 사용해 언제나 요소의 `key` 값이 고유함을 보장해줘야 합니다.
