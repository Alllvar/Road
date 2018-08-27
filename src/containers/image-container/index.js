import { connect } from 'react-redux';
import { fetchImages as fetch } from '../../actions/images';
import ImageContainer from '../../components/image-container';

const mapStateToProps = (state) => {
    const { images: { entities, isFetching } } = state;

    return {
        entities,
        isFetching
    };
};

const mapDispatchToProps = {
    fetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer);