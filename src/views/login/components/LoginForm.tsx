/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-02 17:38:29
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-07 13:35:17
 * @FilePath: \react-admin\src\views\login\components\LoginForm.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import { Login } from "@/api/interface";
import { getUserInfoById, getUserMenuList, loginApi } from "@/api/modules/login";
import { useState } from "react";
import { HOME_URL } from "@/config/config";
import md5 from "js-md5";
import { connect } from "react-redux";
import { setToken, setUserInfo } from "@/redux/modules/global/action";
import { setTabsList } from "@/redux/modules/tabs/action";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { setUserMenuList } from "@/redux/modules/menu/action";
const LoginForm = (props: any) => {
	const { t } = useTranslation();
	const { setToken, setTabsList, setUserMenuList, setUserInfo } = props;
	const navigate = useNavigate();
	const [form] = Form.useForm();
	const [loading, setLoading] = useState<boolean>(false);

	const onFinish = async (loginForm: Login.ReqLoginForm) => {
		// debugger;
		try {
			setLoading(true);
			// loginForm.password = md5(loginForm.password);
			const { data } = await loginApi(loginForm);

			setToken(data?.token);
			const { data: userInfoData } = await getUserInfoById(data!.id);

			// debugger;
			setUserInfo(userInfoData);
			// const { data: userMenuData } = await getUserMenuList(data!.id);
			// setUserMenuList(userMenuData as Menu.UserMenuOptions[]);
			setTabsList([]);
			message.success("登录成功！");
			navigate(HOME_URL);
		} finally {
			setLoading(false);
		}
	};

	const onFinishFailed = (errInfo: any) => {
		console.log("login failed", errInfo);
	};

	return (
		<Form
			form={form}
			name="basic"
			labelCol={{ span: 5 }}
			initialValues={{ remeber: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			size="large"
			autoComplete="off"
		>
			<Form.Item name="name" rules={[{ required: true, message: "请输入用户名" }]}>
				<Input placeholder="用户名：coderwhy" prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
				<Input.Password autoComplete="new-password" placeholder="密码：123456" prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className="login-btn">
				<Button
					onClick={() => {
						form.resetFields();
					}}
					icon={<CloseCircleOutlined />}
				>
					{t("login.reset")}
				</Button>
				<Button type="primary" htmlType="submit" loading={loading} icon={<UserOutlined />}>
					{t("login.confirm")}
				</Button>
			</Form.Item>
		</Form>
	);
};

const mapDispatchToProps = { setToken, setTabsList, setUserMenuList, setUserInfo };
export default connect(null, mapDispatchToProps)(LoginForm);
