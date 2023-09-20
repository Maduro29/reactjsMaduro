import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Tip.scss';
import { FormattedMessage } from 'react-intl';

import Slider from 'react-slick';
import "../../../../node_modules/slick-carousel/slick/slick.scss";
import "../../../../node_modules/slick-carousel/slick/slick-theme.scss";

class Tip extends Component {

    render() {
        return (
            <div className='section-container tip-container'>
                <div className='section-content tip-content'>
                    <div className='slide-text'>
                        <h3 className='slide-title'>Cẩm nang</h3>
                        <button className='slide-button'>Xem thêm</button>
                    </div>
                    <div className='slide'>
                        <Slider {...this.props.settings}>
                            <div className='slide-item'>
                                <div className='section-item tip-item'>
                                </div>
                                <h3 className='section-text tip-text'>Cẩm nang 1</h3>
                            </div>
                            <div className='slide-item'>
                                <div className='section-item tip-item'>
                                </div>
                                <h3 className='section-text tip-text'>Cẩm nang 2</h3>
                            </div>
                            <div className='slide-item'>
                                <div className='section-item tip-item'>
                                </div>
                                <h3 className='section-text tip-text'>Cẩm nang 3</h3>
                            </div>
                            <div className='slide-item'>
                                <div className='section-item tip-item'>
                                </div>
                                <h3 className='section-text tip-text'>Cẩm nang 4</h3>
                            </div>
                            <div className='slide-item'>
                                <div className='section-item tip-item'>
                                </div>
                                <h3 className='section-text tip-text'>Cẩm nang 5</h3>
                            </div>
                            <div className='slide-item'>
                                <div className='section-item tip-item'>
                                </div>
                                <h3 className='section-text tip-text'>Cẩm nang 6</h3>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tip);
