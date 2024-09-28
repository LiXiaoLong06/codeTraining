import axios from 'axios';



export const fetchPhotos = () => {
    return axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.data)
      .catch(error => {
        console.error('获取数据时出错:', error);
        throw error; // 抛出错误以便调用方处理
      });
  };
  
export default axios
