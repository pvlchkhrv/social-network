import React from 'react';
import {Layout, Menu} from 'antd';
import {AppRouter} from './components/AppRouter';

const App = () => {
    return (
        <Layout>
            <Layout.Header className='header'>
            </Layout.Header>
            <Layout>
                <Layout.Sider>Sider</Layout.Sider>
                <Layout.Content>
                    <AppRouter/>
                </Layout.Content>
            </Layout>
            <Layout.Footer>Footer</Layout.Footer>
        </Layout>
    );
};

export default App;
