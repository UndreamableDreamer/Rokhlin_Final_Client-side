import { ActionInterface } from "../../../types/types";

export const value = [
  {
    "id": 1,
    "title": "Example ",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis risus sed vulputate odio. Id leo in vitae turpis massa sed elementum tempus. Eget mauris pharetra et ultrices neque ornare. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Sed nisi lacus sed viverra tellus. Feugiat vivamus at augue eget. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Sit amet justo donec enim diam vulputate ut pharetra. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Ut faucibus pulvinar elementum integer enim neque volutpat. Orci porta non pulvinar neque laoreet suspendisse interdum. Scelerisque felis imperdiet proin fermentum leo.Euismod lacinia at quis risus sed vulputate odio ut. Lectus proin nibh nisl condimentum id venenatis a. Pharetra sit amet aliquam id diam maecenas ultricies. Sit amet porttitor eget dolor morbi non arcu. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Tristique magna sit amet purus gravida quis blandit. Purus semper eget duis at tellus. Nulla aliquet enim tortor at auctor urna nunc id. Urna id volutpat lacus laoreet non curabitur gravida arcu. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Pellentesque elit eget gravida cum sociis natoque penatibus. Massa placerat duis ultricies lacus sed. Libero volutpat sed cras ornare arcu dui vivamus. Consequat ac felis donec et odio pellentesque diam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Ullamcorper morbi tincidunt ornare massa eget egestas.",
    "imageUrl": null,
    "updatedAt": "2024-03-27T07:47:37.360Z",
    "user": {
      "id": 1,
      "login": "UnDreamer"
    },
    "tags": [
      {
        "id": 1,
        "name": "TestTag"
      }
    ]
  }
]

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
}

export default function postsReducer(state = initialState, action: ActionInterface) {
  switch (action.type) {
    case 'Valueqwerty':
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
        error: null,
      }
  
    default:
      return initialState;
  }

}