import React, { useEffect, useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import vi from 'date-fns/locale/vi';
import DatePicker, { registerLocale } from 'react-datepicker';
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Tooltip,
} from 'chart.js';
import 'react-datepicker/dist/react-datepicker.css';
import requestHandle from '../../utils/requestHandle';

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);
registerLocale('vi', vi);

export default function Statistical() {
  const [startDate, setStartDate] = useState(new Date());
  const [topGoodPrice, setTopGoodPrice] = useState({ labels: [], datas: [] });
  const [topUserBuyTheMost, setTopUserBuyTheMost] = useState({ labels: [], datas: [] });
  const [statistical, setStatistical] = useState({ labels: [], datas: [] });
  const [statisticalByYear, setStatisticalByYear] = useState(0);
  const [monthSelect, setMonthSelect] = useState(0);
  const [yearSelect, setYearSelect] = useState(0);

  useEffect(() => {
    window.document.title = 'Statistical';
    window.scrollTo(0, 0);

    getTopGoodPriceFromApi();
    getTopBestSellingFromApi();
    getTopUserByTheMost();
    getStatistical(monthSelect, yearSelect);
    getStatisticalByYear(yearSelect);
  }, []);

  const getTopGoodPriceFromApi = async () => {
    const response = await requestHandle.get('statistical/top-5-best-sellers');
    const result = await response.data.data;
    // console.log(result);
    const labels = [];
    const datas = [];
    result.forEach((product) => {
      labels.push(product.productName);
      datas.push(product.quantitySold);
    });
    setTopGoodPrice({ ...topGoodPrice, labels, datas });
  };

  const getTopBestSellingFromApi = async () => {
    // const response = await axiosInstent.get(pathApi.topBestSelling);
    // const result = await response.data;
    // const labels = [];
    // const datas = [];
    // result.forEach((order) => {
    //   labels.push(order.book.title);
    //   datas.push(order.quantity);
    // });
    // setTopBestSelling({ ...topBestSelling, labels, datas });
  };

  const getTopUserByTheMost = async () => {
    try {
      const response = await requestHandle.get('statistical/top-buy-the-most');
      const result = await response.data;
      const labels = [];
      const datas = [];
      result.forEach((rs) => {
        labels.push(rs.users.fullName);
        datas.push(rs.quantity);
      });
      setTopUserBuyTheMost({ ...topUserBuyTheMost, labels, datas });
    } catch (err) {
      console.error(err);
    }
  };

  const getStatistical = async (m, y) => {
    try {
      const date = new Date();
      m === 0 && (m = date.getMonth() + 1);
      y === 0 && (y = date.getFullYear());
      // console.log(m, y, urlApi);
      const response = await requestHandle.get(`statistical/${m}/${y}`);
      const result = await response.data;
      const labels = [];
      // console.log(response);
      // console.log(result);
      result.forEach((rs, index) => {
        labels.push(index + 1);
      });
      // console.log(labels);
      setStatistical({ ...statistical, labels, datas: result });
    } catch (error) {
      console.error(error);
    }
  };

  const getStatisticalByYear = async (y) => {
    // const date = new Date();
    // y === 0 && (y = date.getFullYear());
    // const urlApi = `${pathApi.statistical}/year/${y}`;
    // // console.log(m, y, urlApi);
    // const response = await axiosInstent.get(urlApi);
    // const result = await response.data;
    // setStatisticalByYear(result);
  };

  const sumTotalPrice = () => {
    const datas = statistical.datas;
    return datas.length > 0
      ? datas.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      : 0;
  };

  return (
    <main className='flex-1 overflow-y-auto pt-8 px-6 bg-base-200'>
      <div className='card w-full p-6 bg-base-100 shadow-xl mt-2'>
        <div className='container mx-auto'>
          <h1 className='text-2xl my-5 text-gray-800'>Statistical</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-3'>
            <div className='shadow-xl rounded-lg h-full'>
              <div className='py-3 text-2xl text-center font-bold'>Sản phẩm bán chạy nhất</div>
              <div className='p-4'>
                <Pie
                  data={{
                    labels: topGoodPrice.labels,
                    datasets: [
                      {
                        label: 'quantity sold',
                        data: topGoodPrice.datas,
                        backgroundColor: [
                          'rgb(255, 99, 132)',
                          'rgb(54, 162, 235)',
                          'rgb(255, 205, 86)',
                          'rgb(255, 134, 86)',
                          'rgb(4, 205, 86)',
                        ],
                        hoverOffset: 4,
                      },
                    ],
                  }}
                />
              </div>
            </div>

            <div className='shadow-xl rounded-lg h-full'>
              <div className='py-3 text-2xl text-center font-bold'>
                Khách hàng mua sách nhiều nhất
              </div>
              <div className='p-4 flex items-center'>
                <Bar
                  data={{
                    labels: topUserBuyTheMost.labels,
                    datasets: [
                      {
                        label: 'Số lượng đã mua',
                        data: topUserBuyTheMost.datas,
                        backgroundColor: 'rgba(54, 162, 235)',
                      },
                    ],
                  }}
                />
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='shadow-xl rounded-lg'>
              <div className='py-3 text-2xl text-center font-bold'>Thống kê doanh thu</div>
              <div className='p-4 flex'>
                <div className='basis-1/4 px-5'>
                  <div className='flex justify-between py-3'>
                    <label className='block'>Chọn mốc thời gian</label>
                    <DatePicker
                      className='w-20 text-end text-red-400 font-bold hover:text-red-500 outline-none cursor-pointer rounded-md'
                      selected={startDate}
                      onChange={(date) => {
                        console.log(date);
                        const month = date.getMonth() + 1;
                        const year = date.getFullYear();
                        setStartDate(date);
                        setMonthSelect(month);
                        getStatistical(month, year);
                        setYearSelect(year);
                        getStatisticalByYear(year);
                      }}
                      showMonthYearPicker
                      dateFormat='MM/yyyy'
                      locale='vi'
                    ></DatePicker>
                  </div>
                  <div className='flex justify-between py-3'>
                    <label className=''>Tổng doanh thu tháng:</label>
                    <span>{sumTotalPrice()}</span>
                  </div>
                  <div className='flex justify-between py-3'>
                    <label>Tổng doanh thu năm:</label>
                    <span>{statisticalByYear}</span>
                  </div>
                </div>
                <div className='basis-3/4'>
                  <Bar
                    width={100}
                    height={50}
                    data={{
                      labels: statistical.labels,
                      datasets: [
                        {
                          label: 'Doanh thu',
                          data: statistical.datas,
                          backgroundColor: 'rgba(54, 162, 235)',
                        },
                      ],
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
