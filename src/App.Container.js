import { connect } from 'react-redux';
import ToggleMap from './ToggleBtn/ToggleMap';
import ToggledBg from './ToggleBtn/ToggledBg';

const AppContainer = connect(ToggleMap.mapStateToProps, ToggleMap.mapDispatchToProps)(ToggledBg);

export default AppContainer;