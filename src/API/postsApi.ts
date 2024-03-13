const baseURL = 'https://jsonplaceholder.typicode.com';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function getPostsListApi(page: number, limit: number): Promise<Post[]> {
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
      return response.json() as Promise<Post[]>;
    })
    .catch((error) => {
      console.error('Произошла ошибка:', error.message);
      throw error;
    });
}

export function getPostByIdApi(postId: number): Promise<Post> {
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
      return response.json() as Promise<Post>;
    })
    .catch((error) => {
      console.error('Произошла ошибка:', error.message);
      throw error;
    });
}
