import React from "react";
import { Paper, TextField } from "@material-ui/core";
class SearchBar extends React.Component{

  state={
    searchTerm: '',
  }
  handleChange=(event) => this.setState({searchTerm: event.target.value});
handleSubmit = () =>{
const {searchTerm} =this.state;
const {onFormSubmit} =this.props;
onFormSubmit(searchTerm);
//event.preventDefault();
}

/* export default ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => setSearchTerm(event.target.value);

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  } */
render(){
  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <form onSubmit={this.handleSubmit} ></form> 
          
          <TextField  fullWidth label="Search..."
        
        onChange={this.handleChange}
        
      />
    </Paper>
  );
}
}
export default SearchBar;