import React ,{Component} from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동１',
    'birthday': '96121２',
    'gender': '남자',
    'job':'대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '홍길동2',
    'birthday': '96121３',
    'gender': '남자',
    'job':'프로그래머'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '홍길동３',
    'birthday': '96031４',
    'gender': '남자',
    'job':'백수'
  },

]
class App extends Component {
  render() {
    let result = customers.map(customer => {
      let {id, image, name, birthday, gender, job} = customer
      return (
        
        <Customer 
          name={name} 
          birthday={birthday}
          gender={gender}
          job={job} 
          id={id}
          image={image}
          />
      );
    })
    return (
      <div>
        {result}
      </div>
    )
  }
  
}

export default App;
