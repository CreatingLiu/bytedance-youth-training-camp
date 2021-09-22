import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Button, Col, Input, Menu, Row } from 'antd';
import { OrderedListOutlined } from "@ant-design/icons";
import AntDesignLogo from './AntDesignLogo';
import phoneIcon from './phoneIcon.svg';

function App() {
	return (
		<div className="App">
			<Row align="middle" gutter={16}>
				<Col>
					<h1>
						<a id="logo" href="/">
							<img src={logo} alt="logo" />
							Ant Design
						</a>
					</h1>
				</Col>
				<Col flex="1">
						<Input placeholder="搜索" />
				</Col>
				<Col>
					<Menu mode="horizontal">
						<Menu.Item>设计</Menu.Item>
						<Menu.Item>文档</Menu.Item>
						<Menu.Item>组件</Menu.Item>
						<Menu.Item>资源</Menu.Item>
						<Menu.Item>国内镜像</Menu.Item>
						<Menu.SubMenu icon={<OrderedListOutlined />}>
							<Menu.Item>子菜单项</Menu.Item>
						</Menu.SubMenu>
					</Menu>
				</Col>
			</Row>
			<Row justify="center">
				<Col>
					<AntDesignLogo />
				</Col>
			</Row>
			<Row justify="center" style={{"marginTop": "30px"}}>
				企业级产品设计体系，创造高效愉悦的工作体验
			</Row>
			<Row justify='center' style={{"marginTop": "10px"}}>
				<a href="/"><img src={phoneIcon} alt="" />4.0 正式版发布</a>
			</Row>
			<Row justify="center" gutter={50} style={{"marginTop": "80px"}}>
				<Col>
					<Button type="primary" shape="round" size="large">开始使用</Button>
				</Col>
				<Col>
					<Button shape="round" size="large">设计语言</Button>
				</Col>
			</Row>
		</div>
	);
}

export default App;
