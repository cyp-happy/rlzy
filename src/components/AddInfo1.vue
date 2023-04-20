<template>
	<div class="modal">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">用户信息表单</h5>
					<button type="button" class="close" @click="$emit('close')">
						<span>&times;</span>
					</button>
				</div>
				<!-- <div class="modal-body"> -->
					<div class="scrollable">
					<form class="form" @submit.prevent="handleSubmit">
						<div class="grid-container">
							<div class="form-group">
								<label for="username" class="col-sm-3 col-form-label text-right">姓名</label>
								<input type="text" id="username" v-model="userInfo.username" class="form-control" required />
							</div>
							<div class="form-group">
								<label for="gender" class="col-sm-3 col-form-label text-right">性别</label>
								<select id="gender" v-model="userInfo.gender" class="form-control" required>
									<option v-for="option in Options.genderOptions" :value="option.value">
										{{ option.text }}
									</option>
								</select>
							</div>
							<div class="form-group">
								<label for="work" class="col-sm-3 col-form-label text-right">岗位植物</label>
								<input type="text" id="work" v-model="userInfo.work" class="form-control" required />
							</div>

							<div class="form-group">
								<label for="rank" class="col-sm-3 col-form-label text-right">jx</label>
								<select id="rank" v-model="userInfo.rank" class="form-control" required>
									<option v-for="option in Options.workPlaceOptions" :value="option.value">
										{{ option.text }}
									</option>
								</select>
							</div>

							<div class="form-group">
								<label for="rankTime" class="col-sm-3 col-form-label text-right">jx时间</label>
								<input type="month" id="rankTime" v-model="userInfo.rankTime" class="form-control"
									required />
							</div>

							<div class="form-group">
								<label for="worktitle" class="col-sm-3 col-form-label text-right">植物层级</label>
								<select id="worktitle" v-model="userInfo.worktitle" class="form-control" required>
									<option v-for="option in Options.workPlaceOptions" :value="option.value">
										{{ option.text }}
									</option>
								</select>
							</div>

							<div class="form-group">
								<label for="worktitleTime" class="col-sm-3 col-form-label text-right">植物层级时间</label>
								<input type="date" id="worktitleTime" v-model="userInfo.worktitleTime" class="form-control"
									required />
							</div>

							<div class="form-group">
								<label for="birthdate" class="col-sm-3 col-form-label text-right">出生时间</label>
								<input type="date" id="birthdate" v-model="userInfo.birthdate" class="form-control"
									required />
							</div>

							<div class="form-group">
								<label for="worktime" class="col-sm-3 col-form-label text-right">ruwu年月</label>
								<input type="month" id="worktime" v-model="userInfo.worktime" class="form-control"
									required />
							</div>

							<div class="form-group">
								<label for="education" class="col-sm-3 col-form-label text-right">文化程度</label>
								<select id="education" v-model="userInfo.education" class="form-control" required>
									<option v-for="option in Options.workPlaceOptions" :value="option.value">
										{{ option.text }}
									</option>
								</select>
							</div>

							<div class="form-group">
								<label for="origin" class="col-sm-3 col-form-label text-right">籍贯</label>
								<input type="text" id="origin" v-model="userInfo.origin" class="form-control" required />
							</div>
							<div class="form-group">
								<label for="major" class="col-sm-3 col-form-label text-right">专业领域</label>
								<select id="major" v-model="userInfo.major" class="form-control" required>
									<option v-for="option in Options.workPlaceOptions" :value="option.value">
										{{ option.text }}
									</option>
								</select>
							</div>

							<div class="form-group">
								<label for="majorAA" class="col-sm-3 col-form-label text-right">人才层次</label>
								<select id="majorAA" v-model="userInfo.majorAA" class="form-control" required>
									<option v-for="option in Options.workPlaceOptions" :value="option.value">
										{{ option.text }}
									</option>
								</select>
							</div>
							
							<div class="form-group">
								<label for="majorClass" class="col-sm-3 col-form-label text-right">专业细类</label>
								<input type="text" id="majorClass" v-model="userInfo.majorClass" class="form-control" required />
							</div>
							<div class="form-group">
								<label for="train" class="col-sm-3 col-form-label text-right">培训情况</label>
								<input type="text" id="train" v-model="userInfo.train" class="form-control" required />
							</div>

							<div class="form-group">
								<label for="workExperience" class="col-sm-3 col-form-label text-right">相关工作经历</label>
								<input type="text" id="workExperience" v-model="userInfo.workExperience" class="form-control" required />
							</div>
						</div>
						<button type="submit" style="margin-top: 20px" class="btn btn-primary" >提交</button>
					</form>
				<!-- </div> -->
			</div>
			</div>
		</div>
	</div>
</template>
  
<script>
import { reactive } from 'vue';
import axios from 'axios'
export default {
	setup(props,{emit}) {
		const userInfo = reactive({
			username:'1',//姓名
			gender:'man',//性别
			work:'1',//岗位植物
			rank:'A',//junxian
			rankTime:'2001-01',//jx时间
			worktitle:'A',//植物等级
			worktitleTime:'2001-02-02',//植物等级时间
			birthdate: '2001-03-03',//出生年月
			worktime: '2001-09',//ruwu年月
			education:'A',//文化程度
			origin:'1',//籍贯
			major:'A',//专业
			majorClass:'A',//人才层次
			majorAA:'A',//专业细类
			train:'1',//培训情况
			workExperience:'1',//工作经历

		});
		const Options = {
			workPlaceOptions : [
			{ text: 'A', value: 'A' },
			{ text: 'B', value: 'B' },
			{ text: 'C', value: 'C' }
		],genderOptions:[
			{ text: '男', value: 'man' },
			{ text: '女', value: 'woman' }
		],};
		const handleSubmit = () => {
			console.log(userInfo);
			//将用户信息提交到服务器或者存储到本地
			axios.post('http://192.168.150.57:5000/newapp/addinfo',userInfo).then(response => {
				console.log(response.data).catch(error=>{
				console.log(error);
			});
			});
			emit('close');
		};
        // const closeModal = () => {
		// 	$emit('close');
		// };
		return {
			userInfo,
			Options,
			handleSubmit,
            // closeModal,
		};
	}
};
</script>
  
  
  
<style>
.modal {
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
}

.modal-dialog {
	width: 800px;
	max-width: 90%;
	background-color: white;
	border-radius: 5px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.modal-content {
  border-radius: 0;
  border: none;
}


.modal-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 10px;
	border-bottom: 1px solid #ccc;
	border-bottom: none;
}

.modal-title {
	margin: 0;
    font-size: medium;
}
.scrollable {
  height: 400px; /* 设置容器高度 */
  overflow-y: auto; /* 设置垂直方向滚动条 */
  padding: 10px; /* 设置内边距 */
}
/* 滚动条样式 */
.scrollable::-webkit-scrollbar {
  width: 6px;
}
.scrollable::-webkit-scrollbar-track {
  background-color: #f5f5f5;
}
.scrollable::-webkit-scrollbar-thumb {
  background-color: #ccc;
}
.close {
	font-size: 1.5rem;
	font-weight: bold;
	color: #333;
	opacity: 0.5;
	cursor: pointer;
	border: none;
	background-color: transparent;
	outline: none;
}

.close:hover,
.close:focus {
	opacity: 1;
}

.form-group {
	margin-bottom: 1rem;
	display: flex;
	justify-content: start;
	margin-right: 10px;
	margin-top: 30px;
	align-items: center;
    margin-bottom: 20px;
}
.col-sm-3 {
  flex: 0 0 150px;
  text-align: right;
  margin-right: 5px;
}

.form-group label {
	margin-bottom: 0;
	width:100px;
	display: inline-block;
	padding: 0 10px;
	vertical-align: middle;
    font-size: 14px;
    font-weight: bold;
    font-family: Arial;
    color: #000000;

}

.form-control {
	width: 100%;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	vertical-align: middle;
	line-height: 1.5;
	color: #495057;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid #ced4da;
	border-radius: 0.25rem;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control:focus {
	border-color: #80bdff;
	box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.btn {
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: #fff;
	background-color: #007bff;
	border-color: #007bff;
	border-radius: 0.25rem;
	padding: 0.375rem 0.75rem;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
		border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn:hover {
	color: #fff;
	background-color: #0069d9;
	border-color: #0062cc;
}

.btn:focus {
	box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
	outline: none;
}

.btn-primary {
	color: #fff;
	background-color: #007bff;
	border-color: #007bff;
}

.btn-primary:hover {
	color: #fff;
	background-color: #0069d9;
	border-color: #0062cc;
}

.btn-primary:focus {
	box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
	outline: none;
}


.form {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.grid-container {
	display: grid;
	grid-template-columns: repeat(2, 2fr);
}</style>