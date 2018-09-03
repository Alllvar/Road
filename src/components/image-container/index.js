import React, { Component } from 'react';
import Loader from '../library/loader';
import Item from './item';

import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
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
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        margin: theme.spacing.unit,
    },
});

class ImageContainer extends Component {
    static defaultProps = {
        entities: []
    };

    state = {
        query: null,
        type: '',
        order: '',
        per_page: '',
        orientation: '',
        editors_choice: '',
        category: '',
        colors: '',
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
        this.props.fetch(this.state)
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
                    <div className={classes.container}>
                        <Input className={classes.input} onChange={this.handleSearch.bind(this)} />
                        <Button variant="contained" color="primary" className={classes.button} onClick={this.search.bind(this)}>Search</Button>
                    </div>
                </div>
                <div className="select">
                    <form className={classes.root} autoComplete="off">
                        <FormControl className={classes.formControl}>
                            <InputLabel>Image Type</InputLabel>
                            <Select
                                value={this.state.type}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'type',
                                }}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="all">All</MenuItem>
                                <MenuItem value="photo">Photo</MenuItem>
                                <MenuItem value="illustration">Illustration</MenuItem>
                                <MenuItem value="vector">Vector</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                    <form className={classes.root} autoComplete="off">
                        <FormControl className={classes.formControl}>
                            <InputLabel>Order</InputLabel>
                            <Select
                                value={this.state.order}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'order',
                                }}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="popular">Popular</MenuItem>
                                <MenuItem value="latest">Latest</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                    <form className={classes.root} autoComplete="off">
                        <FormControl className={classes.formControl}>
                            <InputLabel>Per page</InputLabel>
                            <Select
                                value={this.state.per_page}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'per_page',
                                }}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="20">20</MenuItem>
                                <MenuItem value="50">50</MenuItem>
                                <MenuItem value="100">100</MenuItem>
                                <MenuItem value="150">150</MenuItem>
                                <MenuItem value="200">200</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                    <form className={classes.root} autoComplete="off">
                        <FormControl className={classes.formControl}>
                            <InputLabel>Orientation</InputLabel>
                            <Select
                                value={this.state.orientation}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'orientation',
                                }}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="all">All</MenuItem>
                                <MenuItem value="horizontal">Horizontal</MenuItem>
                                <MenuItem value="vertical">Vertical</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                    <form className={classes.root} autoComplete="off">
                        <FormControl className={classes.formControl}>
                            <InputLabel>Editors choice</InputLabel>
                            <Select
                                value={this.state.editors_choice}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'editors_choice',
                                }}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="true">Yes</MenuItem>
                                <MenuItem value="false">No</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                    <form className={classes.root} autoComplete="off">
                        <FormControl className={classes.formControl}>
                            <InputLabel>Category</InputLabel>
                            <Select
                                value={this.state.category}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'category',
                                }}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="fashion">fashion</MenuItem>
                                <MenuItem value="nature">nature</MenuItem>
                                <MenuItem value="backgrounds">backgrounds</MenuItem>
                                <MenuItem value="science">science</MenuItem>
                                <MenuItem value="education">education</MenuItem>
                                <MenuItem value="people">people</MenuItem>
                                <MenuItem value="feelings">feelings</MenuItem>
                                <MenuItem value="religion">religion</MenuItem>
                                <MenuItem value="health">health</MenuItem>
                                <MenuItem value="places">places</MenuItem>
                                <MenuItem value="animals">animals</MenuItem>
                                <MenuItem value="industry">industry</MenuItem>
                                <MenuItem value="food">food</MenuItem>
                                <MenuItem value="computer">computer</MenuItem>
                                <MenuItem value="sports">sports</MenuItem>
                                <MenuItem value="transportation">transportation</MenuItem>
                                <MenuItem value="travel">travel</MenuItem>
                                <MenuItem value="buildings">buildings</MenuItem>
                                <MenuItem value="business">business</MenuItem>
                                <MenuItem value="music">music</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                    <form className={classes.root} autoComplete="off">
                        <FormControl className={classes.formControl}>
                            <InputLabel>Colors</InputLabel>
                            <Select
                                value={this.state.colors}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'colors',
                                }}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="grayscale">grayscale</MenuItem>
                                <MenuItem value="transparent">transparent</MenuItem>
                                <MenuItem value="red">red</MenuItem>
                                <MenuItem value="orange">orange</MenuItem>
                                <MenuItem value="yellow">yellow</MenuItem>
                                <MenuItem value="green">green</MenuItem>
                                <MenuItem value="turquoise">turquoise</MenuItem>
                                <MenuItem value="blue">blue</MenuItem>
                                <MenuItem value="lilac">lilac</MenuItem>
                                <MenuItem value="pink">pink</MenuItem>
                                <MenuItem value="white">white</MenuItem>
                                <MenuItem value="gray">gray</MenuItem>
                                <MenuItem value="black">black</MenuItem>
                                <MenuItem value="brown">brown</MenuItem>
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
