import React ,{Component} from 'react';
import './App.css';
import Customer from './components/Customer'

const customer = {
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍길동',
  'birthday': '961212',
  'gender': '남자',
  'job':'대학생'
}
class App extends Component {
  render() {
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
  }
  
}

export default App;
