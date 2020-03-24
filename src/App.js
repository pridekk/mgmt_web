import React ,{Component} from 'react';
import './App.css';
import Customer from './components/Customer'
import {Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit *3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080,
    backgroundColor:'blue'
  }
})
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
    const {classes} = this.props
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
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {result}
          </TableBody>

        </Table>
        
      </Paper>
    )
  }
  
}

export default withStyles(styles)(App);
