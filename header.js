var React=require('react')

var Head=React.createClass({
	render:function(){
	
	
	
		return(
			<div >
				<div className="div">
					<p>
						<span>&#xe65b;</span>
						<span>河南教育学院(纬五路校区)<em>&#xe77a;</em></span>
						<span>&#xe60b;</span>
						
					</p>
					<input type="text" name="" id="" placeholder="&#xe610;搜索商家、商品名称" />
					<ul>
						<a href="#">胡闯鱼粉</a>
						<a href="#">饺子</a>
						<a href="#">麻辣烫</a>
						<a href="#">鸡排</a>
						<a href="#">冒菜</a>
						<a href="#">肯德基</a>
						<a href="#">寿司</a>
					</ul>
				</div>
			</div>
		)
	}
})

module.exports=Head