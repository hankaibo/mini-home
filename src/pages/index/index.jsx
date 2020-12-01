import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    return (
      <Swiper
        indicatorDots
        indicatorColor='#999'
        indicatorActiveColor='#333'
        autoplay
        circular
        className='test-h'
      >
        <SwiperItem>
          <Image
            style='background: #fff;'
            src='https://img.soufunimg.com/news/2015_05/13/zhishi/1431510486917_000.jpg'
          />
        </SwiperItem>
        <SwiperItem>
          <Image
            style='background: #fff;'
            src='https://img.soufunimg.com/news/2015_05/13/zhishi/1431510069190_000.jpg'
          />
        </SwiperItem>
        <SwiperItem>
          <Image
            style='background: #fff;'
            src='https://img.soufunimg.com/news/2015_05/13/zhishi/1431510067943_000.jpg'
          />
        </SwiperItem>
        <SwiperItem>
          <Image
            style='background: #fff;'
            src='https://img.soufunimg.com/news/2015_05/13/zhishi/1431510067943_000.jpg'
          />
        </SwiperItem>
      </Swiper>
    )
  }
}
