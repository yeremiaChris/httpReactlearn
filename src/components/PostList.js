import React, { Component } from 'react'

// axios library
import axios from 'axios'



class PostList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             error: ''
        }
    }
    // jadi state di atas adalah array kosong kita menggunakan componentDidMount untuk 
    // mengupdate statenya dengan menangkap dengan menggunakan get method melalui api
     
    // menggunakan axios untuk buat get request
    // ini akan di eksekusi pertama kali dan hanya sekali 
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);

            this.setState({
                posts: response.data
            })
        })
        .catch(error => {
            console.log(error);
            this.setState({
                error: 'Error retreiving data'
            })
        })
    }
    

    render() {

        const {posts, error} = this.state

        return (
            <div>
                List of posts    
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}>{post.title}</div> ) :
                    null
                }           

                {
                    error ? <div>{error}</div> : null
                } 
            </div>
        )
    }
}

export default PostList
