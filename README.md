<div align="center">

<!-- logo -->
<img src="https://github.com/minhyun-k/todos/blob/main/public/todo_thumb.jpg" width="400" height="400"/>

### TODOS 🖍️

</div> 

## 📝 프로젝트 소개


**Todos**은 간단한 할 일 목록 관리 웹 애플리케이션입니다. 사용자가 할 일을 추가하고, 완료 처리하고, 삭제하는 기능을 제공합니다. 이 앱은 **React.js**와 **localStorage**를 사용하여 구현되었습니다. 이를 통해 사용자는 브라우저를 닫아도 데이터를 유지하며, 직관적이고 간편한 할 일 목록 관리 기능을 경험할 수 있습니다.

- **목적**: 할 일 목록을 효율적으로 관리하고, 사용자가 다양한 할 일을 쉽게 추가, 수정, 삭제할 수 있도록 돕습니다.
- **특징**: 할 일 목록을 추가, 수정, 삭제할 수 있으며, 할 일의 완료 여부를 표시하여 관리할 수 있습니다.
- **주요 학습 목표**: 
  - React.js의 상태 관리와 컴포넌트 설계를 이해하고, 로컬 저장소(localStorage)를 활용한 데이터 저장 방법을 익힙니다.
  - 사용자의 입력을 처리하고, 실시간으로 UI를 업데이트하는 방법을 학습합니다.

---

[**배포 사이트 바로가기**](https://todos-drab-delta.vercel.app/)  
[**GitHub Repository 바로가기**](https://github.com/minhyun-k/todos.git)
<br />

## 🗓 프로젝트 일정
**총 일정 2024.06 ~ 2024.08**



<br />
## 🛠 화면 구성

|화면 명|
|:---:|
|메인 화면|
|<img src="https://github.com/minhyun-k/todos/blob/main/public/todos.gif" width="450"/>|
|할일 목록 추가 시 express를 통한 데이터 저장 및 출력 CRUD기능을 모두 구현했습니다.|
<br />

## ⚙ 기술 스택

이 프로젝트는 다양한 최신 기술을 활용하여 구현되었습니다.


- **Frontend**: React.js, JavaScript, HTML5, CSS3  
- **server**: express, mongoDB  
- **배포**: Vercel  
- **GitHub**: 버전 관리 및 협업 도구

<br />

## :wrench: 주요 기능 및 특징

### 1) **할 일 목록 추가**
- **설명**: 사용자가 입력한 텍스트를 할 일 목록에 추가할 수 있습니다. 텍스트 필드를 이용해 할 일을 쉽게 추가할 수 있습니다.
- **기능**: 텍스트 입력 후 엔터 키나 추가 버튼 클릭으로 할 일이 목록에 추가됩니다.

### 2) **할 일 완료 처리**
- **설명**: 할 일 목록에서 각 항목을 클릭하면 완료 상태로 표시됩니다.
- **기능**: 완료된 할 일은 스타일이 변경되어 완료 여부를 한눈에 알 수 있습니다.

### 3) **할 일 삭제**
- **설명**: 할 일 목록에서 각 항목에 대한 삭제 버튼을 클릭하여 해당 할 일을 삭제할 수 있습니다.
- **기능**: 삭제 버튼을 클릭하면 해당 항목이 목록에서 제거됩니다.

### 4) **express 서버를 통한 데이터 유지**
- **설명**: 브라우저를 닫고 다시 열어도 할 일 목록이 유지됩니다. express를 활용하여 데이터를 저장하고 불러옵니다.
- **기능**: 사용자가 추가한 할 일 목록은 로컬 저장소에 자동으로 저장되며, 페이지를 새로 고침해도 사라지지 않습니다.

### 5) **반응형 디자인**
- **설명**: 모바일, 태블릿, 데스크톱 등 다양한 화면 크기에 최적화된 디자인을 제공합니다.
- **기술 사용**: CSS Media Queries 및 Flexbox를 활용하여 반응형 UI 구현.

---
<br />

## 🤔 기술적 이슈와 해결 과정

### 1) **localStorage 데이터 관리**
- **문제**: 페이지 새로 고침 후에도 데이터가 유지되지 않는 문제가 발생할 수 있음.
- **해결 방법**: 
  - React의 `useEffect`를 활용하여 컴포넌트가 렌더링될 때마다 localStorage에 저장된 데이터를 불러오도록 처리.
  - 할 일 목록의 추가, 삭제, 수정 시마다 localStorage에 데이터를 실시간으로 업데이트.

### 2) **할 일 완료 상태 표시 문제**
- **문제**: 완료된 할 일을 표시할 때, 상태 변경이 즉시 반영되지 않는 문제 발생.
- **해결 방법**: 
  - React의 `useState`를 활용하여 상태 변화를 실시간으로 반영하고, 변경된 상태를 localStorage에도 동기화.

### 3) **잦은 서버요청으로 인한 느려짐**
- **문제**: 'put' 기능을 통해 수정된 내용을 express 서버에 보내고, 다시 'get'을 통해 화면에 출력할 때, 두 번의 서버 요청으로 인해 매우 느려짐.
- **해결 방법**:
  - 수정된 내용을 서버에 보낼 때, 한번만 서버요청을 하고 그 이후 axios를 통한 전역변수 속에 직접 수정하는 함수를 담아 서버요청을 더이상 하지 않도록 했습니다. 즉, 서버측이 변경될 때, 이미 한 번 'get'을 통해 가져온 데이터를 직접 변경하여 다시 'get'을 통한 서버 요청이 이루어질 필요 없게 했습니다.


---

<br />

##  :file_folder: 폴더 구조
```plaintext
📂 src
 ┣ 📂 components         # 공통 컴포넌트
 ┃ ┣ 📜 TodoItem.jsx     # 개별 할 일 항목 컴포넌트
 ┃ ┣ 📜 TodoList.jsx     # 할 일 목록 컴포넌트
 ┃ ┣ 📜 TodoForm.jsx     # 할 일 추가 폼 컴포넌트
 ┃ ┗ 📜 Header.jsx       # 헤더 컴포넌트
 ┣ 📂 assets             # 정적 리소스 (이미지 등)
 ┣ 📜 App.js             # 메인 애플리케이션 파일
 ┗ 📜 index.js           # React DOM 렌더링
