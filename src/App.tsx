import React, {FC} from 'react';
import './App.less';
import {ConfigProvider} from "antd";
import ruRU from 'antd/lib/locale-provider/ru_RU';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/router';

const App: FC = () => {
  return (
      <ConfigProvider locale={ruRU}>
          <BrowserRouter>
              <Router/>
          </BrowserRouter>
      </ConfigProvider>
  );
}

export default App;
