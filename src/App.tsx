import { useEffect, useState } from 'react';
import axios from 'axios';

import Posts from './components/Post';
import { PostInterface } from './types/types';

const URL = 'http://localhost:15000/posts/';

const App = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]) //* Создаём стейт с дефолтным состоянием, который должен будет хранить в себе данные типа интерфейса

  useEffect(() => {
    fetchPosts();
  }, []) //* Вызываем функцию при инициализации

  async function fetchPosts () {
    const response = await axios.get<PostInterface[]>(URL); //* С помощью axios отправляем get-запрос на URL. Указываем интерфейс, чтобы data воспринимался как массив элементов
    setPosts(response.data); //* Устанавливаем стейт у setPosts на полученные данные
  }

  return (
    <Posts posts = {posts} />
  );
};
export default App;
