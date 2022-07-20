import React from 'react';

// 하위 컴포넌트: props 로 값을 받는다
// 삼항연산자로 데이터에 따라 뷰 선택: 조건 ? true뷰 : false뷰
// 이벤트 함수에 매개변수를 전달할 때는 {() => onRemove(user.id)}
function UserItem({ user, onRemove, onToggle }) {
    return (
        <div>
            <b 
                style={{
                    color: user.active ? 'green' : 'black',
                    cursor: 'pointer'
                }} 
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            &nbsp;
            <span>{user.email}</span>
            &nbsp;
            <button onClick={() => onRemove(user.id)}>
                삭제
            </button>
        </div>
    )
}

// 반복되는 UI는 배열의 .map(item => )을 사용한다
function UserList({ users, onRemove, onToggle }) {

    return (
        <div>
            {
                users.map(
                    user => (
                    <UserItem 
                        key={user.id} 
                        user={user}
                        onRemove={onRemove}
                        onToggle={onToggle}
                    />
                    )
                )
            }
        </div>
    )

}

export default UserList;