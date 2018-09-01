import React, { Component } from 'react';
import Loader from '../library/loader';
import Item from './item';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing.unit * 2,
      },
});



class ImageContainer extends Component {
    static defaultProps = {
        entities: []
    };

    state = {
        query: null
    }
    componentDidMount() {
        this.props.fetch();
    }
    handleSearch(event) {
        this.setState({
            query: event.target.value
        })
    }

    search() {
        this.props.fetch(this.state.query)
    }
    renderItems() {
        return this.props.entities.map(image => {
            return <Item {...image} key={image.id} />;
        })
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
    render() {
        const { isFetching, classes } = this.props;
        return (
            <div>
                <h1 className="heading">Image Gallery</h1>
                <div className="searchContainer">
                    <input type="text" className="gallerySearch" onChange={this.handleSearch.bind(this)} />
                    <div>
                        <Button variant="contained" color="primary" className={classes.button} onClick={this.search.bind(this)}>Search
                        </Button>
                    </div>
                </div>
                <div className="select">
                <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-simple">Image Type</InputLabel>
                  <Select
                    value={this.state.age}
                    onChange={this.handleChange}
                    inputProps={{
                      name: 'age',
                      id: 'age-simple',
                    }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Photo</MenuItem>
                    <MenuItem value={40}>Illustranition</MenuItem>
                    <MenuItem value={50}>Vector</MenuItem>
                  </Select>
                </FormControl>
                </form>
                <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-simple">Order</InputLabel>
                  <Select
                    value={this.state.age}
                    onChange={this.handleChange}
                    inputProps={{
                      name: 'age',
                      id: 'age-simple',
                    }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Popular</MenuItem>
                    <MenuItem value={20}>Latest</MenuItem>
                  </Select>
                </FormControl>
                </form>
                <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-simple">Per page</InputLabel>
                  <Select
                    value={this.state.age}
                    onChange={this.handleChange}
                    inputProps={{
                      name: 'age',
                      id: 'age-simple',
                    }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>20</MenuItem>
                    <MenuItem value={20}>50</MenuItem>
                    <MenuItem value={20}>100</MenuItem>
                    <MenuItem value={20}>150</MenuItem>
                    <MenuItem value={20}>200</MenuItem>
                  </Select>
                </FormControl>
                </form>
                <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-simple">Orientation</InputLabel>
                  <Select
                    value={this.state.age}
                    onChange={this.handleChange}
                    inputProps={{
                      name: 'age',
                      id: 'age-simple',
                    }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Horizontal</MenuItem>
                    <MenuItem value={40}>Vertical</MenuItem>
                  </Select>
                </FormControl>
                </form>
                <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-simple">Editors choice</InputLabel>
                  <Select
                    value={this.state.age}
                    onChange={this.handleChange}
                    inputProps={{
                      name: 'age',
                      id: 'age-simple',
                    }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Yes</MenuItem>
                    <MenuItem value={20}>No</MenuItem>
                  </Select>
                </FormControl>
                </form>
                <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-simple">Category</InputLabel>
                <Select
                  value={this.state.age}
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'age',
                    id: 'age-simple',
                  }}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>fashion</MenuItem>
                  <MenuItem value={20}>nature</MenuItem>
                  <MenuItem value={40}>backgrounds</MenuItem>
                  <MenuItem value={20}>science</MenuItem>
                  <MenuItem value={20}>education</MenuItem>
                  <MenuItem value={20}>people</MenuItem>
                  <MenuItem value={20}>feelings</MenuItem>
                  <MenuItem value={20}>religion</MenuItem>
                  <MenuItem value={20}>health</MenuItem>
                  <MenuItem value={20}>places</MenuItem>
                  <MenuItem value={20}>animals</MenuItem>
                  <MenuItem value={20}>industry</MenuItem>
                  <MenuItem value={20}>food</MenuItem>
                  <MenuItem value={20}>computer</MenuItem>
                  <MenuItem value={20}>sports</MenuItem>
                  <MenuItem value={20}>transportation</MenuItem>
                  <MenuItem value={20}>travel</MenuItem>
                  <MenuItem value={20}>buildings</MenuItem>
                  <MenuItem value={20}>business</MenuItem>
                  <MenuItem value={20}>music</MenuItem>
                </Select>
              </FormControl>
                </form>
                <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-simple">Colors</InputLabel>
                <Select
                  value={this.state.age}
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'age',
                    id: 'age-simple',
                  }}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>grayscale</MenuItem>
                  <MenuItem value={20}>transparent</MenuItem>
                  <MenuItem value={40}>red</MenuItem>
                  <MenuItem value={20}>orange</MenuItem>
                  <MenuItem value={20}>yellow</MenuItem>
                  <MenuItem value={20}>green</MenuItem>
                  <MenuItem value={20}>turquoise</MenuItem>
                  <MenuItem value={20}>blue</MenuItem>
                  <MenuItem value={20}>lilac</MenuItem>
                  <MenuItem value={20}>pink</MenuItem>
                  <MenuItem value={20}>white</MenuItem>
                  <MenuItem value={20}>gray</MenuItem>
                  <MenuItem value={20}>black</MenuItem>
                  <MenuItem value={20}>brown</MenuItem>
                </Select>
              </FormControl>
                </form>
                </div>
                <div className="gallery">
                    {isFetching ? <Loader /> : this.renderItems()}
                </div>
            </div>

        );
    }
}
export default withStyles(styles)(ImageContainer);
