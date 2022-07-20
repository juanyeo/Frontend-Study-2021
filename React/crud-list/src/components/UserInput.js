import React from 'react';

function UserInput({ username, email, onCreate, onChange }) {
    return (
        <div>
            <input
                name="username"
                value={username}
                placeholder="이름"
                onChange={onChange}
            />
            <input
                name="email"
                value={email}
                placeholder="이메일"
                onChange={onChange}
            />
            <button onClick={onCreate}>
                등록
            </button>
        </div>
    )
}

export default UserInput;