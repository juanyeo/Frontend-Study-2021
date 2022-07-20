import React, { useState, useRef } from 'react';
import UserList from './components/UserList';
import UserInput from './components/UserInput';

function App() {

  // 컴포넌트 내부에서 값을 저장하기 위해 state, setState 사용
  const [state, setState] = useState({
    username: '',
    email: ''
  });

  // 컴포넌트 내부에서 값을 저장하기 위해 useRef 사용
  // 값이 바뀌어도 뷰가 렌더링 되지 않는다
  const maxId = useRef(4);

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'peter',
        email: 'peter.rt@example.com',
        active: true
    },
    {
        id: 2,
        username: 'bottex',
        email: 'bottex.rt@google.com',
        active: true
    },
    {
        id: 3,
        username: 'robert',
        email: 'robert.rt@naver.com',
        active: false
    }
  ]);

  // 불변성을 유지하면서 배열에 항목을 추가하는 방법
  // 1. concat 2. ...users (스프레드 문법)
  const onCreate = () => {

    const newUser = {
      id: maxId.current,
      username: state.username,
      email: state.email
    }
    setUsers(users.concat(newUser));
    //setUsers([...users, newUser]);

    setState({
      username: '',
      email: ''
    });

    maxId.current += 1;
  };

  // e.target 으로 이벤트 객체 input 의 정보를 받아온다
  // [name]: value 문법으로 바뀐 값 username/email 만 변경
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  // 불변성을 유지하면서 항목 삭제하는 방법: filter (false 인 것 제거)
  const onRemove = (id) => {
    setUsers(users.filter(user => user.id !== id))
  };

  // 업데이트 할 때도 map을 사용한다
  const onToggle = (id) => {
    setUsers(users.map(
      user => user.id === id
      ? {...user, active: !user.active}
      : user
    ));
  };

  return (
    <div>
      <UserInput
        username={state.username}
        email={state.email}
        onCreate={onCreate}
        onChange={onChange}
      />

      <UserList 
        users={users} 
        onRemove={onRemove} 
        onToggle={onToggle}
      />
    </div>
  );
}

export default App;
