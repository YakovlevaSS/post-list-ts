import { IPost } from '../interface/postInterface';


const baseURL = 'https://jsonplaceholder.typicode.com';

export function getPostsListApi(page: number, limit: number): Promise<IPost[]> {
  return fetch(`${baseURL}/posts?_page=${page}&_limit=${limit}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Ошибка запроса: ${response.status} ${response.statusText}`,
        );
      }
      return response.json() as Promise<IPost[]>;
    })
    .catch((error) => {
      console.error('Произошла ошибка:', error.message);
      throw error;
    });
}

export function getPostByIdApi(postId: number): Promise<IPost> {
  return fetch(`${baseURL}/posts/${postId}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Ошибка запроса: ${response.status} ${response.statusText}`,
        );
      }
      return response.json() as Promise<IPost>;
    })
    .catch((error) => {
      console.error('Произошла ошибка:', error.message);
      throw error;
    });
}
