import React from "react";

const CommentsData = [
  {
    name: "Darshit Gupta",
    text: "loren jbjvbdjbvjhdbvjhfbhj",
    reply: [
      {
        name: "Shubham Gupta",
        text: "loren jbjvbdjbvjhdbvjhfbhj",
        reply: [],
      },
      {
        name: "AMan Gupta",
        text: "loren jbjvbdjbvjhdbrhuigr bhb??  vjhfbhj",
        reply: [
          {
            name: "Ap hvh Code ",
            text: "loren jbjvbdjbvjhdbvjhfbhj hbvjhvbjd",
            reply: [
              {
                name: "Ritesh Singh",
                text: "Atarra Banda loren jbjvbdjbvjhdbvjhfbhj hbvjhvbjd",
                reply: [],
              },
            ],
          },
          {
            name: "Rajiv Code ",
            text: "loren jbjvbdjbvjhdbvjhfbhj hbvjhvbjd",
            reply: [],
          },
        ],
      },
      {
        name: "Vishal Gupta",
        text: "loren jbjvbdjbvjhdbvjhv jhv  hdbvhjdb fbhj",
        reply: [],
      },
    ],
  },
  {
    name: "Ap Code Lko",
    text: "loren jbjvbdjbvjhdbvjhfbhj hbvjhvbjd",
    reply: [],
  },
  {
    name: "AMan Gupta Delhi",
    text: "loren jbjvbdjbvjhdbrhuigr bhb??  vjhfbhj",
    reply: [
      {
        name: "AMan Gupta Lko",
        text: "loren jbjvbdjbvjhdbrhuigr bhb??  vjhfbhj",
        reply: [
          {
            name: "Ap hvh Code ",
            text: "loren jbjvbdjbvjhdbvjhfbhj hbvjhvbjd",
            reply: [
              {
                name: "Ritesh Singh Bhatnagar",
                text: "Atarra Banda loren jbjvbdjbvjhdbvjhfbhj hbvjhvbjd",
                reply: [],
              },
            ],
          },
          {
            name: "Rajiv Code ",
            text: "loren jbjvbdjbvjhdbvjhfbhj hbvjhvbjd",
            reply: [],
          },
        ],
      },
      {
        name: "Rajiv Code ",
        text: "loren jbjvbdjbvjhdbvjhfbhj hbvjhvbjd",
        reply: [],
      },
    ],
  },
  {
    name: "Darshit Gupta",
    text: "loren jbjvbdjbvjhdbvjhfbhj",
    reply: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, reply } = data;
  return (
    <div className="flex p-2 m-2 shadow-sm bg-gray-100 rounded-lg">
      <div>
        <img
          className="h-8 w-8"
          src="https://www.kindpng.com/picc/m/78-785917_user-login-function-name-avatar-user-icon-hd.png"
          alt="user"
        />
      </div>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p className="">{text}</p>
      </div>
    </div>
  );
};


// Recursion is used to show n level nesting in comments section
const DisplyCommentList = ({ comment }) => {
  return (
    <>
      {comment.map((e,index) => {
        return (
          <div key={index}>
            <Comment data={e} />
            <div className="pl-5 border border-l-black ml-5">
                <DisplyCommentList comment={e.reply}/>
            </div>
          </div>
        );
      })}
    </>
  );
};


function CommentsContainer() {
  return (
    <div className="m-5 mr-10 p-2 w-[1200px]">
      <h1 className="text font-bold">Comments:</h1>
      <DisplyCommentList comment={CommentsData} />
    </div>
  );
}

export default CommentsContainer;
