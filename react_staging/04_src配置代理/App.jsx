import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
    getStudnetData =　() => {
        axios.get('http://localhost:3000/api1/students').then(
            res => {console.log('请求成功了',res.data)},
            err => {console.log('请求失败了',err)})
    }
    getCartsData = () => {
        axios.get('http://localhost:3000/api2/cars').then(
            res => {console.log('请求成功了',res.data)},
            err => {console.log('请求失败了',err)})
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudnetData}>点我获取学生数据</button>
                <button onClick={this.getCartsData}>点我获取汽车数据</button>
            </div>
        )
    }
}
