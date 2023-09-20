import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss';
import { FormattedMessage } from 'react-intl';

import Slider from 'react-slick';
import "../../../../node_modules/slick-carousel/slick/slick.scss";
import "../../../../node_modules/slick-carousel/slick/slick-theme.scss";

class MedicalFacility extends Component {

    render() {
        return (
            <div className='section-container facility-container'>
                <div className='section-content facility-content'>
                    <div className='slide-text'>
                        <h3 className='slide-title'>Cơ sở y tế nổi bật</h3>
                        <button className='slide-button'>Xem thêm</button>
                    </div>
                    <div className='slide'>
                        <Slider {...this.props.settings}>
                            <div className='slide-item'>
                                <div className='section-item facility-item'>
                                </div>
                                <h3 className='section-text facility-text'>Cơ sở 1</h3>
                            </div>
                            <div className='slide-item'>
                                <div className='section-item facility-item'>
                                </div>
                                <h3 className='section-text facility-text'>Cơ sở 2</h3>
                            </div>
                            <div className='slide-item'>
                                <div className='section-item facility-item'>
                                </div>
                                <h3 className='section-text facility-text'>Cơ sở 3</h3>
                            </div>
                            <div className='slide-item'>
                                <div className='section-item facility-item'>
                                </div>
                                <h3 className='section-text facility-text'>Cơ sở 4</h3>
                            </div>
                            <div className='slide-item'>
                                <div className='section-item facility-item'>
                                </div>
                                <h3 className='section-text facility-text'>Cơ sở 5</h3>
                            </div>
                            <div className='slide-item'>
                                <div className='section-item facility-item'>
                                </div>
                                <h3 className='section-text facility-text'>Cơ sở 6</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
