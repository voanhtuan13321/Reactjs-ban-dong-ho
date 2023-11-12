const lamTronGia = (price) => {
  return price.toFixed(2);
};

const isUserLogin = () => {
  const isLogin = localStorage.getItem('token');
  return isLogin ? true : false;
};

export { lamTronGia, isUserLogin };
