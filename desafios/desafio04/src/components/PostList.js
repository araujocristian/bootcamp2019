import React, { Component } from "react";
import Post from "./Post";

import "./PostList.css";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar:
            "https://scontent.fcgh37-1.fna.fbcdn.net/v/t1.0-9/82738724_1194005917464350_7381392981737078784_n.jpg?_nc_cat=106&_nc_oc=AQksceAEXY3iRs1zAuclC_dhrqCzz1Og2u2zyuktEmb-KuF-2Am7rGkOzRL48t79JyjZtx5b-MpV4u9vxsuscyXl&_nc_ht=scontent.fcgh37-1.fna&oh=8628b72ce647e56fd37f336c71085ed9&oe=5ED8A3BA"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://scontent.fcgh37-1.fna.fbcdn.net/v/t1.0-9/p960x960/64941973_1029286287269648_2341337632560119808_o.jpg?_nc_cat=103&_nc_oc=AQm4oFt3lwvdROdC9p6a1HPJ0_Uv68Rm8PxcEajKERvG5FW2SDGCJJMnaRWK7khSKL0IkzzWfiBG5BcSac9gbKUK&_nc_ht=scontent.fcgh37-1.fna&_nc_tp=1002&oh=cdd50f4153e2d885e6a03135031c55c0&oe=5EA178B9"
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 2,
            author: {
              name: "Fernandes Junior",
              avatar:
                "https://scontent.fcgh37-1.fna.fbcdn.net/v/t1.0-9/64393815_1029251490606461_8881512452777312256_n.jpg?_nc_cat=108&_nc_oc=AQk_ReRULGXuJLS1cvudxndYVBRB3C8Ee-X2nhk6P633ZrBkbXM-rzOSEHrRa89dy1ekIJ7afOW_jJp28FGqpo30&_nc_ht=scontent.fcgh37-1.fna&oh=c82f5d5c2369de8ed8da9d01619c443e&oe=5E921750"
            },
            content:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eos consequuntur cum harum tempore rem eveniet, reiciendis, illo et a nemo veritatis? Recusandae, officia obcaecati perspiciatis doloremque optio cum iure."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar:
            "https://scontent.fcgh37-1.fna.fbcdn.net/v/t1.0-9/82738724_1194005917464350_7381392981737078784_n.jpg?_nc_cat=106&_nc_oc=AQksceAEXY3iRs1zAuclC_dhrqCzz1Og2u2zyuktEmb-KuF-2Am7rGkOzRL48t79JyjZtx5b-MpV4u9vxsuscyXl&_nc_ht=scontent.fcgh37-1.fna&oh=8628b72ce647e56fd37f336c71085ed9&oe=5ED8A3BA"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://scontent.fcgh37-1.fna.fbcdn.net/v/t1.0-9/64393815_1029251490606461_8881512452777312256_n.jpg?_nc_cat=108&_nc_oc=AQk_ReRULGXuJLS1cvudxndYVBRB3C8Ee-X2nhk6P633ZrBkbXM-rzOSEHrRa89dy1ekIJ7afOW_jJp28FGqpo30&_nc_ht=scontent.fcgh37-1.fna&oh=c82f5d5c2369de8ed8da9d01619c443e&oe=5E921750"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="post-list-container">
        {posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
