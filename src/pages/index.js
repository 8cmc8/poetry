
import Carousel from '../components/index/carousel';
import Library from '../components/index/library';
import Course from '../components/index/course';
import Community from '../components/index/community';
import Game from '../components/index/game';
// import { Divider } from 'antd';

export default () => {
  return (
    <div>
      <Carousel/>
      <br/><br/><br/>
      <Library/>
      <br/><br/><br/>
      <Course/>
      <br/><br/><br/>
      <Community/>
      <br/><br/><br/>
      <Game/>
    </div>
  );
}
