import { Children, createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvide = ({ Children }) => {
  const preuset = [{ email: "hong@mail.com", password: "1234" }];
  const [users, setUsers] = useState(preuset); //사용자 목록
  const [currentUser, setCurrentUser] = useState(null); //현재 로그인된 사용자

  const signup = (email, password) => {
    if (users.find((user) => user.email === email)) {
      return { error: "이미 가입된 이메일 입니다." };
    }
    const newUser = { email, password };
    setUsers([...users, newUser]);
    return { sucess: true };
  };
  const login = (email, password) => {
    const user = users.find(
      (user) => user.email === email && user.email === password
    );
    if (!user) {
      return { error: "이메일 또는 비밀 번호를 확인해주세요" };
    }
    setCurrentUser(user);
    return { sucess: true };
  };
  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ users, currentUser, signup, login, logout }}>
      {Children}
    </AuthContext.Provider>
  );
};
