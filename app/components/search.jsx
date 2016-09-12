
require('./search.css');
import React from 'react';

let Search = React.createClass({
	getInitialState: function() {
		return {
			bg: "transparent",
		}
	},
	componentDidMount: function() {
		let _this = this;
		window.onscroll = (event) => {
			let realHeight = document.documentElement.scrollTop || document.body.scrollTop;
			let optatic = 0.8 * (realHeight/142);
			if(optatic <= 0.8 ) {
				_this.setState({
					bg: `rgba(234, 44, 44, ${optatic})`,
				})
			}
		}
	},
	handleClick:function(){
		window.location.href='http://m.jd.com/?cu=true&utm_source=m.caijing.quxingwen.com&utm_medium=tuiguang&utm_campaign=t_1000024337_&utm_term=617b19d3aff44591b11306961a2a7c1f&abt=3'
	}
	,
	login:function(){
		window.location.href='https://plogin.m.jd.com/user/login.action?appid=100&returnurl=http%3A%2F%2Fm.jd.com%3Findexloc%3D1%26sid%3D190149b2cb107605e93955f8a43a2446'
	}
	,
	render: function() {
		let bColor = this.state.bg ? this.state.bg : 'transprent';
		return (
			<div id="search" className="pf"  style={{ background: bColor }}>
				<div className="search pr">
					<div className="sl pa">
						<i></i>
					</div>
					<div className="frc pr">
						<span className="searchicon pa"></span>
						<form>
							<input placeholder="全场畅饮，部分低至99减50" type="text" onClick={this.handleClick}/>
						</form>
					</div>
					<div className="sub pa" onClick={this.login} >
						<span >登录</span>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Search;
